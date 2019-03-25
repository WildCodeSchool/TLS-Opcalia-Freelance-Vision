import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import Axios from 'axios';
import FreeLance from './FreeLance';
import Employee from './Employee'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            pass: "",
            res: "",
            etat: 0
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        Axios.post("http://localhost:4000/login", this.state)
            .then(res => {
                console.log(res.data);
                this.setState({ res: res.data })
            })
    }

    checkError = () => {
        if (this.state.res === "badID") {
            return (
                <Message negative>
                    <Message.Header>
                        Identifiant incorrect !
                </Message.Header>
                </Message>
            )
        }
        else if (this.state.res === "badPass") {
            return (
                <Message negative>
                    <Message.Header>
                        Mot de passe incorrect !
                </Message.Header>
                </Message>
            )
        }
        else if (this.state.res === "passFreeLance") {
            this.setState({ etat: 1 })
        }
        else if (this.state.res === "passEmployee") {
            this.setState({ etat: 2 })
        }
    }

    render() {

        if (this.state.etat === 1) {
            return (
                <div>
                    <FreeLance />
                </div>
            )
        }
        if (this.state.etat === 2) {
            return (
                <div>
                    <Employee />
                </div>
            )
        }

        return (
            <div>
                <div>
                    <h2><span className="logo1">FREELANCE </span>&nbsp;<span className="logo" > VISION</span></h2>
                </div>
                <Form onSubmit={this.handleSubmit} className="FormLogin">
                    <h1 className="title"> Connection </h1>
                    <Form.Field>
                        <label>Identifiant</label>
                        <input placeholder='Numero de contrat' name="id" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Mot de passe </label>
                        <input type="password" placeholder='******' name="pass" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'>Valider</Button>
                    {this.checkError()}
                </Form>
            </div>
        )
    }

}
export default LogIn;