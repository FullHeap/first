import cryptoJs from 'crypto-js';

//随机生成指定数量的16进制key
export function generatekey(num) {
    let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (var i = 0; i < num; i++) {
        let randomPoz = Math.floor(Math.random() * library.length);
        key += library.substring(randomPoz, randomPoz + 1);
    }
    return key;
}

/* 支持的parse modules
crypto-js/enc-latin1
crypto-js/enc-utf8
crypto-js/enc-hex
crypto-js/enc-utf16
crypto-js/enc-base64 */

export function encryptDes(message, key) {
    var keyHex = cryptoJs.enc.Utf8.parse(key)
    /* 这里的模式参数需要和后端匹配 mode.ECB，mode.CBC*/
    var encrypted = cryptoJs.DES.encrypt(message, keyHex, { 
        mode: cryptoJs.mode.ECB, 
        padding: cryptoJs.pad.Pkcs7 
    });
    return encrypted.ciphertext.toString();
}

//DES解密
export function decryptDes(message, key) {
    var keyHex = cryptoJs.enc.Utf8.parse(key)
    var decrypted = cryptoJs.DES.decrypt(
        {
            ciphertext: cryptoJs.enc.Hex.parse(message)
        },
        keyHex,
        {
            mode: cryptoJs.mode.ECB,
            padding: cryptoJs.pad.Pkcs7
        }
    )
    return decrypted.toString(cryptoJs.enc.Utf8)
}