"use strict";

/**
 *
 */
class ReactAction extends React.Component {

    state = {
        data: null
    };

    constructor(props) {
        super(props);
        const {baseUrl} = this.props;

        /**
         * @see src/src/Controllers/ApiController.php
         */
        axios.get(`index.php?module=dashboard&controller=api&action=index`).then(({data}) => this.setState({data}));
    }

    render() {

        const {data} = this.state;

        if (!data) {
            return null;
        } else if (data.hasOwnProperty("example_message")) {
            return (
                <div className="col-md-12">{data.example_message}</div>
            )
        }

        return (
            <div className="col-md-12">
                In the event that a JS file is found instead of a Twig template, the TSI automatically uses React as a
                view in the fronted
                @see fronted/IndexController/reactAction.tpl.jsx
                @see views/IndexController/indexAction.tpl.js
            </div>
        );
    }
}