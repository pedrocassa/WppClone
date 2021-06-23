import express, { Router } from 'express';
import { login } from '../model/usersModel.js'
const router = express.Router();

router.post("/login", async (req, res) => {
    login(req.body.login, req.body.senha, (error, result) => {
        try {
            if (result.length > 0) {
                res.status(201).send({ ...result[0] });
            }
            else {
                res.status(404).send();
            }
        }
        catch (e) {
            res.status(500).send({
                mensagem: e
            })
        }
    })
})

export default router;