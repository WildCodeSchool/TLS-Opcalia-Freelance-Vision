/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
// import { DateInput } from 'semantic-ui-calendar-react';
import { Table, Icon, Button } from 'semantic-ui-react';
import dateFns from 'date-fns';
import './Vision.css';


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
    console.log('choiceRate', event.target.value, index);
    console.log(daysCopy[index].rate);
    console.log('days', days);
  }

  totalRate(days) {
    let somme = 0;
    console.log('somme', somme);
    // eslint-disable-next-line no-return-assign
    days.map((item) => (
      somme += Number(item.rate)
    ));
    this.setState({ somme });
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

  renderCell() {
    const { days } = this.state;
    return (
      <div>
        <div>
          {days.map((json, index) => (
            <div key={index}>
              <Table.Body className="container">
                <Table.Row>
                  <th>
                    <Table.Cell className="borderDay">{json.dayNumber}</Table.Cell>
                  </th>
                  <th>
                    <Table.Cell className="borderPresence">{json.dayName}</Table.Cell>
                  </th>
                  <th>
                    <tr>
                      <span> Présence : </span>
                      <span>
                        <span> 0: </span>
                        <input
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
              </Table.Body>
            </div>
          ))
          }
          <br />
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
            {/* <DateInput
              name="Date"
              placeholder="Date"
              value="Date"
              iconPosition="left"
              className=""
            />  */}
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
        <br /><br />
        <div className="calendar">
          {this.renderHeader()}
          {this.renderCell()}
          <h3><span className="logo">Nombre de </span><span className="logo1">jours travaillés: <span className="logo">{somme}</span></span><br /></h3>
          <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer</Button>
        </div>
      </div>
    );
  }
}


export default Cra;
