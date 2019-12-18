import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import PriceInputComponent from "./PriceInputComponent";

type Props = {
  baseCurr: string;
  toCurrs: string[];
  rates: { [key: string]: number };
  isFetchingRates: boolean;
  error: null | Error;
  allCurrs: string[];
  onBaseCurrChange: (event: any) => void;
};
type State = {
  basePrice: number;
  toPrice: number;
  selectedToCurr: string;
};

class PriceConverterWidget extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    let { rates, toCurrs } = this.props;

    this.state = {
      basePrice: 1,
      toPrice: rates[toCurrs[0]],
      selectedToCurr: toCurrs[0]
    };
  }

  onPriceChange = (event: any) => {
    let newValue = parseFloat(event.target.value);
    let { rates } = this.props;
    let { selectedToCurr } = this.state;

    this.setState({
      basePrice: newValue,
      toPrice: newValue * rates[selectedToCurr]
    });
  };

  onToCurrChange = (event: any) => {
    let { rates } = this.props;
    let { basePrice } = this.state;
    let newValue = event.target.value;

    this.setState({
      selectedToCurr: newValue,
      toPrice: basePrice * rates[newValue]
    });
  };

  render = () => {
    let { basePrice, selectedToCurr, toPrice } = this.state;
    let { baseCurr, toCurrs, allCurrs, onBaseCurrChange } = this.props;
    return (
      <Card className="widget">
        <Card.Header>
          <Container>
            <Row>
              <Col>
                <h2>Price Converter Widget</h2>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <PriceInputComponent
                  label={"From Currency"}
                  selected={baseCurr}
                  selectOptions={allCurrs}
                  inputReadOnly={false}
                  inputValue={basePrice}
                  onSelectChange={onBaseCurrChange}
                  onInputChange={this.onPriceChange}
                />
              </Col>
              <Col>
                <PriceInputComponent
                  label={"To Currency"}
                  selected={selectedToCurr}
                  selectOptions={toCurrs}
                  inputReadOnly={true}
                  inputValue={toPrice}
                  onSelectChange={this.onToCurrChange}
                />
              </Col>
            </Row>
            <Row>
              <p>
                <br></br> Note. the ['<b>,</b>'] represent decimal separator and
                ['
                <b>.</b>
                '] is for thousands
              </p>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  };
}

export default PriceConverterWidget;
