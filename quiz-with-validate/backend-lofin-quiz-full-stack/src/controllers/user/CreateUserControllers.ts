import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/CreateUserServices";

class CreateUserControllers {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const createUserServices = new CreateUserServices();
        try {
            const user = await createUserServices.execute({ name, email, password });
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }   
}

export { CreateUserControllers };
