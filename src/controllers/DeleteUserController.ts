import { DeleteUsersService } from "../services/DeleteUserService";
import { Request, Response } from "express";

class DeleteUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const deleteUserService = new DeleteUsersService();
        const deleteUsers = await deleteUserService.execute(id);
        if (deleteUsers instanceof Error) {
            return response.status(404).json(deleteUsers.message);
        }
        return response.status(200).end();
    }
}
export { DeleteUserController }