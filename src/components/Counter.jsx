import { Component } from 'react';
import Card from './Card';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <Card rounded>
        <p className="text-4xl text-center">{value}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </Card>
    );
  }
}

export default Counter;
