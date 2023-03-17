import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux";
import { colors, breakpoint } from "../../style/variables";

const Box = styled.div`
  width: 400px;
  height: 200px;
  position: absolute;
  z-index: 10;

  background: ${colors.white};
  border-radius: 5px;
  color: white;
  filter: drop-shadow(15px 10px 4px #333);

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  display: none;

  @media (min-width: 400px) and (min-height: 730px) {
    display: flex;
    top: 6%;
    left: 8%;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${breakpoint}) {
    display: flex;
    top: 55%;
    left: 15%;
    margin: 0;
  }
`;

const Backline = styled.span`
  width: 100%;
  padding: 1.3rem;
  margin-top: 1rem;
  background: ${colors.black};
`;

const Cvc = styled.span`
  width: 80%;
  padding: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  text-align: right;
  background: ${colors.ltGray};
`;

export function CardBack() {
  const card = useAppSelector((state) => state);
  return (
    <Box>
      <Backline></Backline>
      <Cvc>{card.cvc}</Cvc>
    </Box>
  );
}
