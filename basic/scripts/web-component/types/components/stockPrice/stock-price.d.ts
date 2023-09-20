import { Event, EventEmitter } from '../../stencil-public-runtime';
export declare class StockPrice {
  stockInput: HTMLInputElement;
  el: HTMLElement;
  title: string;
  initialSymbol: string;
  PairCoin: Map<any, any>;
  stockUserInput: string;
  stockInputValid: boolean;
  error: string;
  loading: string;
  stockSymbol: string;
  currentState: string;
  emittedEvent: EventEmitter<string>;
  watchSymbolHanlder(newValue: string, oldValue: string): Promise<void>;
  onUpdateUserInput: (event: Event) => void;
  setPrices: (symbol: string) => Promise<any>;
  onFetchPrice: (event: Event) => Promise<void>;
  connectedCallback(): Promise<void>;
  componentDidRender(): void;
  hostData(): {
    class: string;
  };
  componentDidLoad(): Promise<void>;
  emitEvent(): void;
  componentWillUpdate(): void;
  onSubmitListenedEmit(event: CustomEvent): Promise<void>;
  render(): any[];
}
