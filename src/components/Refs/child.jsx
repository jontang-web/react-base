import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
    }
    _console(message) {
        this.setState({
            message: message
        });
    }
    render() {
        return (
                <div>
                    <p>parent default message：{this.props.message}</p>
                    <p>child component，parent message：{this.state.message}</p>
                    <ul>
                        {
                            this.props.children.map((child, index) => {
                                return <li key={index}>{child}</li>
                            })
                        }
                    </ul>
                </div>
            );
    }
}

Child.propTypes = {
    message: PropTypes.string
}