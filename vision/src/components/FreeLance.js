/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import dateFns from 'date-fns';
import './Cra.css';

class FreeLance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderCells = this.renderCells.bind(this);
  }

  nextMonth() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: dateFns.addMonths(currentMonth, 1)
    });
  }

  prevMonth() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: dateFns.subMonths(currentMonth, 1)
    });
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
          <div className="container">
            <span className="borderDay">{formattedDate1}&nbsp; &nbsp; &nbsp;{formattedDate}</span>
            <span className="borderPresence">
      &nbsp; &nbsp; &nbsp;
      Présence
      0<input type="checkbox" value="check" />
      1/2<input type="checkbox" value="check" />
      1<input type="checkbox" value="check" />
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
        <div className="">
          {rows}
          <br />
        </div>
        <input className="ButtonEnvoye" type="submit" value="soumettre" />
      </div>
    );
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY';
    const { currentMonth } = this.state;
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
        <h2><span className="logo1">Espace</span> <span className="logo">FreeLance</span></h2>
        <h4>Prénon : Claire</h4>
        <h4>Nom : Artigues</h4>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderCells()}
        </div>
        <h5>Total jours travaillé : 0</h5>

      </div>
    );
  }
}

export default FreeLance;
