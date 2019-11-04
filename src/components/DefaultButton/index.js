import styled, { css } from 'styled-components';

const DefaultButton = styled.button`
  background: #7157c1;
  color: #fff;
  padding: 5px 10px;
  width: 120px;
  height: 40px;
  border-radius: 3px;
  font-weight: 500;

  ${props =>
    props.active &&
    css`
      button {
        background: black;
      }
    `}

  &:hover {
    background: #fff;
    color: #7159c1;
    border: 1px solid #7159c1;
    font-weight: 500;
  }
`;

export default DefaultButton;
