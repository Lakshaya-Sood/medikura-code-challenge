import axios from "axios";
import { GetExcRatesPath } from "../utils/URLUtils";
import { TodayDate } from "../utils/DateUtils";

const ExchangeRatesClient = {
  getExchangeRates: async (
    baseCurr: string,
    toCurrs: string[],
    date = TodayDate("YYYY-MM-DD") // default value is today's date
  ) => {
    let URL = GetExcRatesPath(date);
    let response = await axios.get(URL, {
      params: {
        base: baseCurr,
        symbols: toCurrs.join(",")
      }
    });
    return response.data.rates;
  }
};

export default ExchangeRatesClient;
