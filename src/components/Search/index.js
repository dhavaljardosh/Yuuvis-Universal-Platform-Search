import React, { Component } from "react";
import ChipInput from "material-ui-chip-input";
import { Paper } from "@material-ui/core";
import Results from "../Results";

export default class SearchBlock extends Component {
  state = {
    searchInputs: [],
    triggerSearch: false
  };

  handleAddChip(chip) {
    var searchInputs = this.state.searchInputs;
    searchInputs.push(chip);
    this.setState({ searchInputs });
  }

  handleDeleteChip(chip, index) {
    var searchInputs = this.state.searchInputs;
    searchInputs.splice(index, 1);
    this.setState(searchInputs);
  }

  handleSearchTrigger() {
    this.setState({ triggerSearch: false });
  }

  render() {
    return (
      <div>
        <Paper
          style={{
            textAlign: "left",
            padding: 10,
            display: "flex",
            alignItems: "center"
          }}
        >
          <ChipInput
            placeholder="Search what you're looking for"
            value={[...this.state.searchInputs]}
            onAdd={chip => this.handleAddChip(chip)}
            onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
            style={{ width: "100%" }}
          />
          <div style={style.searchButton} onClick={()=> this.setState({triggerSearch:true})}>Search</div>
        </Paper>
        <Paper
          style={{
            textAlign: "left",
            marginTop: 10,
            padding: 15,
            boxShadow: "0px"
          }}
        >
          <Results
            searchInputs={this.state.searchInputs}
            triggerSearch={this.state.triggerSearch}
            handleSearchTrigger={this.handleSearchTrigger.bind(this)}
          />
        </Paper>
      </div>
    );
  }
}

const style = {
  searchButton: {
    padding: 10,
    background: "darkorange",
    margin: 10,
    color: "white",
    borderRadius: 10,
    boxShadow: "0 1px 2px solid black",
    cursor:'pointer'
  }
};
