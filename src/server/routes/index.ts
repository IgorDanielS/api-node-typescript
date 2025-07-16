import { Router } from 'express'
import {StatusCodes} from 'http-status-codes'

const router = Router()

router.get("/", (_, res) => {
  return res.send("Olá, dev");
});

router.post("/Login", (req, res) => {
  return res.status(StatusCodes.ACCEPTED).send(req.body);
}); 

export {router}