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
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Col,
    CustomInput,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Row
} from 'reactstrap';
import {Formik} from 'formik';
import * as Yup from 'yup'
import './style.css'
import axios from "axios";
import {withTranslation} from "react-i18next";

const validationSchema = function (values) {
    return Yup.object().shape({
        firstName: Yup.string()
            .min(2, `First name has to be at least 2 characters`)
            .required('First name is required'),
        lastName: Yup.string()
            .min(1, `Last name has to be at least 1 character`)
            .required('Last name is required'),
        userName: Yup.string()
            .min(5, `Username has to be at least 5 characters`)
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        password: Yup.string()
            .min(6, `Password has to be at least ${6} characters!`)
            .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([values.password], 'Passwords must match')
            .required('Password confirmation is required'),
        accept: Yup.bool()
            .required('* required')
            .test('accept', 'You have to accept our Terms and Conditions!', value => value === true),
    })
};

const validate = (getValidationSchema) => {
    return (values) => {
        const validationSchema = getValidationSchema(values);
        try {
            validationSchema.validateSync(values, {abortEarly: false});
            return {}
        } catch (error) {
            return getErrorsFromValidationError(error)
        }
    }
};

const getErrorsFromValidationError = (validationError) => {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors, error) => {
        return {
            ...errors,
            [error.path]: error.errors[FIRST_ERROR],
        }
    }, {})
};

const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accept: false
};

const onSubmit = (values, {setSubmitting, setErrors}) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        // console.log('User has been successfully saved!', values)
        setSubmitting(false)
    }, 2000)
};

class FormAction extends React.Component {
    constructor(props) {
        super(props);
        this.touchAll = this.touchAll.bind(this);

        this.state = {
            fields: null
        }
    }

    componentDidMount() {
        axios.get("index.php?module=user&controller=api&action=getFields").then(res => {
            const fields = res.data.fields;
            this.setState({fields})
        })
    }

    findFirstError(formName, hasError) {
        const form = document.forms[formName];
        for (let i = 0; i < form.length; i++) {
            if (hasError(form[i].name)) {
                form[i].focus();
                break
            }
        }
    }

    validateForm(errors) {
        this.findFirstError('simpleForm', (fieldName) => {
            return Boolean(errors[fieldName])
        })
    }

    touchAll(setTouched, errors) {
        setTouched({
                firstName: true,
                lastName: true,
                userName: true,
                email: true,
                password: true,
                confirmPassword: true,
                accept: true
            }
        );
        this.validateForm(errors)
    }

