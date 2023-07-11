import { Injectable } from '@angular/core';
import {environment} from "../../../environment/environment";
import { AES } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  secretKey: string = environment.secretKeyItem;
  secretKey2: string = environment.secretKeyData;

  constructor() { }

  // const secretKey = 'YourSecretKey'; // Replace with your own secret key
  // const dataToEncrypt = 'Data to encrypt';
  //
  // const encryptedData = AES.encrypt(dataToEncrypt, secretKey).toString();
  // localStorage.setItem('encryptedData', encryptedData);

  encryptItem = (data: string):string => {
       return AES.encrypt(data, this.secretKey).toString();
  }

  encryptData = (data: string):string => {
    return AES.encrypt(data, this.secretKey2).toString();
  }

}
