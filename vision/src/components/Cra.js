/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import dateFns from 'date-fns';
import './Cra.css';


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
            className="container"
          >
            <span className="borderDay">{formattedDate1}&nbsp; &nbsp; &nbsp;{formattedDate}</span>
            <span className="borderPresence">
              &nbsp; &nbsp; &nbsp;
              Présence
              0<input type="checkbox" />
              1/2<input type="checkbox" />
              1<input type="checkbox" />
            </span>
            <input className="floatInput" type="text" placeHolder="commentaire" />
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
        <input className="ButtonEnvoye" type="submit" value="soumettre" />
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
        </div>
      </div>
    );
  }
}


export default Cra;
