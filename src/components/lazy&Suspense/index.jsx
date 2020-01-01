import React, {Component, lazy, Suspense} from 'react';
import {slowImport} from '../../utils/index';
import { connect } from 'react-redux';

const Test = lazy(() => slowImport(import('./test')));

class MyLazy extends Component{
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Test date={Date.now()}/>
                <div>{this.props.text}</div>
            </Suspense>
        )
    }
}
const mapStateToProps = state => {
    return {
        text: state.sayHello.text
    }
};
export default connect(mapStateToProps)(MyLazy)