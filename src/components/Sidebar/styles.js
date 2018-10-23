import styled from 'styled-components';

export const Container = styled.aside`
  width: 320px;
  height: 654px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 99;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  border-color: #eee;
  padding-bottom: 15px;

  img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 5px;
    border-color: #7159c1;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    strong {
      font-size: 16px;
      color: #333;
    }

    span {
      font-size: 14px;
      color: #999;
    }
  }

  button {
    color: #d45454;
  }
`;
