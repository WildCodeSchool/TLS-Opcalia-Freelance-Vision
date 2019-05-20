import React, { Component } from 'react';
import { Table, Label } from 'semantic-ui-react';
import Axios from 'axios';
import { connect } from 'react-redux';
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
    const { id, tokenUser } = this.props;
    console.log(id);
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    };
    Axios.post(`http://${IP}/tableNoteDeFrais`, id, config)
      .then(res => {
        console.log('data', res.data);
        let bigOrder = res.data[0];

        for (let i = 0; i < res.data.length; i += 1) {
          if (res.data[i].tableIndex > bigOrder.tableIndex) {
            bigOrder = res.data[i];
            console.log('in boucle', bigOrder);
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
    const { id } = this.props;
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
const mapStateToProps = (store) => ({
  id: store.auth.id,
  userTable: store.auth.userTable,
  tokenUser: store.auth.tokenUser,
});
export default connect(mapStateToProps)(displayNoteDeFrais);
