import styled from 'styled-components';

export const Table = styled.table`
  width: 70%;
  border-radius: 4px;
  box-shadow: ${props => props.theme.boxshadow};
`;

export const HeadTable = styled.thead``;

export const TableHeaderCell = styled.th`
  padding: 20px;
  background-color: ${props => props.theme.colors.brightblue};
  border-bottom: ${props => props.theme.border};
  :not(:last-child) {
    border-right: ${props => props.theme.border};
  }
`;

export const TableRow = styled.tr`
  // background-color: yellowgreen;
`;

export const TableData = styled.td`
  padding: 20px;
  border-bottom: ${props => props.theme.border};
  :not(:last-child) {
    border-right: ${props => props.theme.border};
  }
`;
