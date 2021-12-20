import { DeleteUsersService } from "../services/DeleteUserService";
import { Request, Response } from "express";

class DeleteUserController {
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const deleteUserService = new DeleteUsersService();
        const deleteUsers = await deleteUserService.execute(id);
        return response.json(deleteUsers);
    }
}
export { DeleteUserController }