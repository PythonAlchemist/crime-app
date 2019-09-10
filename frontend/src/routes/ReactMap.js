import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid, Button } from 'semantic-ui-react'
import '../css/ReactMap.css';


const Marker = ({text}: any) => <div className='map-marker'>{text}</div>;

class ReactMap extends React.Component {
  constructor(props) {
      super(props);
    this.state = {answer:"Ask a Question!", locs:[]};
    this.getResponse = this.getResponse.bind(this);
  }

  static defaultProps = {
    center: {
      lat: 42.337189,
      lng: -71.093342
    },
    zoom: 11
  };

  async getResponse() {

    var resp = await fetch('/crime-analytics/api/getData');
    var data = await resp.json();
    console.log(data)
    this.setState({locs:data.data})
  }

    render() {

      // /let locs = this.state.locs

      return (
        <div>
        <Grid columns={3} divided>

          <Grid.Row>
            <h1> Grab Data </h1>
          </Grid.Row>
          <Grid.Row>
            <Button onClick={this.getResponse}>Click Here</Button>
          </Grid.Row>
        </Grid>
        <div style={{ height: '80vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDUqqwkXYh9thw9J9U8qKIdBiGvZJeJq2w' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          {this.state.locs.map(x => <Marker lat={x.lat} lng={x.lng}/> )}
          </GoogleMapReact>
        </div>
        </div>
      )
    }

}

export default ReactMap;
