/*

United State of React
Some say The United States has never been so divided. This Kata is a chance for you to unite a once great nation and MAKE AMERICA CODE AGAIN!

What's Involved:
State
Changing State
Conditional Rendering based on state

The challenge:
You will be given a component called States. You will need to establish an initial state for the component called united and for it to be set to false.

Then write a unite function that changes this state to true.

Then conditionally render a bespoke message in the component.

If the States are united then display "Code for everyone"

If the States aren't united then display "Make America code again"

*/

const React = require('react');

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      united: false
    };
  }

  unite() {
    this.setState({united: true});  
  }

  render() {
    let msg = this.state.united === false ? "Make America code again" : "Code for everyone";
    return (
      <div className="status">
        {msg}
      </div>
    )
  }
}
