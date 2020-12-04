import styled from "styled-components";

export default function Triangle({ size, color, rotate }) {
  return <Triangles size={size} color={color} rotate={rotate} />;
}

const Triangles = styled.figure`
  width: 0px;
  height: 0px;
  border-left: ${(props) => {
      return props.size;
    }}px
    solid transparent;
  border-right: ${(props) => {
      return props.size;
    }}px
    solid transparent;

  border-bottom: ${(props) => {
      return props.size;
    }}px
    solid
    ${(props) => {
      return props.color;
    }};
  transform: rotate(
    ${(props) => {
      return props.rotate;
    }}deg
  );
`;
