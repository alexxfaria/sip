import { ListUserService } from "../services/ListUserService";
import { Request, Response } from "express";

class ListUserController {
    async handle(request: Request, response: Response){
        const listUserService = new ListUserService();
        const user = await listUserService.execute();
        if (user instanceof Error) {
            return response.status(404).json(user.message);
        }
        return response.json(user);
    }
}
export { ListUserController }