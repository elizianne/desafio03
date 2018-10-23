import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
import NewUserModal from '../../components/NewUserModal';

import { Container } from './styles';

const Main = ({ modal }) => (
  <Container>
    <Sidebar />
    <Map />

    {modal.visible && <NewUserModal />}
  </Container>
);

Main.propTypes = {
  modal: PropTypes.shape({
    visible: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(Main);
