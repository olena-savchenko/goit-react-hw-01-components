import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow};
`;

export const HeadTable = styled.thead``;

export const TableHeaderCell = styled.th`
  padding: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  font-size: 20px;

  background-color: ${props => props.theme.colors.brightblue};
  border-bottom: ${props => props.theme.border};
  :not(:last-child) {
    border-right: ${props => props.theme.border};
  }
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background-color: ${props => props.theme.colors.lightblue};
  }
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  font-size: 18px;

  :not(:last-child) {
    border-right: ${props => props.theme.border};
  }
`;
