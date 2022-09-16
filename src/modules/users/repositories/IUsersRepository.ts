import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

interface IUsersRepository {
  create({ name, email, password, cpf }: ICreateUserDTO): User;
  findByEmail(email: string): User | undefined;
}

export { ICreateUserDTO, IUsersRepository };
