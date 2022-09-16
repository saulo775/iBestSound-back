import { app } from ".";

app.listen(process.env.PORT, () => {
  console.log(`server listening on ${process.env.PORT}`);
});
