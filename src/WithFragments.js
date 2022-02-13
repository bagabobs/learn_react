import {Component, Fragment} from "react";

export default class WithFragments extends Component {
    render() {
        return (
            <Fragment>
                <h1>With Fragments</h1>
                <p>Doesn't have any unused Dom Elements.</p>
            </Fragment>
        );
    }
}
