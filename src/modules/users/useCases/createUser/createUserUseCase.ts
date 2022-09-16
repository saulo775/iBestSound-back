import bcrypt from "bcrypt";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ name, email, cpf, password }: IRequest): Promise<User> {
    const cpfEncrypt = await bcrypt.hash(cpf, 10);
    const passwordEncrypt = await bcrypt.hash(password, 10);
    const userAlreadyExists = this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = this.userRepository.create({
      name,
      email,
      cpf: cpfEncrypt,
      password: passwordEncrypt,
    });

    return user;
  }
}

export { CreateUserUseCase };
