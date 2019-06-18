/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import dateFns from 'date-fns';
import Noty from 'noty';
import Axios from 'axios';
import './Vision.scss';
import { urlServer } from '../config.json';

class Cra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      somme: 0,
      currentMonth: new Date(),
      days: this.createArrayDays(new Date()),
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.createArrayDays = this.createArrayDays.bind(this);
    this.inputComment = this.inputComment.bind(this);
    this.totalRate = this.totalRate.bind(this);
    this.copyLine = this.copyLine.bind(this);
    this.postCra = this.postCra.bind(this);
  }

  componentDidMount() {
    const { identifiant, tokenUser } = this.props;
    const { currentMonth } = this.state;
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    };
    const month = dateFns.format(currentMonth, 'MMMM');
    const year = dateFns.format(currentMonth, 'YYYY');
    console.log("IDDDD", identifiant);

    Axios.post('http://localhost:4000/getCraOfMonth', {
      Date: `${month} ${year}`,
      userID: identifiant,
    }, config).then(res => {
      console.log(res.data);
    });
  }

  nextMonth() {
    const { currentMonth } = this.state;
    const nextMonth = dateFns.addMonths(currentMonth, 1);
    this.setState({
      currentMonth: nextMonth,
      days: this.createArrayDays(nextMonth)
    });
  }

  prevMonth() {
    const { currentMonth } = this.state;
    const prevMonth = dateFns.subMonths(currentMonth, 1);
    this.setState({
      currentMonth: prevMonth,
      days: this.createArrayDays(prevMonth)
    });
  }

  inputComment(index, event) {
    const { days } = this.state;
    event.preventDefault();
    const daysCopy = [...days];
    daysCopy[index].comment = event.target.value;
    this.setState({ days: daysCopy });
    console.log('inputComment', event.target.value, index);
  }

  choiceRate(index, event) {
    const { days } = this.state;
    const daysCopy = [...days];
    daysCopy[index].rate = event.target.value;
    this.setState({ days: daysCopy });
    this.totalRate(daysCopy);
    console.log(daysCopy[index].rate);
  }

  totalRate(days) {
    let somme = 0;
    // eslint-disable-next-line no-return-assign
    days.map((item) => (
      somme += Number(item.rate)
    ));
    this.setState({ somme });
  }

  postCra(event) {
    event.preventDefault();
    const { id, tokenUser } = this.props;
    const { somme, days, currentMonth } = this.state;
    const month = dateFns.format(currentMonth, 'MMMM');
    const year = dateFns.format(currentMonth, 'YYYY');
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    };
    console.log('mois: ', dateFns.format(currentMonth, 'MMMM'));
    console.log('year: ', dateFns.format(currentMonth, 'YYYY'));
    console.log(config);
    console.log('daysDuPost', days);
    Axios.post(`${urlServer}/cra`, {
      tableDays: days,
      sommeCra: somme,
      month,
      year,
      id
    }, config)
      .then(res => {
        console.log(res.data.response);

        if (res.data.response === 'success') {
          console.log('noty');
          new Noty({
            text: "Compte rendu d'activité enregistré",
            type: 'success',
            theme: 'sunset',
            timeout: 2000,
          }).show();
        }
      }).catch(err => {
        console.log(err);
        new Noty({
          text: 'Connection avec le serveur impossible',
          type: 'error',
          theme: 'sunset',
          timeout: 2000,
        }).show();
      });
  }

  // eslint-disable-next-line class-methods-use-this
  createArrayDays(currentMonth) {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const endDate = monthEnd;
    let dayName = '';
    let dayNumber = '';
    const days = [];
    let day = monthStart;
    while (day <= endDate) {
      dayName = dateFns.format(day, 'dddd');
      dayNumber = dateFns.format(day, 'DD');
      days.push({
        dayName, dayNumber, comment: '', rate: ''
      });
      day = dateFns.addDays(day, 1);
    }
    return days;
  }


  copyLine(index, days) {
    const copyDays = [...days];
    const newLine = {
      dayName: days[index].dayName,
      dayNumber: days[index].dayNumber,
      rate: '',
      comment: '',
      isCopied: true
    };
    copyDays.splice(index + 1, 0, newLine);
    this.setState({ days: copyDays });
  }

  deleteLine(index, days) {
    const copyDays = [...days];
    console.log('beforeCopyDays', copyDays);
    if (days[index].isCopied === true) {
      copyDays.splice(index, 1);
    }
    this.setState({ days: copyDays });
    console.log('afterCopyDays', copyDays);
  }

  weekEndGreyStyle(days, index) {
    let daysClass = '';
    let copiedClass = '';
    if (days[index].dayName === 'Sunday' || days[index].dayName === 'Saturday') { daysClass = 'weGrey'; }
    if (days[index].isCopied === true) { copiedClass = 'copiedClass'; }
    const myClassName = `${daysClass} ${copiedClass}`;

    return myClassName;
  }

  renderCell() {
    const { days } = this.state;
    return (
      <div>
        <div className="scrollBoxCRA">
          <Table celled>
            <Table.Body>
              {days.map((json, index) => (
                <div key={index}>
                  <Table.Row className={this.weekEndGreyStyle(days, index)}>
                    <th>
                      <Table.Cell>
                        <Button color="teal" onClick={() => this.copyLine(index, days)} icon="plus circle" />
                        <Button color="teal" onClick={() => this.deleteLine(index, days)} icon="minus circle" />
                        {json.dayNumber}
                      </Table.Cell>
                    </th>
                    <th>
                      <Table.Cell>{json.dayName}</Table.Cell>
                    </th>
                    <th>
                      <tr>
                        <span> Présence : </span>
                        <span>
                          <span> 0: </span>
                          <input
                            defaultChecked
                            type="radio"
                            id="zero"
                            name={`rate${index}`}
                            value="0"
                            onChange={event => this.choiceRate(index, event)}
                          />
                        </span>
                        <span>
                          <span> 1/2: </span>
                          <input
                            type="radio"
                            id="demi"
                            name={`rate${index}`}
                            value="0.5"
                            onChange={event => this.choiceRate(index, event)}
                          />
                        </span>
                        <span>
                          <span> 1: </span>
                          <input
                            type="radio"
                            id="un"
                            name={`rate${index}`}
                            value="1"
                            onChange={event => this.choiceRate(index, event)}
                          />
                        </span>
                      </tr>
                    </th>
                    <th>
                      <Table.Cell><input className="inputCra" value={json.comment} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                    </th>
                  </Table.Row>
                </div>
              ))
              }
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }

  renderHeader() {
    const { currentMonth } = this.state;
    const dateFormat = 'MMMM YYYY';
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  render() {
    const { somme } = this.state;
    return (
      <div>
        <form onSubmit={this.postCra}>
          <div className="calendar">
            {this.renderHeader()}
            {this.renderCell()}
            <h3><span className="logo">Nombre de </span><span className="logo1">jours travaillés: <span className="logo">{somme}</span></span><br /></h3>
            <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Sauvegarder</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  tokenUser: store.auth.tokenUser,
});
export default connect(mapStateToProps)(Cra);
