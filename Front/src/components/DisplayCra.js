/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Table, Label } from 'semantic-ui-react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { urlServer } from '../config.json';


class displayCra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCra: [],
      totalJT: 0
    };
  }

  componentWillMount() {
    const { id, tokenUser } = this.props;
    console.log(id);
    console.log('ERTYUI');
    const config = {
      headers: {
        Authorization: `Bearer ${tokenUser}`
      }
    };
    Axios.post(`${urlServer}/tableCra`, id, config)
      .then(res => {
        console.log(res.data);
        let bigOrder = 0;
        for (let i = 0; i < res.data.length - 1; i += 1) {
          if (res.data[i].order > bigOrder) {
            bigOrder = res.data[i].order;
            console.log(bigOrder);
          }
        }
        console.log('bigorder', res.data[bigOrder].tableCra);
        const parseData = JSON.parse(res.data[bigOrder].tableCra);

        console.log(parseData);

        this.setState({
          tableCra: parseData,
          totalJT: res.data[bigOrder].somme
        });
      });
  }

  render() {
    const { id } = this.props;
    console.log('id is', id);


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
  tokenUser: store.auth.tokenUser,
});
export default connect(mapStateToProps)(displayCra);
