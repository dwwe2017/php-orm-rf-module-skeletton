/*
 * MIT License
 *
 * Copyright (c) 2020 DW Web-Engineering
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from "react";
import {Nav, TabContent} from 'reactstrap';
import {Route, Switch} from "react-router-dom";
import NavItem from '../../NavItem'
import FirstRouteAction from "./FirstRouteAction";
import SecondRouteAction from "./SecondRouteAction";
import ThirdRouteAction from "./ThirdRouteAction";
import ErrorRouteAction from "./ErrorRouteAction";
import ExceptionRouteAction from "./ExceptionRouteAction";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Routes = ({...props}) => (
    <div className="animated fadeIn">
        <div className={"nav-tabs-boxed"}>
            <Nav tabs>
                <NavItem to={"/"}>
                    <>FirstRouteAction</>
                </NavItem>
                <NavItem to={"/second"}>
                    <>SecondRouteAction</>
                </NavItem>
                <NavItem to={"/third"}>
                    <>ThirdRouteAction</>
                </NavItem>
                <NavItem to={"/exception"}>
                    <>ErrorRouteAction</>
                </NavItem>
                <NavItem to={"/error"}>
                    <>ErrorRouteAction</>
                </NavItem>
            </Nav>
            <TabContent>
                <Switch>
                    <Route exact={true} path="/" render={(routeProps) => <FirstRouteAction route={routeProps} {...props} />}/>
                    <Route exact={true} path="/second" render={(routeProps) => <SecondRouteAction route={routeProps} {...props} />}/>
                    <Route exact={true} path="/third" render={(routeProps) => <ThirdRouteAction route={routeProps} {...props} />}/>
                    <Route exact={true} path="/exception" render={(routeProps) => <ExceptionRouteAction route={routeProps} {...props} />}/>
                    <Route exact={true} path="/error" render={(routeProps) => <ErrorRouteAction route={routeProps} {...props} />}/>
                </Switch>
            </TabContent>
        </div>
    </div>
);

export default Routes;
