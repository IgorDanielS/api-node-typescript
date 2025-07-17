import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CitiesController } from "../../modules/deal/domain/cities/index";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá, rota funcionando normalmente");
});

router.post("/city", CitiesController.create )
router.get("/city", CitiesController.create )

export { router };
