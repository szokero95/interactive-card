import styled from "styled-components";
import { colors } from "../../style/variables";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  gap: 0.3rem;
`;

const Label = styled.label`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bolder;
  color: ${colors.darkGray};
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid ${colors.ltGray};
  border-radius: 2px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  background: ${colors.black};
  color: ${colors.white};
  margin-top: 0.7rem;
  border-radius: 5px;
  border: 1px solid ${colors.black};
  transition: all 1s ease;
  &:hover {
    cursor: pointer;
    background: ${colors.darkGray};
  }
`;

const Select = styled.select`
  width: 40%;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  background: ${colors.white};
  border: 1px solid ${colors.ltGray};
  border-radius: 2px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Half = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}`;

export { StyledForm, Label, Input, Button, Select, Row, Half };
