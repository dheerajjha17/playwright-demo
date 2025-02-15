import { th } from "@faker-js/faker";

class UserDetail {
  private _firstName: string;
  private _lastName: string;
  private _address: string;
  private _state: string;
  private _city: string;
  private _pincode: string;
  private _mobileNumber: string;
  private _email: string;

  constructor(firstName: string, lastName: string, address: string, state: string, city: string, pincode: string, mobileNumber: string, email: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
    this._state = state;
    this._city = city;
    this._pincode = pincode;
    this._mobileNumber = mobileNumber;
    this._email = email;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get pincode(): string {
    return this._pincode;
  }

  set pincode(value: string) {
    this._pincode = value;
  }

  get mobileNumber(): string {
    return this._mobileNumber;
  }

  set mobileNumber(value: string) {
    this._mobileNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

}

export default UserDetail;