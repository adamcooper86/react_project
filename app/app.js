import React from "react";
import ContentToggle from "./content_toggle";

var App = React.createClass({
  getInitialState (){
    return {
      tacos: [
        { name: 'Taco_One', drools: 0, src: "http://www.tacobell.com/static_files/TacoBell/StaticAssets/images/food/foodtypes/slider_tacos3.png"},
        { name: 'Taco_two', drools: 0, src: "http://www.tacobell.com/static_files/TacoBell/StaticAssets/images/food/foodtypes/slider_tacos3.png"},
        { name: 'Taco_three', drools: 0, src: "http://www.tacobell.com/static_files/TacoBell/StaticAssets/images/food/foodtypes/slider_tacos3.png"},
      ]
    };
  },

  handleToggle (taco, isOpen) {
    if (isOpen) {
      taco.drools++;
      this.setState({
        tacos: this.state.tacos
      });
    }
  },

  renderTacos () {
    return this.state.tacos.map((taco) => (
      <ContentToggle
        onToggle={this.handleToggle.bind(this, taco)}
        summary={`${taco.name} drools ${taco.drools}`}>
        <img src={taco.src} />
      </ContentToggle>
    ));
  },

  render () {
    return (
      <div>
        {this.renderTacos()}
      </div>
    )
  }
})

React.render(
  <App />,
  document.body
);
