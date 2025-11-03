import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController";

import isAuthenticated from "./middlewares/isAuthenticated";

const router = Router();

//router.get("/teste", (req: Request, res: Response) => {
//  return res.json({ ok: true });
//});

// --- ROTAS USER ---
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

// --- ROTAS HAIRCUT ---
router.post("/haircut", isAuthenticated, new CreateHaircutController().handle);

export { router };
