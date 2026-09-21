import { getAuth } from "firebase/auth"
import { app } from "./firebaseConnection"

const auth = getAuth(app)

export default auth