// Copyright 2019. DW </> Web-Engineering. All rights reserved.

import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import IndexAction from "./IndexAction";
import TestAction from "./TestAction";

const Routes = ({ ...props }) => (
    <div>
        <ul>
            <li>
                <Link to="/">IndexAction</Link>
            </li>
            <li>
                <Link to="/test">TestAction</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" render={(routeProps) => <IndexAction route={routeProps} {...props} />} />
            <Route path="/test" render={(routeProps) => <TestAction route={routeProps} {...props} />} />
        </Switch>
    </div>
);

export default Routes;
