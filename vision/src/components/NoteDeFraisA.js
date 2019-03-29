/* eslint-disable max-len */
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
//import Calendar from 'react-calendar';
// import DatePicker from "react-datepicker";
import DatePicker from 'react-date-picker'
import "./Cra.css";
// import { log } from 'util';


class NoteDeFrais extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     startDate: new Date()
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }
  // state = {
  //   date: new Date(),
  //   formatedDate: ""
  // }

  // onChange = (date) => {
  //   console.log(date);
  //   this.setState({ formatedDate: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() })



  render() {
    // console.log(this.state.date.getDate()+"/"+this.state.date.getMonth()+"/"+this.state.date.getFullYear());

    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Client</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>KM</Table.HeaderCell>
              <Table.HeaderCell>Forfait (Cciaux)</Table.HeaderCell>
              <Table.HeaderCell>Hôtel</Table.HeaderCell>
              <Table.HeaderCell>Repas</Table.HeaderCell>
              <Table.HeaderCell>Essence</Table.HeaderCell>
              <Table.HeaderCell>Divers(taxi/péage/tél)</Table.HeaderCell>
              <Table.HeaderCell>Total Frais</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell><div><DatePicker
                onChange={this.onChange}
                value={this.state.date}
              /></div></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
              <Table.Cell><input type="text" class="style_input" /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

    )
  }
};

export default NoteDeFrais;
