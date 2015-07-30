import React from "react";

export default React.createClass({
  getInitialState () {
     return {
       isOpen: false
     }
  },

  handleClick () {

    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      this.props.onToggle(this.state.isOpen)
    });
  },

  render: function() {
   // var children = this.state.isOpen ? this.props.children : null;
    return (
      <div>
        <div onClick={this.handleClick} className="ContentToggle__Summary">
          {this.props.summary}
        </div>
        <div className="ContentToggle__Content">{this.state.isOpen && this.props.children}</div>
      </div>
    );
  }
});
