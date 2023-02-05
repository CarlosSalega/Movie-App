import styled from "styled-components";

interface Props {
  primary?: boolean;
}

export const Button = styled.button<Props>`
  color: #ffffff;
  border: 1px solid #323232;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  ${(props) => (props.primary ? "background: #944105" : "background: #ffffff")}
`;

export const Container = styled.div<Props>`
  width: 100%;
  padding: 50px;
`;
