class CardDetail {
  private _name: string;
  private _cardNumber: number;
  private _cvv: number;
  private _month: number;
  private _year: number;

  constructor(name: string, cardNumber: number, cvv: number, month: number, year: number) {
    this._name = name;
    this._cardNumber = cardNumber;
    this._cvv = cvv;
    this._month = month;
    this._year = year;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cardNumber(): number {
    return this._cardNumber;
  }

  set cardNumber(value: number) {
    this._cardNumber = value;
  }

  get cvv(): number {
    return this._cvv;
  }

  set cvv(value: number) {
    this._cvv = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }
}

export default CardDetail;