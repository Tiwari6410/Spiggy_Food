import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };


    console.log("this is child constructor");
  }
  componentDidMount() {
    console.log("this is child componentDid mount");
  }
  render() {
    console.log("this is child render method");
    const { count } = this.state;
    const { name} = this.props

    return (
      <div className="User_card">
        <h1>{count}</h1>
        {/* <h1>{count2}</h1> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name:{name}</h2>
      </div>
    );
  }
}

export default UserClass;
