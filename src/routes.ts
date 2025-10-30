import { Router, Request, Response } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
  throw new Error("Erro de teste");

  return res.json({ ok: true });
});

export { router };
