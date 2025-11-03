import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHairCutService";

class UpdateHaircutController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const { name, price, haircut_id, status } = req.body;

    const updateHaircut = new UpdateHaircutService();

    const haircut = await updateHaircut.execute({
      user_id,
      name,
      price,
      haircut_id,
      status,
    });

    return res.json(haircut);
  }
}

export { UpdateHaircutController };
