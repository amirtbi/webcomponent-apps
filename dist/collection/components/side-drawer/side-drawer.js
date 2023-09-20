import { h } from "@stencil/core";
export class SideDrawer {
  constructor() {
    this.counter = 0;
    this.showContactInfo = false;
    this.topic = undefined;
    this.opened = undefined;
  }
  onClickTab(content) {
    this.showContactInfo = content === 'contact';
    console.log('nav clicked', content);
  }
  onClickIncrease() {
    this.counter += 1;
    console.log('clicked', this.counter);
  }
  onBackdropClick() {
    this.opened = false;
  }
  onClickDrawer() {
    this.opened = false;
  }
  WatchHanlder(newValue) {
    this.counter = newValue;
  }
  /**
   * @Method
   * make the open function expose to light DOM
   */
  async open() {
    this.opened = true;
  }
  render() {
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = [
        h("div", { id: "contact-information" }, h("h1", null, "Contact information"), h("p", null, "You can reach us via phone or Email"), h("ul", null, h("li", null, "Phone:9336207711"), h("li", null, "Email:", h("a", { href: "mailto:something@gmail.com" }, "something@gmail.com")))),
        h("div", null, h("button", { onClick: this.onClickIncrease.bind(this) }, "Add")),
      ];
    }
    return [
      h("div", { onClick: this.onBackdropClick.bind(this), id: "backdrop" }),
      h("aside", null, h("header", null, h("div", null, h("h1", null, this.topic), h("span", null, this.counter), h("button", { onClick: this.onClickDrawer.bind(this) }, "X")), h("div", { class: "tabs" }, h("button", { class: this.showContactInfo ? '' : 'active', onClick: this.onClickTab.bind(this, 'nav') }, "Navigation"), h("button", { class: !this.showContactInfo ? '' : 'active', onClick: this.onClickTab.bind(this, 'contact') }, "Contact"))), h("main", null, mainContent)),
    ];
  }
  static get is() { return "custom-side-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./side-drawer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["side-drawer.css"]
    };
  }
  static get properties() {
    return {
      "topic": {
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
        "attribute": "topic",
        "reflect": true
      },
      "opened": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "opened",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "counter": {},
      "showContactInfo": {}
    };
  }
  static get methods() {
    return {
      "open": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "Method",
              "text": "make the open function expose to light DOM"
            }]
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "counter",
        "methodName": "WatchHanlder"
      }];
  }
}
//# sourceMappingURL=side-drawer.js.map
