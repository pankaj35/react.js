import React, {Component} from "react";
import MainTable from "./Maintable";
import Searchbar from "./Searchbar";

export default class Filtertable extends Component {
  state = {
    filtertext: "",
    instockonly: false
  };
  handleFilterTextChange = filtertext => {
    this.setState({
      filtertext: filtertext
    });
  };
  handleInStockChange = instockonly => {
    this.setState({
      instockonly: instockonly
    });
  };
  render() {
    return (
      <div>
        <Searchbar
          filtertext={this.state.filtertext}
          instockonly={this.state.instockonly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <MainTable
          products={this.props.products}
          filtertext={this.state.filtertext}
          instockonly={this.state.instockonly}
        />
      </div>
    );
  }
}