import express, { Router } from 'express';
import { getMsgs, postMsgs } from '../model/chatModel.js';
const router = express.Router();

router.get("", async (req, res) => {
    getMsgs((error, result) => {
        try {
            if (result.length > 0) {
                res.status(201).send([...result])
            } else {
                res.status(201).send("Nenhuma mensagem cadastrada")
            }
        } catch (e) {
            res.status(500).send({ mensagem: e })
        }
    })
})

router.post('', async (req, res) => {
    postMsgs(req.body.id, req.body.mensagem, (err, result) => {
        try {
            res.status(201).send()
        } catch (e) {
            res.status(500).send({ mensagem: e })
        }
    })
})

export default router;