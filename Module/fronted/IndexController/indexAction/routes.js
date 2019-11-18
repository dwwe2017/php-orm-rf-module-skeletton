// Copyright 2019. DW </> Web-Engineering. All rights reserved.

import React, {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import NavItem from "../../NavItem";
import IndexAction from "./IndexAction";
import TestAction from "./TestAction";

const Routes = ({...props}) => (
    <div className="tabbable tabbable-custom tabbable-full-width" >
        <ul className="nav nav-tabs" >
            <NavItem to={"/"} >
                <Fragment >IndexAction</Fragment >
            </NavItem >
            <NavItem to={"/test"} >
                <Fragment >TestAction</Fragment >
            </NavItem >
        </ul >
        <div className="tab-content row" >
            <Switch >
                <Route exact path="/" render={(routeProps) => <IndexAction route={routeProps} {...props} />} />
                <Route path="/test" render={(routeProps) => <TestAction route={routeProps} {...props} />} />
            </Switch >
        </div >
    </div >
);

export default Routes;
