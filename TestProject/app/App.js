

import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import RootNavigator from './RootNavigator';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';


class App extends Component {
  state = {  }
  render() { 
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk) )}>
        <RootNavigator />
      </Provider> 
      
     );
  }
}
 
export default App;
