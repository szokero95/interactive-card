import styled from "styled-components";
import { breakpoint, colors } from "../../style/variables";

interface IProps {
  small: JSX.Element;
  big: JSX.Element;
}

const Box = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoint}) {
    flex-direction: row;
  }
`;

const Small = styled.div`
  background: ${colors.bg};
  flex-grow: 1.5;
`;
const Big = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Container({ small, big }: IProps) {
  return (
    <Box>
      <Small>{small}</Small>
      <Big>{big}</Big>
    </Box>
  );
}
