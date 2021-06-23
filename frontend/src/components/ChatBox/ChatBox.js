import React, { useContext, useState } from 'react';
import './Styles.css'
import { Form, Button, Nav } from 'react-bootstrap'
import { userContext } from '../../context/userContext';
import axios from 'axios'


export default function ChatBox(props) {

    const { id } = useContext(userContext)
    const [msgs, setMsgs] = useState([])
    const [msgToSend, setMsgToSend] = useState('')


    const refreshMsgs = () => {
        axios.get('http://localhost:5001/chat').then(result => {
            setMsgs(result.data)
        })
    }

    const sendMsg = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5001/chat', {
            id: id,
            mensagem: msgToSend
        }).then(x => {
            refreshMsgs()
        })
    }


    return (
        <div className="chatBoxDiv">
            <Form className="chatBoxForm" onSubmit={sendMsg}>
                <Nav.Link onClick={refreshMsgs}>Atualizar mensagens</Nav.Link>
                <div className="messages">{msgs != [] ?
                    msgs.map(x => {
                        return <p key={x.idMensagem}><span style={{ color: "green" }}>{x.login}</span>: {x.mensagem}</p>
                    })
                    : ""}</div>
                <div id="sameLine">
                    <Form.Control value={msgToSend} onChange={e => { setMsgToSend(e.target.value) }} id="inputMessages" type="text" placeholder="Digite sua mensagem" />
                    <Button id="buttonSend" type="Submit">Enviar</Button>
                </div>
            </Form>
        </div>
    );
}