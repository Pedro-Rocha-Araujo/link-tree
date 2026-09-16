import { getAuth } from "firebase/auth"
import { app } from "./FirebaseConnection"

const auth = getAuth(app)

export default app