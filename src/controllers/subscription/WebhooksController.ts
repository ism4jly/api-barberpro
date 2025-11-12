import { Request, Response } from "express";
import Stripe from "stripe";
import { stripe } from "../../utils/stripe";

class WebhooksController{
    async handle(request: Request, response: Response) {
        let event: Stripe.Event = request.body;

        let endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

        if (endpointSecret) {
            const signature = request.headers["stripe-signature"];

            try {
                event = stripe.webhooks.constructEvent(request.body, signature, endpointSecret);
            } catch (err) {
                return response.status(400).send(`Webhook Error: ${err.message}`);
            }
        }

        switch(event.type){
            case 'customer.subscription.deleted':
                break;
            case 'customer.subscription.updated':
                break;
            case 'checkout.session.completed':
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        response.send();
    }
}

export { WebhooksController }