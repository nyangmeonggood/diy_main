import styled from "styled-components";

export default function Square({ rowSize, columnSize, color, rotate }) {
  return (
    <Squares
      rowSize={rowSize}
      columnSize={columnSize}
      color={color}
      rotate={rotate}
    />
  );
}

const Squares = styled.figure`
  width: ${(props) => {
    return props.rowSize;
  }}px;
  height: ${(props) => {
    return props.columnSize;
  }}px;
  background-color: ${(props) => {
    return props.color;
  }};
  transform: rotate(
    ${(props) => {
      return props.rotate;
    }}deg
  );
`;
