'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f295cfc.js');

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('webcomponentapp.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["custom-side-drawer.cjs",[[1,"custom-side-drawer",{"topic":[513],"opened":[1540],"counter":[32],"showContactInfo":[32],"open":[64]}]]],["custom-spinner_3.cjs",[[1,"exchange-rate",{"currencyInputValue":[32],"rates":[32],"error":[32],"currency":[32],"receivedEmit":[32],"loading":[32]},[[16,"emittedEvent","prinMessage"]]],[1,"stock-price",{"title":[513],"stockSymbol":[1537,"stock-symbol"],"initialSymbol":[32],"PairCoin":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32],"currentState":[32]},[[16,"emittedSymbol","onSubmitListenedEmit"]]],[1,"custom-spinner"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=webcomponentapp.cjs.js.map