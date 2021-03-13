import React, { Component } from "react";
import "./jamarketing.css";

class Jamarketing extends Component {
  constructor() {
    super();
    this.state = {
      jamarketing: [],
    };
  }

  componentDidMount() {
    fetch("./api/jamarketing")
      .then((res) => res.json())
      .then((jamarketing) =>
        this.setState({ jamarketing }, () =>
          console.log("jamarketing fetched..", jamarketing)
        )
      );
  }

  render() {
    return (
      <div>
        <h2 className="title">J & A Marketing</h2>
        <ul>
          {this.state.jamarketing.map((jamarketing) => (
            <li key={jamarketing.id}>
              {jamarketing.firstName} {jamarketing.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Jamarketing;
