import React, { Component } from 'react';
import dateFns from 'date-fns';
import "./Cra.css";

class Employee extends Component {
    constructor(props) {
     super(props);
     this.state = {
      currentMonth: new Date(),
      selectedDate: new Date()
     }
    }

renderHeader() {
    const dateFormat = "MMMM YYYY";
    return (
     <div className="header row flex-middle">
      <div className="col col-start">
    <div className="icon" onClick={this.prevMonth}>
     chevron_left
    </div>
      </div>
      <div className="col col-center">
    <span>
     {dateFns.format(this.state.currentMonth, dateFormat)}
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
    const dateFormat = "dddd";
    const dateFormat1 = "DD";
    const rows = [];
    let days = [];
    let day = monthStart;
    let formattedDate = "";
    let formattedDate1 = "";

    while (day <= endDate) {
     for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      formattedDate1 = dateFns.format(day, dateFormat1);
      days.push(
    <div className='container'>
     <span className="borderDay">{formattedDate1}&nbsp; &nbsp; &nbsp;{formattedDate}</span>
     <span className="borderPresence">
      &nbsp; &nbsp; &nbsp;
      Présence
      0<input type="checkbox" value="check"></input>
      1/2<input type="checkbox" value="check"></input>
      1<input type="checkbox" value="check"></input>
     </span>
     <input className="floatInput" type="text" placeHolder="commentaire"></input>
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
    )
}

onDateClick = (day) => {
    this.setState({
     selectedDate: day
    });
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

render() {
return (
     <div>
      <h2><span className="logo1">Espace</span> <span className="logo">Employee</span></h2>
      <h4>Prénon : Cindy</h4>
      <h4>Nom : Deriot</h4>
      <div className="calendar">
    {this.renderHeader()}
    {this.renderCells()}
      </div>
      <h5>Total jours travaillé : 0</h5>
      <h3><span className="logo1">Note d</span><span className="logo">e frais</span></h3>
      <table>
    <tr>
     <th>Date</th>
     <th>Client</th>
     <th>Descriptifs</th>
     <th>Km</th>
     <th>Forfaits Cciaux</th>
     <th>Hôtels</th>
     <th>repas</th>
     <th>Essence</th>
     <th>Divers</th>
     <th>Totals</th>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
    <tr>
     <td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><input /></td>
    </tr>
      </table>
      <h5>Total notes de frais : 0</h5>

     </div>
    )
}
}

export default Employee;