import { Component } from 'react';
import Heart from './Heart';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };
  }

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    let rounded = this.props.rounded ? 'rounded-md' : '';
    const { like } = this.state;
    return (
      <div className={`bg-gray-300 border border-gray-800 ${rounded} p-4`}>
        <Heart active={like} onClick={this.handleLike} />
        {this.props.children}
      </div>
    );
  }
}

export default Card;
