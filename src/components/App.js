import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from '../pages/Main'
//import FilmNew from '../pages/FilmNew'
import NotFound from './NotFound.js'
//<Route exact path='/films/new'component={FilmNew}/>


const App=()=>(
    <BrowserRouter>
            <Switch>
               <Route exact path='/main' component={Main}/>
               <Route component={NotFound}/>
            </Switch>
            </BrowserRouter>
    )
export default App