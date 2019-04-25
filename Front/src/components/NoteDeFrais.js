/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Table, Button, Icon } from 'semantic-ui-react';
import Axios from 'axios';
import { Progress } from 'reactstrap';
import { IP } from '../config.json';
import './Vision.css';


class NoteDeFrais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      costs: [],
      total: 0,
      loaded: 0
    };
    this.inputComment = this.inputComment.bind(this);
    this.postNoteDeFrais = this.postNoteDeFrais.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.postFiles = this.postFiles.bind(this);


  }

  handleFileChange(event) {
    this.setState({ [event.target.name]: event.target.files[0] });
  }

  postNoteDeFrais(event) {
    event.preventDefault();
    const { costs } = this.state;
    Axios.post(`http://${IP}:4000/noteDeFrais`, {
      tableCosts: costs,
    })
      .then(res => {
        console.log(res);
      });
  }

  postFiles(event) {
    event.preventDefault();
    const { greyCard } = this.state;
    const file = new FormData();
    file.append('file', greyCard);
    console.log('greyCard', greyCard);
    Axios.post(`http://${IP}:4000/sendJustifs`, file, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        });
      }
    })
      .then(res => {
        console.log(res);
      });
  }

  inputComment(index, event, key) {
    const { costs } = this.state;
    console.log('key', key);
    event.preventDefault();
    const costsCopy = [...costs];
    if (key === 'Client') { costsCopy[index].Client = event.target.value; }
    if (key === 'Description') { costsCopy[index].Description = event.target.value; }
    if (key === 'KM') { costsCopy[index].KM = event.target.value; }
    if (key === 'Forfait') { costsCopy[index].Forfait = event.target.value; }
    if (key === 'Hôtel') { costsCopy[index].Hotel = event.target.value; }
    if (key === 'Repas') { costsCopy[index].Repas = event.target.value; }
    if (key === 'Divers') { costsCopy[index].Divers = event.target.value; }
    console.log('beforeSetState', costsCopy);

    this.setState({ costs: costsCopy });
    console.log('inputComment', event.target.value, index);
    this.totalLine(index);
  }

  totalLine(index) {
    const { costs } = this.state;
    const copyCost = [...costs];
    let copyTotal = 0;
    // eslint-disable-next-line no-return-assign
    copyTotal += Number(copyCost[index].Hotel) + Number(copyCost[index].Repas) + Number(copyCost[index].Divers);
    copyCost[index].Total = copyTotal;
    this.setState({ costs: copyCost });
  }

  calculTotaux() {
    const { costs } = this.state;
    let total = 0;
    // eslint-disable-next-line no-return-assign
    costs.map((item) => (
      total += Number(item.Total)
    ));
    return total;
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
      Date, Client: '', Description: '', KM: '', Forfait: '', Hotel: '', Repas: '', Divers: '', Total: 0
    });
    console.log(costs);
    this.setState({ costs });
  }

  render() {
    const { costs, loaded } = this.state;
    console.log(costs);

    return (
      <div>
        <form onSubmit={this.postNoteDeFrais}>
          <div className="scrollBoxNDF">
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Client</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>KM</Table.HeaderCell>
                  <Table.HeaderCell>Forfait URSSAF</Table.HeaderCell>
                  <Table.HeaderCell>Hôtel</Table.HeaderCell>
                  <Table.HeaderCell>Repas</Table.HeaderCell>
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
                    <Table.Cell><input type="text" className="style_input" name="Client" value={json.Client} onChange={event => this.inputComment(index, event, 'Client')} /></Table.Cell>
                    <Table.Cell><input type="text" className="style_input" name="Description" value={json.Description} onChange={event => this.inputComment(index, event, 'Description')} /></Table.Cell>
                    <Table.Cell><input type="text" disabled="disabled" className="style_input" name="KM" value={json.KM} onChange={event => this.inputComment(index, event, 'KM')} /></Table.Cell>
                    <Table.Cell><input type="text" className="style_input" name="Forfait" value={json.Forfait} onChange={event => this.inputComment(index, event, 'Forfait')} /></Table.Cell>
                    <Table.Cell><input type="number" className="style_input" name="Hôtel" value={json.Hotel} onChange={event => this.inputComment(index, event, 'Hôtel')} /></Table.Cell>
                    <Table.Cell><input type="number" className="style_input" name="Repas" value={json.Repas} onChange={event => this.inputComment(index, event, 'Repas')} /></Table.Cell>
                    <Table.Cell><input type="number" className="style_input" name="Divers" value={json.divers} onChange={event => this.inputComment(index, event, 'Divers')} /></Table.Cell>
                    <Table.Cell><input type="text" className="style_input" name="Total" value={json.Total} /></Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))
              }
            </Table>
          </div>
          <br />
          <Button color="teal" onClick={() => this.addEmptyLine(costs)} icon="plus circle" />
          <h3>Totaux : {this.calculTotaux()}<br /></h3>
          <br />
          <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Soumettre</Button>
        </form><br />
        <form onSubmit={this.postFiles}>
          <h4>Sélectionner la pièce justificative à envoyer:</h4>
          <div id="carteGrise" />
          <input className="ButtonEnvoye" id="carteGrise" name="greyCard" type="file" onChange={this.handleFileChange} /><br />
          <Button type="submit" color="teal"><Icon name="paper plane outline" /> &nbsp; Envoyer fichiers </Button>
          <Progress max="100" color="success" value={loaded}>{Math.round(loaded, 2)}%</Progress>
        </form>
      </div>
    );
  }
}

export default NoteDeFrais;
