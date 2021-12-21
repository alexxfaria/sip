import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

type UpdateUser = {
    id: string;
    name?: string;
    email?: string;
    admin?: boolean;
    password?: string;
}

class UpdateUserService {
    async execute({id, name, email, admin, password}): Promise<UpdateUser | Error> {
        const updateUserRepository = getCustomRepository(UsersRepositories);
        const userAlreadyExistsId =  await updateUserRepository.findOne({ id });
        if (!userAlreadyExistsId) {
            return new Error("User already exists");
        };
        const userAlreadyExists = await updateUserRepository.findOne({ email });
        if(userAlreadyExists){
            throw new Error("User / email already exists");
        };
        const passwordHash = await hash(password, 8);
        userAlreadyExistsId.name = name;
        userAlreadyExistsId.email = email;
        userAlreadyExistsId.password = passwordHash;
        userAlreadyExistsId.admin = admin;

        await updateUserRepository.save(userAlreadyExistsId);
        return userAlreadyExistsId;
    }

}
export { UpdateUserService };