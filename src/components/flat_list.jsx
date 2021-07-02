import React, { Component } from 'react';
import Flat from "./flat.jsx";

class FlatList extends Component {
  renderList = (props) => {
    return this.props.flats.map((flat, index) =>{
      return (
        <Flat
          flat = {flat}
          key={flat.lat}
          selected = {flat.name === this.props.selectedFlat.name}
          index={index}
          selectFlat = {this.props.selectFlat}/>
      );
    });
  };

  render() {
    return (
     <div className = "flat-list">
        {this.renderList()}
     </div>
    );
  }
}

export default FlatList;
