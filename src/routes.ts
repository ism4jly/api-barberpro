import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

//router.get("/teste", (req: Request, res: Response) => {
//  return res.json({ ok: true });
//});

// --- ROTAS USER ---
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

export { router };
