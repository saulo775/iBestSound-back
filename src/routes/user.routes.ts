import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";

const usersRouter = Router();
usersRouter.post("/sign-up", (request, response) => {
  createUserController.handle(request, response);
});

export { usersRouter };
