import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import { SearchBox, VideoList } from './index'

const App: React.FC = () => {

    return (
         <HashRouter  basename='/'>
          <Switch>
            <Route exact path="/results/:keyword" component={VideoList} />
            <Route exact path="/" component={SearchBox} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>       
    );
}

export default App;
