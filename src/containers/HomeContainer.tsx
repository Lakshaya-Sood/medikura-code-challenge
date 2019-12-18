import React from "react";
import { connect } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
import { Spinner } from "react-bootstrap";
import PriceConverterWidget from "../components/PriceConverterWidget";
import {
  FetchRates,
  UpdateBaseCurrAction,
  UpdateToCurrsAction
} from "../store/RatesModule/Actions";
import { __AllCurrency__ } from "../constants";

type Props = {
  fetchLatestRates: (baseCurr: string, toCurrs: string[]) => void;
  updateBaseCurrAction: (baseCurr: string) => void;
  updateToCurrsAction: (toCurrs: string[]) => void;
  baseCurr: string;
  toCurrs: string[];
  rates: null | { [key: string]: number };
  isFetchingRates: boolean;
  error: null | Error;
};
type State = {};

class HomeContainer extends React.Component<Props, State> {
  componentWillMount = () => {
    let { baseCurr, toCurrs, fetchLatestRates } = this.props;
    fetchLatestRates(baseCurr, toCurrs);
  };

  onBaseCurrChange = (event: any) => {
    let baseCurr = event.target.value;
    let toCurrs = __AllCurrency__.filter(i => i !== baseCurr);
    let {
      updateBaseCurrAction,
      updateToCurrsAction,
      fetchLatestRates
    } = this.props;

    updateBaseCurrAction(baseCurr);
    updateToCurrsAction(toCurrs);
    fetchLatestRates(baseCurr, toCurrs);
  };

  render = () => {
    let { isFetchingRates, rates } = this.props;
    return (
      <div className="widget-container">
        {isFetchingRates ? (
          <Spinner animation="border" />
        ) : rates ? (
          <PriceConverterWidget
            {...this.props}
            rates={rates}
            allCurrs={__AllCurrency__}
            onBaseCurrChange={this.onBaseCurrChange}
          />
        ) : (
          <h2>Rates not present</h2>
        )}
      </div>
    );
  };
}

function mapStateToProps(state: any) {
  return cloneDeep(state.RatesReducer);
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchLatestRates: (baseCurr: string, toCurrs: string[]) =>
      dispatch(FetchRates(baseCurr, toCurrs)),
    updateBaseCurrAction: (baseCurr: string) =>
      dispatch(UpdateBaseCurrAction(baseCurr)),
    updateToCurrsAction: (toCurrs: string[]) =>
      dispatch(UpdateToCurrsAction(toCurrs))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
