import React, {Component} from 'react'

export default class Test extends Component{
    render() {
        return (
            <div>
                <div>{this.props.date}</div>
                <div>{this.props.name}</div>
            </div>
        );
    }
} 

Test.defaultProps = {
    name: 'test'
}