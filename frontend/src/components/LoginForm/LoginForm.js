import React, { useContext, useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import './Styles.css';
import axios from 'axios'

import { useHistory } from 'react-router-dom';
import { userContext } from '../../context/userContext';


function LoginForm() {

    const history = useHistory()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const { setId } = useContext(userContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5001/usuarios/login', {
            login: login,
            senha: password,
        }).then(result => {
            setId(result.data.id)
            history.push("/chat")
        }).catch(err => {
            setErrMsg('Usuário ou senha inválido')
        })

    }

    return (
        <div className="loginFormDiv" onSubmit={handleSubmit}>
            <Col xs={4}>
                {errMsg}
                <Form className="loginFormBox" >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="text" onChange={e => setLogin(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </Col>
        </div>
    )
}

export default LoginForm;