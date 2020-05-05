import React, { Component } from 'react';

class App extends Component {

    // local state management approach
    // state = {
    //     age: 21,
    // }

    // increase = () => {

    //     this.setState(
    //         {
    //             ...this.state,
    //             age: this.state.age + 1
    //         }
    //     );
    // }

    // decrease = () => {
    //     this.setState({
    //         ...this.state,
    //         age: this.state.age - 1
    //     })
    // }
    render() {
        return (
            <div>
                <div>Age:{this.state.age}</div>
                <button onClick={this.increase}>Up</button>
                <button onClick={this.decrease}>Down</button>
            </div>
        );
    }
}

export default App;
