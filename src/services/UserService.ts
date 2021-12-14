import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class UserService {
    async execute({name, email, admin}) : Promise<IUserRequest> {
        const userRepository = getCustomRepository(UsersRepositories);
        if(!email){
            throw new Error("Email incorrect");
        };
        const userAlreadyExists = await userRepository.findOne({ email });
        if(userAlreadyExists){
            throw new Error("User already exists");
        };
        const user = userRepository.create({name, email, admin});
        await userRepository.save(user);
        return user;
    }

}
export { UserService };