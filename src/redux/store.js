import { createStore } from "redux";
import {reducerUser} from "./reducer";

export const store = createStore(reducerUser)
