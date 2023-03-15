import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-weight: normal;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  text-align: left;
  padding: 10px;
`;

const TableCellNumeric = styled(TableCell)`
  text-align: right;
`;

function StockTable({ stocks }) {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeader>Symbol</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>% Change</TableHeader>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock, index) => (
                    <TableRow key={index}>
                        <TableCell>{stock.symbol}</TableCell>
                        <TableCell>{stock.name}</TableCell>
                        <TableCellNumeric>{stock.price.toFixed(2)}</TableCellNumeric>
                        <TableCellNumeric>{stock.change.toFixed(2)}%</TableCellNumeric>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
}

export default StockTable;
