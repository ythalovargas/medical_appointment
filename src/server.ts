import express from "express"
import { userRouter } from "./routes/user.routes";

const app = express();

app.use(express.json())

app.use(userRouter)

app.get("/home", (request, response) => {
    return response.send('Application is connected,')
})

app.listen(3000,() => console.log('Server is running on PORT 3000'))

