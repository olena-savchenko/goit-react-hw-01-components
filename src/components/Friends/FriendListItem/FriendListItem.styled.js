import styled from 'styled-components';

export const Friend = styled.li`
  max-width: 350px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  gap: 20px;
  width: 500px;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow};

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FriendName = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: 28px;
  font-weight: 600;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
