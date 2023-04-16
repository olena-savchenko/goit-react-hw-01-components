import styled from 'styled-components';
import { getRandomHexColor } from '../utils/GetRandomHexColor';

export const Section = styled.section`
  width: 500px;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  width: calc(100% / 4);
  padding: 10px;

  background-color: ${props => getRandomHexColor(props.index)};

  :not(:last-child) {
    border-right: ${props => props.theme.border};
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 600;
  display: block;
  color: ${props => props.theme.colors.white};
  text-align: center;
  opacity: 0.8;
`;
