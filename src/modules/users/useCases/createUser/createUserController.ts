import { Request, Response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(private createUserCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, password } = request.body;

    try {
      await this.createUserCase.execute({
        name,
        email,
        cpf,
        password,
      });

      return response.sendStatus(201);
    } catch (error) {
      return response.status(400).send(error);
    }
  }
}

export { CreateUserController };
