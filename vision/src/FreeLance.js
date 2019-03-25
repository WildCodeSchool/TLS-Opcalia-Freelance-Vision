import React, { Component } from 'react';
import dateFns from 'date-fns';
import "./Cra.css";

class FreeLance extends Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
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
        const { currentMonth, selectedDate } = this.state;
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
                const cloneDay = day;
                days.push(

                    <div
                        className={`container 
                        ${!dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""}`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="borderDay">{formattedDate1}&nbsp; &nbsp; &nbsp;{formattedDate}</span>
                        {/* <span className="borderNum">{formattedDate1}</span> */}
                        <span className="borderPresence">
                            &nbsp; &nbsp; &nbsp;
                            Présence
                            0<input type="checkbox"></input>
                            1/2<input type="checkbox"></input>
                            1<input type="checkbox"></input>
                        </span>
                        <input className="floatInput" type="text" placeHolder="commentaire"></input>
                    </div>
                );
                day = dateFns.addDays(day, 1);
                // console.log("début "+day.getDay());
                // console.log("fin "+endDate.getDay());
                if (day.getDay() >= endDate.getDay()) {
                    //console.log("je sort");
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
                <h2><span className="logo1">Espace</span> <span className="logo">FreeLance</span></h2>
                <h4>Prénon : Claire</h4>
                <h4>Nom : Artigues</h4>
                <div className="calendar">
                    {this.renderHeader()}
                    {this.renderCells()}
                </div>
                <h5>Total jours travaillé : 0</h5>

            </div>
        )
    }
}

export default FreeLance;