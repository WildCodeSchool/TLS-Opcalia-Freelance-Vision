import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import Axios from 'axios';
import Cra from './Cra';
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
        else if (this.state.res === "passOk") {
            this.setState({ etat: 1 })
        }
    }

    render() {

        if (this.state.etat === 1) {
            return (
                <div>
                    <Cra />
                </div>
            )
        }


        return (
            <div>

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