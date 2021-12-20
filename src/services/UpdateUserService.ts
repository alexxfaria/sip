import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

type UpdateUser = {
    id: string
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class UpdateUserService {
    async execute({id, name, email, admin, password}): Promise<User | Error> {
        const updateUserRepository = getCustomRepository(UsersRepositories);
        if(!email){
            throw new Error("Email incorrect");
        };
        const userAlreadyExistsId =  await updateUserRepository.findOne({ id });
        if (!userAlreadyExistsId) {
            return new Error("User already exists");
        };
        // const userAlreadyExists = await updateUserRepository.findOne({ email });
        // if(userAlreadyExists){
        //     throw new Error("User already exists");
        // };
        // const passwordHash = await hash(password, 8);
        userAlreadyExistsId.name = name ? name : userAlreadyExistsId.name;
        userAlreadyExistsId.email = email ? email : userAlreadyExistsId.email;
        userAlreadyExistsId.password = password ? password : userAlreadyExistsId.password;
        userAlreadyExistsId.admin = admin ? admin : userAlreadyExistsId.admin;

        await updateUserRepository.save(userAlreadyExistsId);
        return userAlreadyExistsId;
    }

}
export { UpdateUserService };