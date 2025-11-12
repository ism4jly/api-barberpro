import { Request, Response } from "express";
import { SubscribeService } from "../../services/subscriptions/SubscribeService";

class SubscribreController{
    async handle(request: Request, response: Response){
        const user_id  = request.user_id;

        const subscribreService = new SubscribeService();

        const subscribre = await subscribreService.execute({
            user_id,
        });

        return response.json(subscribre);
    }
}

export { SubscribreController };