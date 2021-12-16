import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"

class AuthenticateUserService {
  async execute({ email, password }){
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({
      email
    });
    if(!user){
      throw new Error("Email ou Password incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      throw new Error("Email ou Password incorrect");
    }
    const token = sign({
      email:user.email
    }, "minhasenhasecreta",{
      subject: user.id,
      expiresIn: "id",
    });
    return token;
  }
}
export {AuthenticateUserService}