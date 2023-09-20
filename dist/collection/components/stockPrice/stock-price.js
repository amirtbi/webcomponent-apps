import { h } from "@stencil/core";
import { setValues } from "../../utils/fetchCoinHandler";
export class StockPrice {
  constructor() {
    // Update status of disabled button
    this.onUpdateUserInput = (event) => {
      this.stockUserInput = event.target.value;
      console.log('user input', this.stockUserInput);
      if (this.stockUserInput.trim() !== '') {
        this.stockInputValid = true;
      }
      else {
        this.stockInputValid = false;
      }
    };
    this.setPrices = async (symbol) => {
      console.log('symbol');
      try {
        const res = await setValues(symbol);
        if (res) {
          this.stockInputValid = true;
          this.stockSymbol = symbol;
          this.stockUserInput = this.stockSymbol;
          this.PairCoin = res;
          this.error = '';
        }
        else {
          this.error = 'Not valid symbol';
          return null;
        }
      }
      catch (e) {
        this.error = 'Not valid symbol';
        return null;
      }
      //this.initialSymbol = this.stockSymbol;
    };
    // Fetch price and send request
    this.onFetchPrice = async (event) => {
      event.preventDefault();
      // const stockSymbol = (this.el.shadowRoot.querySelector('#symbol') as HTMLInputElement).value;
      const stockSymbol = this.stockInput.value;
      if (stockSymbol !== '') {
        await this.setPrices(stockSymbol);
      }
    };
    this.title = undefined;
    this.initialSymbol = undefined;
    this.PairCoin = new Map();
    this.stockUserInput = undefined;
    this.stockInputValid = false;
    this.error = undefined;
    this.loading = 'false';
    this.stockSymbol = undefined;
    this.currentState = undefined;
  }
  async watchSymbolHanlder(newValue, oldValue) {
    if (newValue !== oldValue) {
      await this.setPrices(newValue);
    }
  }
  // Life cylces
  async connectedCallback() {
    this.loading = 'true';
    if (!this.stockSymbol) {
      console.log('========Connected callback====');
      const res = await setValues(this.stockSymbol);
      if (res) {
        this.PairCoin = res;
      }
      //this.initialSymbol = this.stockSymbol;
    }
    this.loading = 'false';
  }
  // Before rendering component
  // componentWillLoad() {
  //   console.log('component will load');
  //   this.Price = 0;
  // }
  componentDidRender() {
    this.currentState = 'did rendered';
    console.log('rendered component');
  }
  // Buil-in method
  hostData() {
    return { class: 'error' };
  }
  // Component rendered completely
  async componentDidLoad() {
    this.loading = 'true';
    if (this.stockSymbol) {
      // const res = await fetchPrices(this.stockSymbol);
      await this.setPrices(this.stockSymbol);
    }
  }
  emitEvent() {
    this.emittedEvent.emit('true');
  }
  // async componentDidUpdate() {
  //   console.log('component updated ');
  //   if (this.stockSymbol !== this.initialSymbol) {
  //     console.log('http request sent');
  //     this.initialSymbol = this.stockSymbol;
  //     await this.setPrices(this.stockSymbol);
  //   }
  // }
  // Before rerendering component
  componentWillUpdate() {
    console.log('updating ');
  }
  // Listen evenets from body
  async onSubmitListenedEmit(event) {
    console.log('Emiited');
    if (event.detail !== this.stockSymbol && event.detail) {
      await this.setPrices(event.detail + '-USD');
    }
  }
  render() {
    let PriceWrapper = h("div", null, "Please enter a valid symbol");
    if (this.error) {
      PriceWrapper = h("div", { class: "error" }, "Error:", this.error);
    }
    else if (this.PairCoin.size > 0) {
      PriceWrapper = (h("div", null, h("p", null, "Symbol:\u00A0", this.PairCoin.get('name')), h("p", null, "Price:\u00A0", this.PairCoin.get('formatted'))));
    }
    else {
      PriceWrapper = h("div", null, "Please enter a valid symbol");
    }
    return [
      h("form", { id: "form", onSubmit: this.onFetchPrice.bind(this) }, h("div", null, "Status:", this.currentState), h("div", { class: "field" }, h("input", { value: this.stockUserInput, onInput: this.onUpdateUserInput.bind(this), ref: el => (this.stockInput = el), placeholder: "stock symbol", id: "symbol" })), h("div", { class: "field" }, h("button", { disabled: !this.stockInputValid, id: "btn-submit", type: "submit" }, "Fetch Price"))),
      h("button", { onClick: this.emitEvent.bind(this) }, "Emit event"),
      h("section", { class: this.error ? 'error-box' : '' }, PriceWrapper),
    ];
  }
  static get is() { return "stock-price"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./stock-price.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["stock-price.css"]
    };
  }
  static get properties() {
    return {
      "title": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "title",
        "reflect": true
      },
      "stockSymbol": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "stock-symbol",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "initialSymbol": {},
      "PairCoin": {},
      "stockUserInput": {},
      "stockInputValid": {},
      "error": {},
      "loading": {},
      "currentState": {}
    };
  }
  static get events() {
    return [{
        "method": "emittedEvent",
        "name": "emittedEvent",
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
  static get watchers() {
    return [{
        "propName": "stockSymbol",
        "methodName": "watchSymbolHanlder"
      }];
  }
  static get listeners() {
    return [{
        "name": "emittedSymbol",
        "method": "onSubmitListenedEmit",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=stock-price.js.map
