import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Main from '../pages/Main'
import NotFound from './NotFound.js'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Redirect to='/main' />} />
            <Route exact path='/main' component={Main} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
export default App