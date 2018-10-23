import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    height: 42px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 15px;
    font-size: 14px;
  }

  div {
    margin-top: 15px;
    display: flex;

    button {
      flex: 1;
      height: 42px;
      border-radius: 5px;
      background: #ccc;
      border: 0;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

    button + button {
      margin-left: 15px;
      background: #85c47c;
    }
  }
`;
