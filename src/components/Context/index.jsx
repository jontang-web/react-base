import React, {Component} from 'react';
import Child from "./child";
import { TestContext } from "./context";

export default class MyContext extends Component{
    render() {
        return (
            <TestContext.Provider value="context test">
                <Child></Child>
            </TestContext.Provider>
        )
    }
}