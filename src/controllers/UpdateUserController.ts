import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, admin, password } = request.body
        const userUpdateService = new UpdateUserService();
        const user = await userUpdateService.execute({id, name, email, admin, password });
        if (user instanceof Error) {
            return response.status(404).json(user.message);
        }
        return response.json('Usuario alterado com sucesso!');
    }
}
export { UpdateUserController };