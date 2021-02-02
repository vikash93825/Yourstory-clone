import { Route, Switch } from "react-router-dom"
import React from "react"
import { Search } from "../Pages/SearchPage/Search"


const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route path="/search" render={()=><Search/>}/>
            </Switch>
        </div>
    )

}

export {Routes}