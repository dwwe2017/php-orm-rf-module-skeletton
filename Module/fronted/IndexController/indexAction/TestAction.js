import React from 'react';
import axios from 'axios';
import {Div, WidgetBox, WidgetContent, WidgetHeader} from "tsi2-ui-library";

export default class TestAction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        axios.get("index.php?module=module&controller=api").then(res => {
            const data = res.data;
            this.setState({data})
        })
    }

    render() {

        const {data} = this.state;

        if (!data) {
            return null;
        }

        if (data.hasOwnProperty("example_message")) {
            return (
                <Div cols={"12"} >
                    <WidgetBox >
                        <WidgetHeader title={"Ajax Example"} />
                        <WidgetContent >
                            {data.example_message}
                        </WidgetContent >
                    </WidgetBox >
                </Div >
            );
        } else {
            return (
                <Div cols={"12"} >
                    <WidgetBox >
                        <WidgetHeader title={"Test Example"} />
                        <WidgetContent >
                            <span >This is also an example. Adjust it as you would like ;) Have fun!</span >;
                        </WidgetContent >
                    </WidgetBox >
                </Div >
            );
        }
    }
}
