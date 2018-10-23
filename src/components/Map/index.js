import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Avatar } from './styles';
import { Creators as ModalActions } from '../../store/ducks/modal';

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);

    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  handleMapClick = (e) => {
    const { showModal } = this.props;
    const [longitude, latitude] = e.lngLat;

    showModal(latitude, longitude);
  };

  render() {
    const { viewport } = this.state;
    const { map } = this.props;

    return (
      <MapGL
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={this.handleViewportChange}
      >
        {map.markers.map(marker => (
          <Marker
            key={marker.user.id}
            latitude={marker.coordinates.latitude}
            longitude={marker.coordinates.longitude}
          >
            <Avatar src={marker.user.avatar_url} />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
