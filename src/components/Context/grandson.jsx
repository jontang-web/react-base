import React, {Component} from 'react';
import { TestContext } from "./context";
export default class Grandson extends Component{
    static contextType = TestContext;
    render() {
        return (
            <div>
                <div>this is grandson，context is <p>{this.context}</p></div>
            </div>
        )
    }
}