import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class ListUserService{
    async execute(){
        const usersRepository = getCustomRepository(UsersRepositories);
        const users = await usersRepository.find();
        return users;
    }
}
export {ListUserService};