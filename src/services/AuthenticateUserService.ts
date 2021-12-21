import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

class AuthenticateUserService {
  async execute({ email, password }){
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({ email });
    if(!user){
      throw new Error("Email ou Senha incorreta");
    }
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      throw new Error("Email ou Senha incorreta");
    }
    const token = sign({
      email:user.email
    }, "minhasenhasecreta",{
      subject: user.id,
      expiresIn: "1h",
    });
    return token;
  }
}
export {AuthenticateUserService}