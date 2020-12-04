import styled from "styled-components";

export default function Ball({ size, color }) {
  return <Balls size={size} color={color} />;
}

const Balls = styled.figure`
  width: ${(props) => {
    return props.size;
  }}px;
  height: ${(props) => {
    return props.size;
  }}px;
  background-color: ${(props) => {
    return props.color;
  }};
  border-radius: 50%;
`;
