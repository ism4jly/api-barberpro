import { Request, Response } from "express";
import { SubscribreService } from "../../services/subscriptions/SubscribreService";

class SubscribreController{
    async handle(request: Request, response: Response){
        const { user_id } = request.body;

        const subscribreService = new SubscribreService();

        const subscribre = await subscribreService.execute({
            user_id,
        });

        return response.json(subscribre);
    }
}

export { SubscribreController };