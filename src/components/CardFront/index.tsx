import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux";
import { breakpoint, colors } from "../../style/variables";

import { Number } from "./Number";

const Box = styled.div`
  width: 400px;
  height: 200px;
  position: absolute;
  z-index: 20;

  padding: 2rem;
  color: ${colors.white};
  background: ${colors.card};
  border-radius: 5px;
  filter: drop-shadow(15px 10px 4px #333);

  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5rem;

  display: none;

  @media (min-width: 400px) and (min-height: 730px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
  }

  @media (min-width: ${breakpoint}) {
    display: flex;
    margin: 0;
    top: 15%;
    left: 10%;
  }
`;

const Ccn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 28px;
  letter-spacing: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  letter-spacing: 3px;
`;

const Owner = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Span = styled.span`
  display: flex;
  flex-direction: row;
`;

export function CardFront() {
  const card = useAppSelector((state) => state);
  return (
    <Box>
      <Ccn>
        <span>
          <Number value={card.ccn[0]} />
          <Number value={card.ccn[1]} />
          <Number value={card.ccn[2]} />
          <Number value={card.ccn[3]} />
        </span>
        <span>
          <p> </p>
          <Number value={card.ccn[4]} />
          <Number value={card.ccn[5]} />
          <Number value={card.ccn[6]} />
          <Number value={card.ccn[7]} />
        </span>
        <span>
          <Number value={card.ccn[8]} />
          <Number value={card.ccn[9]} />
          <Number value={card.ccn[10]} />
          <Number value={card.ccn[11]} />
        </span>
        <span>
          <Number value={card.ccn[12]} />
          <Number value={card.ccn[13]} />
          <Number value={card.ccn[14]} />
          <Number value={card.ccn[15]} />
        </span>
      </Ccn>
      <Row>
        <Owner>{card.owner}</Owner>
        <Span>
          <p>{card.expMonth}</p> /<p>{card.expYear}</p>
        </Span>
      </Row>
    </Box>
  );
}
