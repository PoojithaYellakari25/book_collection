import { combineReducers } from "redux";
import { bookReducer } from "./LibraryReducers";

export const rootReducer= combineReducers({
    book: bookReducer,
}
)