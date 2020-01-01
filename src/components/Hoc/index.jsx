import React, { Component } from 'react'

class Test extends Component{
    render() {
        return (
            <div>
                <p>{this.props.title} - {this.props.name}</p>
                {this.props.children}
            </div>
        );
    }
}

const withTest = Comp => {
    const name = '高阶组件';
    return props => <Comp {...props} name={name}></Comp>
}



const withHtest = Comp => {
    return class extends Component{
        render() {
            return (
                <Comp {...this.props}>
                    <span>this is Hoc</span>
                </Comp>
            );
        }
    }
}

const BHtest = withHtest(withTest(Test));

export default class index extends Component {
    render() {
        return (
            <div>
                <BHtest title="react"></BHtest>
            </div>
        )
    }
}