import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 5 },
      { id: 4, value: 7 },
    ],
  };

  constructor() {
    super();
    console.log("app-constructor");
  }
  componentDidMount() {
    //ajax call
    console.log("ap-mounted");
  }

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((c) => {
        c.value = 0;
        return c;
      }),
    });
  };
  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    console.log("app-rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
