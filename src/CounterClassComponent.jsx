import React from 'react'
export default class CounterClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log('Counter component mounted')
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })

    };

    decrement = () => {
        if (this.state.count < 1) {
            return
        }
        this.setState({
            count: this.state.count - 1
        })

    };

    render() {
        return (<>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>Add + </button>
            <button onClick={this.decrement}>Subtract - </button>
        </>
        )
    }
}