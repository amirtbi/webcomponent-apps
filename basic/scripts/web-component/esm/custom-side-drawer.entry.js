import { r as registerInstance, h } from './index-5abba347.js';

const sideDrawerCss = ":host([opened]) aside{left:0px}#backdrop{position:fixed;z-index:1000;background-color:rgba(0, 0, 0, 0.5);height:100vh;width:100%;visibility:hidden;pointer-events:none;opacity:0;transition:all 0.5s ease-in-out}:host([opened]) #backdrop{visibility:visible;opacity:1;pointer-events:all}aside{background-color:#eee;width:350px;height:100vh;z-index:2222;position:fixed;left:-100%;bottom:0px;box-shadow:rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;transition:all 0.5s ease}aside header{background-color:rgb(76, 0, 92);padding:0px}aside header .tabs{margin:0px;display:flex;flex-direction:row;justify-content:space-between}aside header .tabs:first-child{margin-right:0.2rem}aside header .tabs button{margin:0px;background-color:white;padding:1rem;flex-grow:1;border-top:none;border-bottom:none;border-right:none;transition:all 0.5s ease-out}aside header .tabs button:hover{background-color:indianred;color:white}aside header .tabs button:focus{outline:none}aside header .tabs button:active{background-color:purple}aside header .tabs button.active{color:white;background-color:purple}aside header div{display:flex;flex-direction:row;justify-content:space-between}aside header div button{border:none;background-color:transparent;margin:0.75rem;color:indianred;font-size:1rem;cursor:pointer}aside header h1{padding:1rem;color:rgb(224, 117, 117);font-weight:bold;margin:0px}aside nav ul{display:flex;flex-direction:column;padding:0px}aside nav li{font-family:sans-serif;font-weight:bold;list-style:none;padding:1rem;border-bottom:1px solid #ccc;transition:all 0.5s ease;cursor:pointer}aside nav li:hover{color:pink}aside #contact-information{padding:1rem}aside #contact-information p{font-weight:bold;color:indianred}aside #contact-information li{padding:0.5rem;font-weight:bold}";

const SideDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  static get watchers() { return {
    "counter": ["WatchHanlder"]
  }; }
};
SideDrawer.style = sideDrawerCss;

export { SideDrawer as custom_side_drawer };

//# sourceMappingURL=custom-side-drawer.entry.js.map