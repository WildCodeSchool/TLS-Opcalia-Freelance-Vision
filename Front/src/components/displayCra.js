/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Table, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { IP } from '../config.json';


class displayCra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCra: [],
      totalJT: 0
    };
  }

  componentWillMount() {
    const { id } = this.props;
    console.log(id);
    console.log('ERTYUI');
    Axios.post(`http://${IP}:4000/tableCra`, id)
      .then(res => {
        console.log(res.data);
        let bigOrder = res.data[0];
        for (let i = 0; i < res.data.length; i += 1) {
          if (res.data[i].order > bigOrder.order) {
            bigOrder = res.data[i];
            console.log(bigOrder);
          }
        }
        const parseData = JSON.parse(bigOrder.tableCra);

        console.log(parseData);

        this.setState({
          tableCra: parseData,
          totalJT: bigOrder.somme
        });
      });
  }

  render() {
    const { id } = this.props;
    const { tableCra, totalJT } = this.state;
    return (
      <div>
        <h1>{id}</h1><br />
        <div className="scrollBoxNDF">
          <Table celled>
            <Table.Body>
              {tableCra.map((item) => (
                <Table.Row>
                  <Table.Cell>{item.dayNumber}</Table.Cell>
                  <Table.Cell>{item.dayName}</Table.Cell>
                  <Table.Cell>{item.rate}</Table.Cell>
                  <Table.Cell>{item.comment}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table><br />
        </div><br />
        <Label key="big" size="big">
          Total
          <Label.Detail>{totalJT}</Label.Detail>
        </Label>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  id: store.auth.id,
});
export default connect(mapStateToProps)(displayCra);
