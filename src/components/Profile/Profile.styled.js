import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 450px;
  display: inline-block;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 40px 0;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;

  border-radius: 50%;
  border: ${props => props.theme.border};
  box-shadow: 1px 13px 21px -8px rgba(0, 0, 0, 0.56);
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 30px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: 24px;
`;

export const StatsList = styled.ul`
  display: flex;
  border-top: ${props => props.theme.border};
  background-color: ${props => props.theme.colors.lightblue};
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  padding: 20px;

  :not(:last-child) {
    border-right: ${props => props.theme.border};
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;

  font-size: 22px;
  text-align: center;
  color: ${props => props.theme.colors.grey};
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;

  font-size: 20px;
  font-weight: 700;

  color: ${props => props.theme.colors.black};
`;
