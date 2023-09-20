export declare class SideDrawer {
  counter: number;
  showContactInfo: boolean;
  topic: string;
  opened: boolean;
  onClickTab(content: string): void;
  onClickIncrease(): void;
  onBackdropClick(): void;
  onClickDrawer(): void;
  WatchHanlder(newValue: number): void;
  /**
   * @Method
   * make the open function expose to light DOM
   */
  open(): Promise<void>;
  render(): any[];
}
