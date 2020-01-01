import React, {Component, createRef} from 'react';
import Child from './child';
import ForwordChild from './ForwordRefs';
class Parent extends Component{
    constructor() {
        super();
        this.domRef = createRef();
        this.componentRef = createRef();
        this.forwordRef = createRef();
    }
    componentDidMount() {
        this.domRef.current.focus();
    }
    onInput(e) {
        let value = e.target.value;
        this.componentRef.current._console(value);
    }
    render() {
        return (
            <div>
                <div>
                    <p>parent component</p>
                    <input type="text" ref={this.domRef} onChange={e => this.onInput(e)}/>
                </div>
                <hr/>
                <Child ref={this.componentRef} message="message">
                    <span>slot</span>
                    <span>slot</span>
                </Child>
                <ForwordChild name="forwordRefs" ref={this.forwordRef} />
            </div>
        );
    }
}

export default Parent;