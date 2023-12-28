import {createStore} from 'redux';
import allReducers from './reducers';

const myStore = createStore(allReducers);

export default myStore;
