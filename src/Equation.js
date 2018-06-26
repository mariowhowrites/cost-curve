import React, { Component } from "react";
import Polynomial from "polynomial";
import regression from "regression";
import { Line } from "react-chartjs-2";

class Equation extends Component {
  render() {

    // * redefine thresholds and prices to accomodate multiple price rules
    // so, we'll come up with a polynomial by adding the polynomials from each price rule
    // we'll use that polynomial to predict prices in a range from lowest dependent variable to highest dependent variable

    // so, perhaps from 100 to 1000 sq ft, we'll take every 100 sq ft and calculate price based on combined cost polynomial
    const thresholds = this.state.costFactors.map(rule => rule[0]),
      prices = this.state.costFactors.map(rule => rule[1]);

    return (
      <div>
        <h1>Price Calculator</h1>
        <input
          type="number"
          placeholder="threshold"
          value={this.state.currentThreshold}
          onChange={this.handleThresholdChange}
        />
        <input
          type="number"
          placeholder="price"
          value={this.state.currentPrice}
          onChange={this.handlePriceChange}
        />
        <button onClick={this.addRule}>Add Rule</button>
        <div style={{ marginTop: "2rem" }}>
          <span style={{ margin: "0 2rem" }}>
            {this.state.currentThreshold}
          </span>
          <span style={{ margin: "0 2rem" }}>{this.state.currentPrice}</span>
        </div>
        <Line
          data={{
            labels: thresholds,
            datasets: this.costFactors
          }}
          options={{
            title: { display: true, text: "Price Rules" },
            xAxes: {
              display: true,
              ticks: {
                autoSkip: false
              }
            }
          }}
        />
      </div>
    );
  }

  state = {
    equation: "",
    equationGroup: [],
    currentPrice: 0,
    currentThreshold: 0,
    costFactors: []
  };

  addRule = () => {
    let rule = [this.state.currentThreshold, this.state.currentPrice];

    this.setState({ costFactors: [...this.state.costFactors, rule] });

    this.setState({ currentThreshold: 0, currentPrice: 0 });
  };

  handlePriceChange = event => {
    event.preventDefault();

    this.setState({ currentPrice: event.target.value });
  };

  handleThresholdChange = event => {
    event.preventDefault();

    this.setState({ currentThreshold: event.target.value });
  };

  componentWillUpdate(newProps, newState) {
    if (
      newState.costFactors !== this.state.costFactors &&
      newState.costFactors.length >= 3
    ) {
      console.log(calculatePriceRule(newState.costFactors));
    }
  }

  componentDidMount() {
    //console.log(this.state.equation);
  }
}

function calculatePriceRule(ruleArray) {
  const solution = regression.polynomial(ruleArray, 3);

  const equation = solution.string.slice(4).replace(/ /g, "");

  console.log(equation);
}

export default Equation;
