import { getCustomRepository, getConnection } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class DeleteUsersService{
    async execute(id: string){
        const usersRepository = getCustomRepository(UsersRepositories);
        if (!(await usersRepository.findOne(id))) {
            return new Error ("User does not exist");
        }
        const deleteUsers = await usersRepository.delete(id);
        return deleteUsers;
    }
}
export {DeleteUsersService};