import { getCustomRepository, getConnection } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class DeleteUsersService{
    async execute(id: string){
        const usersRepository = getCustomRepository(UsersRepositories);
        const deleteUsers = await usersRepository.delete(id);
        return deleteUsers;
    }
}
export {DeleteUsersService};