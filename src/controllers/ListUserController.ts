import { ListUserService } from "../services/ListUserService";
import { Request, Response } from "express";

class ListUserController {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserService = new ListUserService();
        const user = await listUserService.execute(user_id);
        return response.json(user);
    }
}
export { ListUserController }