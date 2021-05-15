import { SumUp } from "@ionic-native/sum-up/ngx";

export class SumUpMock extends SumUp {
  /**
   * Login a user with an optional access token.
   * If the access token is provided and valid, the user is logged in autmatically.
   * Otherwise the user has to type in the credentials
   * @param accessToken {string}
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  login(accessToken?: string): Promise<SumUpResponse> {
    let response: SumUpResponse = {
      code: 1,
      message: "User logged in"
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Authenticates the account with the given access token. Parameter accessToken is required.
   * @param accessToken {string}
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  auth(accessToken: string): Promise<SumUpResponse> {
    let response: SumUpResponse = {
      code: 1,
      message: "Auth successful"
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Opens a new window with the all account settings of an logged in user.
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  getSettings(): Promise<SumUpResponse> {
    let response: SumUpResponse = {
      code: 1,
      message: "Settings done"
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Logout a user from the account.
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  logout(): Promise<SumUpResponse> {
    let response: SumUpResponse = {
      code: 1,
      message: "User logged out"
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Checks whether the user is logged in or not and returns an object with the field isLoggedIn which is a boolean value.
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  isLoggedIn(): Promise<SumUpLoginStatus> {
    let response: SumUpLoginStatus = {
      code: 1,
      isLoggedIn: true
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Prepares the terminal for a payment. Checks whether the CardReader is ready to transmit and
   * if an instance of the CardReaderManager is available.
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  prepare(): Promise<SumUpResponse> {
    let response: SumUpResponse = {
      code: 1,
      message: "Prepare success"
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Tries to close the connection to the card terminal.
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  closeConnection(): Promise<SumUpResponse> {
    let response: SumUpResponse = {
      code: 1,
      message: "Connection closed"
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  /**
   * Opens a native SumUp window to proceed a payment. Parameter amount and currencycode are required.
   * If the Payment was successful it returns an SumUpPayment object with information about the payment.
   * @param amount {number}
   * @param currencycode {string}
   * @return {Promise<SumUpResponse>} Return a SumUpResponse object
   */
  pay(amount: number, currencycode: string): Promise<SumUpPayment> {
    let response: SumUpPayment = {
      transaction_code: "12345",
      card_type: "MAESTRO",
      merchant_code: "MERCHANT",
      amount: 10,
      tip_amount: 0,
      vat_amount: 0,
      currency: "EUR",
      status: "SUCCESSFUL",
      payment_type: "CARD",
      entry_mode: "CHIP",
      installments: 1
    };

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
}

export interface SumUpResponse {
  // Code to identify the message
  code: number;

  // Message for readable usage
  message: string;
}

export interface SumUpLoginStatus {
  // Code, to check if an error occured
  code: number;

  // Booleand value whether the user is logged in or not
  isLoggedIn: boolean;
}

export interface SumUpPayment {
  // Unique transaction code
  transaction_code: string;

  // Card type -> like MAESTRO
  card_type: string;

  // Merchant code for identification
  merchant_code: string;

  // Amount of the payment
  amount: number;

  // Tip amount -> default 0
  tip_amount: number;

  // Vat amount -> default 0
  vat_amount: number;

  // Currency code -> like EUR
  currency: string;

  // Payment status -> successful or error
  status: string;

  // Type -> Card or nfc
  payment_type: string;

  // Entry mode -> Like chip or contactless
  entry_mode: string;

  // Number of installments -> default 1
  installments: number;
}
