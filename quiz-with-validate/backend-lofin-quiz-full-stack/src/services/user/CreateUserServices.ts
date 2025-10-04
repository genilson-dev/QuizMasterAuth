import { prismaDB } from "../../prisma";
import { UserRequest } from "../../interfaces/UserRequest";

class CreateUserServices {
    async execute({ name, email, password }: UserRequest) {
        // Verificar se o usuário já existe
        const userAlreadyExists = await prismaDB.user.findFirst({
            where: { email },
        });
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        // Criar o novo usuário
        const user = await prismaDB.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        return user;
    }
}

export { CreateUserServices };
