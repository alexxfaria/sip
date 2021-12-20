import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class ListUserService{
    async execute(user_id: string){
        const usersRepository = getCustomRepository(UsersRepositories);
        const users = await usersRepository.find();
        return users;
    }
}
export {ListUserService};