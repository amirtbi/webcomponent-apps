import { h } from "@stencil/core";
export class CustomSpinner {
  render() {
    return (h("div", { class: "wrapper" }, h("div", { class: "lds-roller" }, h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null))));
  }
  static get is() { return "custom-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./spinner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["spinner.css"]
    };
  }
}
//# sourceMappingURL=spinner.js.map
