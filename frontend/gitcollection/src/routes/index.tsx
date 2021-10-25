import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboards'
import { Repository } from '../pages/Repository'

export const Routes: React.FC = () => {

    return (

        <Switch>
            <Route component={Dashboard} path="/" exact/> 
            <Route component={Repository} path="/repositories"/>
        </Switch>
    )
}