import React, { Component } from 'react';
import dateFns from 'date-fns';
import "./Cra.css";


class Calendar extends Component {
    
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
        const dateFormat1 = "D";
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
                        
                        <div className={`container  ${!dateFns.isSameMonth(day, monthStart)
                            ? "disabled"
                                    : dateFns.isSameDay(day, selectedDate) ? "selected" : ""}`}
                            key={day}
                            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}>
                            <span className="">{formattedDate}&nbsp;</span>
                            <span className="">{formattedDate1}&nbsp;</span>
                            <span>Présence </span>
                            0<input type="checkbox"></input>
                            1/2<input type="checkbox"></input>
                            1<input type="checkbox"></input>
                            <textarea row="10" col="1000" type="text" placeHolder="commentaire"></textarea>
                            </div>
                        
                            
                    );
                    
                    
                    day = dateFns.addDays(day, 1);
                    
                    // console.log("début "+day.getDay());
                    // console.log("fin "+endDate.getDay());
                    if (day.getDay() >= endDate.getDay()) {
                        console.log("je sort");
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
                <div className="body">
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
            <div className="calendar">
                {this.renderHeader()}
                
                <table>
                <tr>
                <th>{this.renderCells()}</th>
                </tr>
                </table>
            </div>
        )
    }
}

export default Calendar;