import styled from 'styled-components';

export const UserContainer = styled.div`
  /* background-color: #efdecd; */
  background-color: ${props => props.theme.colors.accent};
  /* box-shadow: -2px -2px 22px 0px #000000; */
  padding: 30px;
  display: inline-block;
  border-radius: 5px;
`;
