import React, {Component} from "react";

export default class Searchbar extends Component {
  textchange = e => {
    this.props.onFilterTextChange(e.target.value);
  };
  stokechange = e => {
    this.props.onInStockChange(e.target.checked);
  };
  render() {
    const filtertext = this.props.filtertext;
    const instockonly = this.props.instockonly;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "200px", marginLeft:"50%"  }}
            value={filtertext}
            onChange={this.textchange}
          />
          <p style={{ fontSize: "15px"}}>
            {" "}
            <input
              type="checkBox"
              checked={instockonly}
              onChange={this.stokechange}
            />
            Only show product in stock
          </p>
        </form>
      </div>
    );
  }
}