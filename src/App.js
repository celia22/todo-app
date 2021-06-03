import { Component } from 'react';
import Card from './components/Card';
import Counter from './components/Counter';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container mx-auto px-4">
        <Header title="Header 1" color="#00FF00" />
        <Card>
          <p>tarea 1</p>
        </Card>
        <Counter />
      </div>
    );
  }
}

export default App;
