import prismaClient from "../../prisma";

interface SubscribreRequest {
    user_id: string;
}

class SubscribreService {
    async execute({ user_id }: SubscribreRequest) {
        return user_id
    }
}

export { SubscribreService };