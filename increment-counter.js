class Button extends React.component {
    state = {counter : 0};

    handleClick = () => {
        /*this.setState({
            counter : this.state.counter + 1
        })*/
        this.setState((prevState) => ({
            counter : prevState.counter + 1
        }));
    };

    render() {
        return {
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        };
    }
}

ReactDOM.render(<Button />, mountNode);