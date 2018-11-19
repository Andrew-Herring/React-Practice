import React, { Component } from 'react'

export default class LocationList extends Component {
  render() {
      return (
        <section className="locations list">
        <h2>Locations</h2>
        {
            this.props.locations.map(location =>
                <div key={location.id}>
                    {location.name} {location.address}
                    <br></br>
                </div>
            )
        }
        </section>
       
      );
  }
}
