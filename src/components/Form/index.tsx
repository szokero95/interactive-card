import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  changeCcn,
  changeMonth,
  changeCvc,
  changeOwner,
  changeYear,
} from "../../store/rootReducer";

import { StyledForm, Label, Input, Button, Select, Row, Half } from "./styles";

export function Form() {
  const card = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [ccn, setCcn] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  useEffect(() => {
    dispatch(changeCcn(ccn.split(" ").join("").split("")));
  }, [ccn]);

  useEffect(() => {
    dispatch(changeCvc(cvc));
  }, [cvc]);

  const handleCcn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      if (ccn.length > 18) return;
      if (ccn.length === 4 || ccn.length === 9 || ccn.length === 14)
        setCcn(ccn + " " + e.key);
      else setCcn(ccn + e.key);
    }

    if (e.key === "Backspace") {
      if (ccn.length === 5 || ccn.length === 10 || ccn.length === 15) {
        setCcn(ccn.slice(0, -2));
      } else {
        setCcn(ccn.slice(0, -1));
      }
    }
  };

  const handleCvc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      if (cvc.length >= 3) return;
      else setCvc(cvc + e.key);
    }

    if (e.key === "Backspace") {
      setCvc(cvc.slice(0, -1));
    }
  };

  return (
    <StyledForm>
      <Label htmlFor="name">Owner Name</Label>
      <Input
        id="name"
        type="text"
        placeholder="John Doe"
        value={card.owner}
        onChange={(e) => dispatch(changeOwner(e.target.value))}
      />

      <Label htmlFor="ccn">Card number</Label>
      <Input
        id="ccn"
        type="tel"
        placeholder="0000 0000 0000 0000"
        value={ccn}
        onKeyDown={(e) => handleCcn(e)}
      />

      <Row>
        <Half>
          <Label htmlFor="exp">Exp.Date (MM/YY)</Label>
        </Half>
        <Label htmlFor="cvc">CVC</Label>
      </Row>
      <Row>
        <Half>
          <Select
            value={card.expMonth}
            onChange={(e) => dispatch(changeMonth(e.target.value))}
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Select>
          <Select
            value={card.expYear}
            onChange={(e) => dispatch(changeYear(e.target.value))}
          >
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
          </Select>
        </Half>
        <Input
          type="text"
          id="cvc"
          placeholder="123"
          value={cvc}
          onKeyDown={(e) => handleCvc(e)}
        />
      </Row>
      <Button onClick={(e) => e.preventDefault()}>Confirm</Button>
    </StyledForm>
  );
}
