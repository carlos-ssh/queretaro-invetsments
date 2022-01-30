import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  background: ${({ primary }) => (
    primary ? '#434142' : '#FDD540'
  )};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
  color: ${({primary}) => (primary ? '#FDD540' : '#434142')};
  font-size: ${({big}) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: -2px 6px 5px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: -2px 6px 5px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: -2px 6px 5px 0px rgba(0,0,0,0.25);
  }
`;

export default Button;
