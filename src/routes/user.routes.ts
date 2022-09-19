import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";

const usersRouter = Router();
usersRouter.post("/sign-up", (request, response) => {
  console.log("hello");
  createUserController.handle(request, response);
});

export { usersRouter };
