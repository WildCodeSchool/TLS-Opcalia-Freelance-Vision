/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import dateFns from 'date-fns';
import './Vision.css';


class Cra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date()
    };
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
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

  renderCells() {
    const { currentMonth } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const endDate = monthEnd;
    const dateFormat = 'dddd';
    const dateFormat1 = 'DD';
    const rows = [];
    let days = [];
    let day = monthStart;
    let formattedDate = '';
    let formattedDate1 = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i += 1) {
        formattedDate = dateFns.format(day, dateFormat);
        formattedDate1 = dateFns.format(day, dateFormat1);
        days.push(
          <div
            className="container">
            <span className="borderDay">{formattedDate1}&nbsp; &nbsp; &nbsp;{formattedDate}</span>
            <span className="borderPresence">
              &nbsp; &nbsp; &nbsp;
              Présence
              0<input type="checkbox" id="0" onClick={(event) => {
                if (event.target.checked === true) {
                  console.log("is true");
                  document.getElementById("1").checked = false
                  document.getElementById("2").checked = false
                }
              }} />
              1/2<input type="checkbox" id="1" onClick={(event) => {
                if (event.target.checked === true) {
                  console.log("is true");
                  document.getElementById("0").checked = false
                  document.getElementById("2").checked = false
                }
              }} />
              1<input type="checkbox" id="2" onClick={(event) => {
                if (event.target.checked === true) {
                  console.log("is true");
                  document.getElementById("0").checked = false
                  document.getElementById("1").checked = false
                }
              }} />
            </span>
            <input className="floatInput" type="text" placeholder="commentaire" />
          </div>
        );
        day = dateFns.addDays(day, 1);
        if (day.getDay() >= endDate.getDay()) {
          break;
        }
      }
      rows.push(
        <div className="" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return (
      <div>
        <div>
          {rows}
          <br />
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
          {this.renderCells()}
          <h3><span className="logo">Nombre de </span><span className="logo1">jour travaillé: </span><br /></h3>
          <input className="ButtonEnvoye" type="submit" value="soumettre" />
        </div>
      </div>
    );
  }
}


export default Cra;
