import {createStore,combineReducers} from 'redux';
import StocksReducer from './redux/reducers/StocksReducer'
import RecentStockReducer from './redux/reducers/RecentStockReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
stocks:StocksReducer,
recentStock:RecentStockReducer
})
const store = createStore(rootReducer,composeWithDevTools());
export default store;
