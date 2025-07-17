import { Request, Response } from "express";

interface ICity {
  name: string;
}

export const create = (req: Request<{}, {}, ICity>, res: Response) => {
  const data: ICity = req.body;
  return res.send(data.name);
};
