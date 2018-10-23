import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapActions } from '../../store/ducks/map';
import { Creators as ModalActions } from '../../store/ducks/modal';

import { Container, Form } from './styles';

class NewUserModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    addGithubUserRequest: PropTypes.func.isRequired,
  };

  state = {
    user: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { addGithubUserRequest } = this.props;
    const { user } = this.state;

    addGithubUserRequest(user);
  };

  render() {
    const { user } = this.state;
    const { hideModal } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input name="user" value={user} onChange={this.handleInputChange} />
          <div>
            <button type="button" onClick={hideModal}>
              Cancelar
            </button>
            <button type="submit">Adicionar</button>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...MapActions, ...ModalActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NewUserModal);
