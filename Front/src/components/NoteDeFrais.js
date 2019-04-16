/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import './Vision.css';
import { Table, Button, Icon } from 'semantic-ui-react';


class NoteDeFrais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      costs: []
    };
    this.inputComment = this.inputComment.bind(this);
    // this.createArrayCosts = this.createArrayCosts.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  inputComment(index, event) {
    const { costs } = this.state;
    event.preventDefault();
    const costsCopy = [...costs];
    costsCopy[index] = event.target.value;
    this.setState({ costs: costsCopy });
    console.log('inputComment', event.target.value, index);
  }

  // eslint-disable-next-line no-unused-vars
  handleDateChange(event, { name, value }, index) {
    const { costs } = this.state;
    const copyTable = [...costs];
    console.log('before', copyTable[index]);
    copyTable[index].value = value;
    console.log('after', copyTable[index]);
    this.setState({ costs: copyTable });
  }

  // eslint-disable-next-line class-methods-use-this
  addEmptyLine(costs) {
    costs.push({
      Date, Client: '', Description: '', KM: '', Forfait: '', Hôtel: '', Repas: '', Essence: '', Divers: ''
    });
    console.log(costs);
    this.setState({ costs });
  }

  render() {
    const { costs } = this.state;
    console.log(costs);

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
                <Table.Cell>
                  <DateInput
                    name={json.date}
                    placeholder="Date"
                    value={json.value}
                    iconPosition="left"
                    className="style_input_date"
                    onChange={(event, { name, value }) => this.handleDateChange(
                      event,
                      { name, value },
                      index
                    )}
                  />
                </Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Client" value={json.Client} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" className="style_input" name="Description" value={json.Description} onChange={event => this.inputComment(index, event)} /></Table.Cell>
                <Table.Cell><input type="text" disabled="disabled" className="style_input" name="KM" value={json.KM} onChange={event => this.inputComment(index, event)} /></Table.Cell>
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
        <Button color="teal" onClick={() => this.addEmptyLine(costs)} icon="plus circle" />
        <br />
        <br />
        <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Soumettre</Button>
      </div>
    );
  }
}

export default NoteDeFrais;
