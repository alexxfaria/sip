import { Request, Response } from "express";
import { UserService } from "../services/UserService"

class UserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body
        const userService = new UserService();
        const user = await userService.execute( { name, email, admin } );
        return response.json(user);
    }
}
export { UserController };