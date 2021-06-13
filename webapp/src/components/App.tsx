import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { SearchBox, VideoList } from './index'

const App: React.FC = () => {

    return (
         <BrowserRouter  basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/results/:keyword" component={VideoList} />
            <Route exact path="/" component={SearchBox} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>       
    );
}

export default App;
