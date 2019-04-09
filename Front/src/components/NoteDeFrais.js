/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import './Vision.css';
import { Table } from 'semantic-ui-react';
// import { Form } from 'semantic-ui-react';


class NoteDeFrais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      costs: this.addEmptyLine([])

    };
    this.inputComment = this.inputComment.bind(this);
    // this.createArrayCosts = this.createArrayCosts.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, { name, value }) {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line no-prototype-builtins
    const hasOwnProperty = this.state.hasOwnProperty(name);
    const newCosts = this.addEmptyLine(this.state.costs);

    if (hasOwnProperty) {
      this.setState({ [name]: value, costs: newCosts });
    }
  }

  inputComment(index, event) {
    const { costs } = this.state;
    event.preventDefault();
    const costsCopy = [...costs];
    costsCopy[index] = event.target.value;
    this.setState({ costs: costsCopy });
    console.log('inputComment', event.target.value, index);
  }

  // eslint-disable-next-line class-methods-use-this
  addEmptyLine(costs) {
    costs.push({
      Date, Client: '', Description: '', KM: '', Forfait: '', Hôtel: '', Repas: '', Essence: '', Divers: ''
    });
    return costs;
  }

  render() {
    const { costs, date } = this.state;
    return (
      <div>
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
          {costs.map((json, index) => (
            <Table.Body>
              <Table.Row>
                <Table.Cell> <DateInput
                  name="date"
                  placeholder="Date"
                  value={date}
                  iconPosition="left"
                  className="style_input_date"
                  onChange={this.handleDateChange}
                />
                </Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Client" value={json.Client} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Description" value={json.Description} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="KM" value={json.KM} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Forfait" value={json.Forfait} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Hôtel" value={json.Hôtel} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Repas" value={json.Repas} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Essence" value={json.Essence} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Divers" value={json.Divers} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" /></Table.Cell>
              </Table.Row>
            </Table.Body>
          ))
        }
        </Table>
        <input className="ButtonEnvoye" type="submit" value="soumettre" />
      </div>
    );
  }
}

export default NoteDeFrais;
