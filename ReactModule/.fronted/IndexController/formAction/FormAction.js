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

import React from 'react';
import './style.css'
import axios from "axios";
import {withTranslation} from "react-i18next";
import {Form} from "@flipbyte/formik-json";
import {Alert, Card, CardHeader, CardBody, Col, Row} from "reactstrap";
import LoadingCircle from "../../LoadingCircle";
import {toast, ToastContainer} from "react-toastify";

const save = (values, formikProps) => {
    console.log(values);
    alert(JSON.stringify(values));
    formikProps.setSubmitting(false);
};

/**
 *
 */
class FormAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: null,
            errors: null,
            success: "The form was processed successfully"
        }
    }

    componentDidMount() {
        axios.get("index.php?module=reactModule&controller=form&action=example").then(res => {
            const schema = res.data.schema;
            this.setState({schema})
        })
    }

    error() {
        toast.error(this.state.errors);
        setTimeout(() => {
            this.setState({errors: null})
        }, 3000)
    }

    success() {
        toast.success(this.state.success);
    }

    render() {

        const {t} = this.props;
        const schema = this.state.schema;

        if (!schema) {
            return <LoadingCircle/>
        }

        const containerStyle = {
            zIndex: 1999
        };

        return (
            <>
                {this.state.errors ? this.error() : null}
                {this.state.errors ? (<Alert color="danger">{this.state.errors.toString()}</Alert>) : null}

                <ToastContainer position="top-right" autoClose={5000} style={containerStyle}/>
                <Card>
                    <CardHeader>
                        <i className="icon-note"/><strong>{t("Ajax Form")}</strong>
                    </CardHeader>
                    <CardBody>
                        <a href="https://github.com/flipbyte/formik-json-schema" target="_blank"
                           rel="noreferrer noopener">formik-json-schema</a> A simple React component capable of
                        building HTML forms out of a JSON schema and using Bootstrap semantics by default.
                        <hr/>
                        <Row>
                            <Col lg="12">
                                <Form
                                    schema={schema}
                                    onSubmit={(values, formikProps) => {
                                        setTimeout(() => {
                                            axios.post("index.php?module=reactModule&controller=api&action=postExample", values)
                                                .then((res) => {
                                                    const errors = res.data.error;
                                                    const success = res.data.success;
                                                    if (errors) {
                                                        this.setState({errors});
                                                    } else {
                                                        if (success) {
                                                            this.setState({success});
                                                        }
                                                        this.success();
                                                    }
                                                }, (error) => {
                                                    const errors = error.message;
                                                    this.setState({errors});
                                                    console.log(error);
                                                }).catch(error => {
                                                const errors = error.message;
                                                this.setState({errors});
                                                console.log(error);
                                            });
                                            formikProps.setSubmitting(false);
                                        }, 100);
                                    }}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default withTranslation()(FormAction);