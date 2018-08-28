import { combineReducers } from 'redux';
import reducerHorses from './reducer_horses'

const rootReducer = combineReducers({
  cavalerie: reducerHorses,
});

export default rootReducer;
