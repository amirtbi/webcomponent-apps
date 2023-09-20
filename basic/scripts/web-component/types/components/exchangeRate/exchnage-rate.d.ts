import { EventEmitter } from '../../stencil-public-runtime';
export declare class StockFinder {
  pairCoinNameInput: HTMLInputElement;
  names: number[];
  currencyInputValue: string;
  rates: Map<string, any>;
  error: boolean;
  currency: string;
  receivedEmit: string;
  loading: boolean;
  el: HTMLElement;
  emittedSymbol: EventEmitter<string>;
  addRates(rates: any): void;
  onSubmitForm(e: Event): Promise<void>;
  hostData(): {
    class: string;
  };
  prinMessage(event: CustomEvent): void;
  onEmitSymbol(symbol: string): void;
  render(): any[];
}
