import { DeleteUsersService } from "../services/DeleteUserService";
import { Request, Response } from "express";

class DeleteUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { user_id } = request;
        const deleteUserService = new DeleteUsersService();
        const deleteUsers = await deleteUserService.execute(id);
        if (deleteUsers instanceof Error) {
            return response.status(404).json(deleteUsers.message);
        }
        if (id === user_id) {
            return response.status(400).json("Não é possivel excluir seu proprio usuario!");
        }
        return response.json('Usuario excluido com sucesso!');
    }
}
export { DeleteUserController }