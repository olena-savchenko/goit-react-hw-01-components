import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: ${props => props.theme.colors.lightNude};

  width: 400px;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Avatar = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBlue};
  margin-bottom: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  padding: 20px;
  background-color: ${props => props.theme.colors.lightBlue};
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  color: grey;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
