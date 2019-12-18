import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  label: string;
  selected: string;
  selectOptions: string[];
  inputReadOnly: boolean;
  inputValue: number;
  onSelectChange: (event: any) => void;
  onInputChange?: (event: any) => void;
};

const PriceInputComponent: React.FC<Props> = ({
  label,
  selected,
  selectOptions,
  inputReadOnly,
  inputValue,
  onSelectChange,
  onInputChange
}) => {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" value={selected} onChange={onSelectChange}>
          {selectOptions.map((item, index) => (
            <option key={`label select option ${index}`}>{item}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price in Currency</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Price"
          value={inputValue.toString()}
          onChange={onInputChange}
          disabled={inputReadOnly}
        />
      </Form.Group>
    </React.Fragment>
  );
};

export default PriceInputComponent;
