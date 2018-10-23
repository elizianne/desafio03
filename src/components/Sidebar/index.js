import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapActions } from '../../store/ducks/map';

import { Container, User } from './styles';

const Sidebar = ({ map, removeUser }) => (
  <Container>
    {map.markers.map(({ user }) => (
      <User key={user.id}>
        <img src={user.avatar_url} alt={user.name} />
        <div>
          <strong>{user.name}</strong>
          <span>{user.login}</span>
        </div>
        <button type="button" onClick={() => removeUser(user.id)}>
          <i className="fa fa-times" />
        </button>
      </User>
    ))}
  </Container>
);

Sidebar.propTypes = {
  map: PropTypes.shape({
    markers: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.shape({
          id: PropTypes.number,
          avatar_url: PropTypes.string,
          name: PropTypes.string,
          login: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
