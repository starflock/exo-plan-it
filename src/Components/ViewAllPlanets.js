import React, { Component } from 'react';

class ViewAllPlanets extends Component {

  render (){
    return (
      window.location.href = "https://exo-planet-starflock-backend.herokuapp.com/get_all_users"
  );
}
}

export default ViewAllPlanets;
