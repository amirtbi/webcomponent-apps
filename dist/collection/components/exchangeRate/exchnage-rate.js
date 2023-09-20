import { h } from "@stencil/core";
import { getExchangesRate } from "../../utils/fetchExchangeHandler";
export class StockFinder {
  constructor() {
    this.names = [1, 2, 3, 4, 5];
    this.currencyInputValue = undefined;
    this.rates = new Map([]);
    this.error = false;
    this.currency = undefined;
    this.receivedEmit = 'false';
    this.loading = false;
  }
  addRates(rates) {
    this.rates.clear();
    console.log('rates', this.rates);
    const listOfRates = Object.entries(rates);
    for (const [key, value] of listOfRates) {
      this.rates.set(key, value);
    }
  }
  async onSubmitForm(e) {
    console.log('Event', e);
    e.preventDefault();
    try {
      console.log('input value', this.pairCoinNameInput.value);
      this.loading = true;
      const response = await getExchangesRate(this.pairCoinNameInput.value);
      const res = await response;
      if (res.code === 'ERR_NETWORK') {
        this.error = true;
        this.loading = false;
        return;
      }
      const dataObj = res.data;
      this.currency = res.data.data.currency;
      const { rates } = dataObj.data;
      this.addRates(rates);
      console.log('rates map', this.rates);
    }
    catch (e) {
      this.loading = false;
    }
    finally {
      this.loading = false;
    }
  }
  hostData() {
    if (this.error) {
      return { class: 'error' };
    }
  }
  prinMessage(event) {
    console.log('Event', event);
    if (event.detail && event.detail === 'true') {
      this.receivedEmit = event.detail;
    }
  }
  onEmitSymbol(symbol) {
    console.log('selected symbol', symbol);
    this.emittedSymbol.emit(symbol);
  }
  render() {
    let className;
    let exchangeRatesWrapper = h("div", null, "Please enter your currency");
    let btnText = 'Find Exchange rates';
    if (this.loading) {
      exchangeRatesWrapper = h("custom-spinner", null);
    }
    if (this.error) {
      className = 'error';
    }
    else {
      className = null;
    }
    if (this.rates.size > 0 && !this.loading) {
      exchangeRatesWrapper = (h("ul", null, Array.from(this.rates.keys()).map((key) => {
        return (h("li", { onClick: this.onEmitSymbol.bind(this, key), key: key }, h("p", null, key), h("p", null, Math.floor(Number(this.rates.get(key))))));
      }), ";"));
    }
    return [
      h("div", { class: "wrapper" }, h("form", { class: "form-container", onSubmit: this.onSubmitForm.bind(this) }, h("div", { class: "field" }, h("input", { class: className, value: this.currencyInputValue, ref: el => (this.pairCoinNameInput = el), placeholder: "pair coin" })), h("div", { class: "field" }, h("button", { disabled: this.loading, type: "submit" }, btnText))), h("div", { class: "list-container" }, exchangeRatesWrapper)),
    ];
  }
  static get is() { return "exchange-rate"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./exchange-rate.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["exchange-rate.css"]
    };
  }
  static get states() {
    return {
      "currencyInputValue": {},
      "rates": {},
      "error": {},
      "currency": {},
      "receivedEmit": {},
      "loading": {}
    };
  }
  static get events() {
    return [{
        "method": "emittedSymbol",
        "name": "emittedSymbol",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "emittedEvent",
        "method": "prinMessage",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=exchnage-rate.js.map
