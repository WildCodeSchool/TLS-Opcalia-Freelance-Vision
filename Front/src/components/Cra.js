/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import dateFns from 'date-fns';
import './Vision.css';


class Cra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      days: this.createArrayDays(new Date()),
      // totalRate: 0
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.createArrayDays = this.createArrayDays.bind(this);
    this.inputComment = this.inputComment.bind(this);
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
    console.log('choiceRate', event.target.value, index);
    console.log(daysCopy[index].rate);
  }

  // addRate() {
  //   const totalRate = 0;
  //   let addRate = 0;
  //   const { days } = this.state;
  //   for (let i = 0; i < days.lenght; i += 1) {
  //     addRate[i] += 1;
  //     addRate = totalRate;
  //   }
  //   console.log('totalRate', totalRate);
  //   return totalRate;
  // }

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
            <div>
              <table className="container">
                <th>
                  <td className="borderDay">{json.dayNumber}</td>
                </th>
                <th>
                  <td className="borderPresence">{json.dayName}</td>
                </th>
                <th>
                  <span> Présence : </span>
                  <span>
                    <span> 0: </span>
                    <input
                      type="radio"
                      id="zero"
                      name="rate"
                      value="0"
                      onChange={event => this.choiceRate(index, event)}
                    />
                  </span>
                  <span>
                    <span> 1/2: </span>
                    <input
                      type="radio"
                      id="demi"
                      name="rate"
                      value="0.5"
                      onChange={event => this.choiceRate(index, event)}
                    />
                  </span>
                  <span>
                    <span> 1: </span>
                    <input
                      type="radio"
                      id="un"
                      name="rate"
                      value="1"
                      onChange={event => this.choiceRate(index, event)}
                    />
                  </span>
                </th>
                <th>
                  <td><input className="inputCra" value={json.comment} onChange={event => this.inputComment(index, event)} /></td>
                </th>
              </table>
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
    return (
      <div>
        <br /><br />
        <div className="calendar">
          {this.renderHeader()}
          {this.renderCell()}
          <h3><span className="logo">Nombre de </span><span className="logo1">jour travaillé: <p className="JourTravaillé">{}</p></span><br /></h3>
          <input className="ButtonEnvoye" type="submit" value="soumettre" />
        </div>
      </div>
    );
  }
}


export default Cra;
