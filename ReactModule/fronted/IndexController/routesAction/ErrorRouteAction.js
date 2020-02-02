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

import React, {Fragment} from 'react';
import './style.css'
import {withTranslation} from "react-i18next";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ThirdRouteAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    componentDidMount() {
        axios.get("index.php?module=reactModule&controller=api&action=getError").then(res => {
            const error = res.data.error;
            this.setState({error})
        }).catch(err => {
            const error = err.message;
            this.setState({error})
        })
    }

    toastIt(message){
        toast(message);
        setTimeout(() => {
            toast.error(message);
            setTimeout(() => {
                toast.warn(message);
                setTimeout(() => {
                    toast.info(message);
                }, 1200);
            }, 1200);
        }, 1200);
    }

    render() {
        const {t} = this.props;

        const containerStyle = {
            zIndex: 1999
        };

        if (this.state.error) {
            this.toastIt(this.state.error);
            return (
                <div>
                    <ToastContainer position="top-right" autoClose={5000} style={containerStyle}/>
                    An error message is displayed because the URL that is declared raises the error 404!!!
                    <br/><br/>
                    <strong>This should be the classic way of generating messages using React</strong>
                </div>
            )
        } else {
            return (
                <div>
                    <ToastContainer position="top-right" autoClose={5000} style={containerStyle}/>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </div>
            )
        }
    }
}

export default withTranslation()(ThirdRouteAction);