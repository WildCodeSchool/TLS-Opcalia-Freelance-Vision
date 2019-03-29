import React, { Component } from 'react';
import {
    DateInput,
    // TimeInput,
    // DateTimeInput,
    // DatesRangeInput
} from 'semantic-ui-calendar-react';
import "./Cra.css";
import { Table } from 'semantic-ui-react';
// import { Form } from 'semantic-ui-react';




class NoteDeFrais extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            time: '',
            dateTime: '',
            datesRange: '',
            nbLignes: 10,
        };
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    render() {
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

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell> <DateInput
                                name="date"
                                placeholder="Date"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange}
                            /></Table.Cell>
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
                            <Table.Cell><DateInput
                                name="date"
                                placeholder="Date"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange}
                            /></Table.Cell>
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
                            <Table.Cell><DateInput
                                name="date"
                                placeholder="Date"
                                value={this.state.date}
                                iconPosition="left"
                                onChange={this.handleChange}
                            /></Table.Cell>
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


        );
    }
}

export default NoteDeFrais;