    render() {
        const {t} = this.props;
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <i className="icon-note"/><strong>{t("Form Validation")}</strong>
                        <a href="https://coreui.io/pro/react/" className="badge badge-danger ml-1">CoreUI Pro</a>
                        <div className="card-header-actions">
                            <a className="card-header-action" href="https://github.com/jaredpalmer/formik"
                               target="_blank" rel="noreferrer noopener">
                                <small className="text-muted">docs</small>
                            </a>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <a href="https://github.com/jaredpalmer/formik" target="_blank"
                           rel="noreferrer noopener">Formik</a> <cite>Build forms in React, without the
                        tears</cite> with <a href="https://github.com/jquense/yup" target="_blank"
                                             rel="noreferrer noopener">Yup</a> <cite>Dead simple Object schema
                        validation</cite>
                        <hr/>
                        <Formik
                            initialValues={initialValues}
                            validate={validate(validationSchema)}
                            onSubmit={onSubmit}
                            render={
                                ({
                                     values,
                                     errors,
                                     touched,
                                     status,
                                     dirty,
                                     handleChange,
                                     handleBlur,
                                     handleSubmit,
                                     isSubmitting,
                                     isValid,
                                     handleReset,
                                     setTouched
                                 }) => (
                                    <Row>
                                        <Col lg="6">
                                            <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                                                <FormGroup>
                                                    <Label for="firstName">First Name</Label>
                                                    <Input type="text"
                                                           name="firstName"
                                                           id="firstName"
                                                           placeholder="First Name"
                                                           autoComplete="given-name"
                                                           valid={!errors.firstName}
                                                           invalid={touched.firstName && !!errors.firstName}
                                                           autoFocus={true}
                                                           required
                                                           onChange={handleChange}
                                                           onBlur={handleBlur}
                                                           value={values.firstName}/>
                                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="lastName">Last Name</Label>
                                                    <Input type="text"
                                                           name="lastName"
                                                           id="lastName"
                                                           placeholder="Last Name"
                                                           autoComplete="family-name"
                                                           valid={!errors.lastName}
                                                           invalid={touched.lastName && !!errors.lastName}
                                                           required
                                                           onChange={handleChange}
                                                           onBlur={handleBlur}
                                                           value={values.lastName}/>
                                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="userName">User Name</Label>
                                                    <Input type="text"
                                                           name="userName"
                                                           id="userName"
                                                           placeholder="User Name"
                                                           autoComplete="username"
                                                           valid={!errors.userName}
                                                           invalid={touched.userName && !!errors.userName}
                                                           required
                                                           onChange={handleChange}
                                                           onBlur={handleBlur}
                                                           value={values.userName}/>
                                                    <FormFeedback>{errors.userName}</FormFeedback>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="email">Email</Label>
                                                    <Input type="email"
                                                           name="email"
                                                           id="email"
                                                           placeholder="Email"
                                                           autoComplete="email"
                                                           valid={!errors.email}
                                                           invalid={touched.email && !!errors.email}
                                                           required
                                                           onChange={handleChange}
                                                           onBlur={handleBlur}
                                                           value={values.email}/>
                                                    <FormFeedback>{errors.email}</FormFeedback>
                                                </FormGroup>
                                                <Row>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <Label for="password">Password</Label>
                                                            <Input type="password"
                                                                   name="password"
                                                                   id="password"
                                                                   placeholder="Password"
                                                                   autoComplete="new-password"
                                                                   valid={!errors.password}
                                                                   invalid={touched.password && !!errors.password}
                                                                   required
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                                   value={values.password}/>
                                                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                                                            <FormFeedback>{errors.password}</FormFeedback>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <Label for="confirmPassword">Password</Label>
                                                            <Input type="password"
                                                                   name="confirmPassword"
                                                                   id="confirmPassword"
                                                                   placeholder="Confirm password"
                                                                   autoComplete="new-password"
                                                                   valid={!errors.confirmPassword}
                                                                   invalid={touched.confirmPassword && !!errors.confirmPassword}
                                                                   required
                                                                   onChange={handleChange}
                                                                   onBlur={handleBlur}
                                                                   value={values.confirmPassword}/>
                                                            <FormFeedback>{errors.confirmPassword}</FormFeedback>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <CustomInput
                                                        type="checkbox"
                                                        id="accept"
                                                        label="I accept the terms of use"
                                                        required
                                                        valid={!errors.accept}
                                                        invalid={touched.accept && !!errors.accept}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}>
                                                        <FormFeedback>{errors.accept}</FormFeedback>
                                                    </CustomInput>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Button type="submit" color="primary" className="mr-1"
                                                            disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Submit'}</Button>
                                                    <Button type="button" color="success" className="mr-1"
                                                            onClick={() => this.touchAll(setTouched, errors)}
                                                            disabled={isValid}>Validate</Button>
                                                    <Button type="reset" color="danger" className="mr-1"
                                                            onClick={handleReset}>Reset</Button>
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                        <Col lg="6">
                                            <Card className={isValid ? 'bg-info' : 'bg-secondary'}>
                                                <CardBody>
                                                    <pre>values: {JSON.stringify(values, null, 2)}</pre>
                                                    <pre>errors: {JSON.stringify(errors, null, 2)}</pre>
                                                    <pre>touched: {JSON.stringify(touched, null, 2)}</pre>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                )}/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withTranslation()(FormAction);