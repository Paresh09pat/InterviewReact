import React from "react";


export default class TestLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'parth'
    };
  }

  componentDidMount() {
    console.log("componentDidMount() called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() called");
  }

  handle = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div>

        <p>my name is {this.state.name}</p>
        <input onChange={this.handle}></input>

      </div>);
  }

}
