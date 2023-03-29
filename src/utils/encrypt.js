import CryptoJS from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'
import md5 from 'crypto-js/md5'

export function Decrypt(word, aeskey){
    let key = CryptoJS.enc.Utf8.parse(aeskey?.substring(0, 16));
    let decrypt = CryptoJS.AES.decrypt(word, key,
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        },
    )
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    //let decString = CryptoJS.enc.Utf8.stringify(decrypt).toString();
    return decryptedStr.toString();
}

export function Encrypt(word, aeskey){
    if (word instanceof Object) {
        word = JSON.stringify(word)
    }
    let key = CryptoJS.enc.Utf8.parse(aeskey?.substring(0, 16));
    var encryptedObj = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(word), key,
        {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        },
    )
    var hexStr = encryptedObj.ciphertext.toString().toUpperCase();
    var oldHexStr = CryptoJS.enc.Hex.parse(hexStr);
    return CryptoJS.enc.Base64.stringify(oldHexStr);
}


// Base64加密
export function encryptByBase64(cipherText) {
    return Base64.stringify(UTF8.parse(cipherText))
  }
  
  // Base64解密
  export function decryptByBase64(cipherText) {
    return Base64.parse(cipherText).toString(UTF8)
  }
  
  // MD5加密，不可逆
  export function encryptByMd5(password) {
    return md5(password).toString()
  }
  