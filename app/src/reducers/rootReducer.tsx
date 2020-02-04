import { combineReducers } from 'redux'
import { lightsReducer } from './lights'

//Combine all reducers to one
export const rootReducer = combineReducers({
    lights: lightsReducer
});
