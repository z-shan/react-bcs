class Button extends React.component {

    handleClick = () => {
        this.props.onClick(this.props.incValue)
    };

    render() {
        return {
            <button 
               onClick={this.handleClick}>
               +{this.props.incValue}
            </button>
        };
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
}


class App extends React.Component {
    state = {counter : 0};

    incrementCounter = (incValue) => {
        this.setState((prevState) => ({
            counter : prevState.counter + incValue
        }));
    };

    render() {
        return (
            <div>
                <Button onClick={this.incrementCounter} incValue={1}/>
                <Button onClick={this.incrementCounter} incValue={5}/>
                <Result counter={this.state.counter}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode);