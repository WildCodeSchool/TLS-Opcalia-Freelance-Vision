import React, { Component } from 'react';
import { Table, Label } from 'semantic-ui-react';
import Axios from 'axios';
import { IP } from '../config.json';


class displayNoteDeFrais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableFrais: [],
      total: 0
    };
  }

  componentWillMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
    console.log('ERTYUI');
    Axios.post(`http://${IP}:4000/tableNoteDeFrais`, id)
      .then(res => {
        console.log(res.data);
        let bigOrder = 0;

        for (let i = 0; i < res.data.length - 1; i += 1) {
          if (res.data[i].tableIndex > bigOrder) {
            bigOrder = res.data[i];
            console.log(bigOrder);
          }
        }
        console.log('bigorder', bigOrder);
        const parseData = JSON.parse(bigOrder.tableFrais);
        console.log(parseData);
        this.setState({
          tableFrais: parseData,
          total: bigOrder.somme
        });
      });
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { tableFrais, total } = this.state;
    return (
      <div>
        <h1>{id}</h1>
        <div className="scrollBoxNDF1">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Clients</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>KM</Table.HeaderCell>
                <Table.HeaderCell>Frais de déplacement</Table.HeaderCell>
                <Table.HeaderCell>Forfait URSSAF</Table.HeaderCell>
                <Table.HeaderCell>Hôtel</Table.HeaderCell>
                <Table.HeaderCell>Repas</Table.HeaderCell>
                <Table.HeaderCell>Divers</Table.HeaderCell>
                <Table.HeaderCell>Total frais</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableFrais.map((item) => (
                <Table.Row>
                  <Table.Cell>{item.value}</Table.Cell>
                  <Table.Cell>{item.Clients}</Table.Cell>
                  <Table.Cell>{item.Descriptionj}</Table.Cell>
                  <Table.Cell>{item.KM}</Table.Cell>
                  <Table.Cell>{item.Deplacement}</Table.Cell>
                  <Table.Cell>{item.Forfait}</Table.Cell>
                  <Table.Cell>{item.Hotel}</Table.Cell>
                  <Table.Cell>{item.Repas}</Table.Cell>
                  <Table.Cell>{item.Divers}</Table.Cell>
                  <Table.Cell>{item.Total}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <Label key="big" size="big">
          Total
          <Label.Detail>{total}</Label.Detail>
        </Label>
      </div>
    );
  }
}

export default displayNoteDeFrais;
