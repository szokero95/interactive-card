import { useEffect, useState } from "react";
import styled, { Keyframes, keyframes } from "styled-components";

const JumpAnimation = keyframes`
  0%{
    transform: translateY(0px);
    color:white;
  }
  50%{
    transform: translateY(-5px);
    color:lime
  }
  100% {
    transform: translateY(0px);
    color:white
  } 
`;

const Digit = styled.p<{ animated: Keyframes | null }>`
  display: inline-block;
  animation-name: ${({ animated }) => animated};
  animation-duration: 0.5s;
  animation-fill-mode: both;
`;

export function Number({ value }: { value: string }) {
  const [animate, setAnimate] = useState<boolean>(false);
  const [initial, setInitial] = useState<boolean>(true);

  useEffect(() => {
    if (initial) {
      setInitial(false);
      return;
    }
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, [value]);

  return <Digit animated={animate ? JumpAnimation : null}>{value}</Digit>;
}
