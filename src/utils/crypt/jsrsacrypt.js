
import jsrsasign from 'jsrsasign'
// import jsrsasignUtil from 'jsrsasign-util'

// 密钥对生成 
//http://web.chacuo.net/netrsakeypair
//java 生成需要加上 -----BEGIN PUBLIC KEY-----和-----END PUBLIC KEY-----

// 公钥
let pubk =
    "-----BEGIN PUBLIC KEY-----\n" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDblel5BFNPG+HTSGJgGOBhNsv2\n" +
    "WOqwU7Dvxuj1A+nU3M3eXTLY/xFU7q9LyxG4yGiR3VvPgjaduiO2WGF2sZECpwf6\n" +
    "Hjh4aNJSCsukFrkfClZ2CvissHVhxXv/DJfH2AZycBcvcFxKrKbUbU9WH46o8F7K\n" +
    "AGruU0JkBTDaRAZMgQIDAQAB\n" +
    "-----END PUBLIC KEY-----";

// 私钥
let priK =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBANuV6XkEU08b4dNI\n" +
    "YmAY4GE2y/ZY6rBTsO/G6PUD6dTczd5dMtj/EVTur0vLEbjIaJHdW8+CNp26I7ZY\n" +
    "YXaxkQKnB/oeOHho0lIKy6QWuR8KVnYK+KywdWHFe/8Ml8fYBnJwFy9wXEqsptRt\n" +
    "T1YfjqjwXsoAau5TQmQFMNpEBkyBAgMBAAECgYAK/Ios6uF8MMnwt0tswXHgi0xT\n" +
    "LAm5/sX4iTw4nhSB+PY37PPRVZm5ZSPSJ/vgAe7xdWDVlg9Dfv+wbOWbebDmmE8K\n" +
    "6FLfXFqYjSRDca7Ib9P9LE/voLgml5rMzBaTsK6519WEXjWkxZzIbFac5b2ZIQdr\n" +
    "T9IzWgxcrGK/Bi66QQJBAPsqV5VMhOy0U7/ATot9+relafQzvnnBwk6ifi7Lheo6\n" +
    "e510y+XrvKc1y+LtG+T5x2lRxCfebi1xSScMOW2XjnkCQQDfz/SPfzh7uu03OnG7\n" +
    "dk/DATpIziXUCQKOtY8Bmp7koTeoSnacoTIIIXmAizJ42ESNfPPK2JucHn8h9JTl\n" +
    "6QxJAkB59oWxKgciKi7A3lFFy1cD9n8M5lOILF5+cMl1T78njl6Yhy67500kpSrs\n" +
    "dtckyWXb7qih85Ds4CX1oCoC3aWBAkAPS8gcEobKtgDGWIEzXaef3TKdjTE6p478\n" +
    "L95hLq8TUw1ZvBUVKVMhCSCjr1+4sJcm0FZdE6a26cKokG2otN+5AkEAkFso/cB5\n" +
    "oJF3cVK2+LuBeeLCtWX6vLUWAFHKzEK3N1tJvp01oEiPw9BbEkVgFm4zvdiYVw0i\n" +
    "C6FlHaQYqnycpQ==\n" +
    "-----END PRIVATE KEY-----";

// 私钥加签
export function signature(signData) {
    // console.log("jsutil:"+jsrsasignUtil.readFileHexByBin("./pri.key"));
    // 创建秘钥实例
    var key = jsrsasign.KEYUTIL.getKey(priK);
    // 指定签名算法 sha1对原文哈希
    let signature = new jsrsasign.KJUR.crypto.Signature({ alg: "SHA1withRSA" });
    // 传入秘钥实例, 初始化
    signature.init(key);
    // 传入待签明文
    signature.updateString(signData);
    // 签名, 得到16进制字符结果
    let signResult = signature.sign();
    // 签名hex转base64
    let signBase64 = jsrsasign.hextob64(signResult);
    // console.log(signBase64);
    return signBase64;
}


export function signaturePCK8(signData) {
    let signature = new jsrsasign.KJUR.crypto.Signature({ alg: "SHA1withRSA", prvkeypem: priK });    //!这里指定 私钥 pem!
    signature.updateString(signData);
    return jsrsasign.hextob64(signature.sign());
}

export function signaturePCK1(signData) {
    var key = jsrsasign.KEYUTIL.getKey(priK);
    console.log(key);
    let signature = new jsrsasign.KJUR.crypto.Signature({ alg: "SHA1withRSA" });
    // 传入key实例, 初始化signature实例
    signature.init(key);
    // 传入待签明文
    signature.updateString(signData);
    // 签名, 得到16进制字符结果
    let a = signature.sign();
    let sign = jsrsasign.hextob64(a);
    console.log(sign);
    return sign;
}


// 验签 用公钥对签名进行验签
export function verify(signData, data) {
    // signData: 加签的数据
    // data: 加签之后得到的签文
    try {
        // 验签
        // !要重新new 一个Signature, 否则, 取摘要和签名时取得摘要不一样, 导致验签误报失败(原因不明)!
        let signatureVf = new jsrsasign.KJUR.crypto.Signature({ alg: "SHA1withRSA", prvkeypem: pubk });
        signatureVf.updateString(data);
        // !接受的参数是16进制字符串!
        let result = signatureVf.verify(jsrsasign.b64tohex(signData));
        console.log("jsrsasign verify: " + result);
        return result;
    } catch (e) {
        console.error(e);
    }
}

// 加密
export function encrypt(encryptData) {
    // 读取解析pem格式的秘钥, 生成秘钥实例 (RSAKey) 
    var pub = jsrsasign.KEYUTIL.getKey(pubk);
    var enc = jsrsasign.KJUR.crypto.Cipher.encrypt(encryptData, pub);
    console.log("jsrsasign decrypt: " + enc);
    console.log("jsrsasign hextob64: " + jsrsasign.hextob64(enc));
    return jsrsasign.hextob64(enc);
}

// 解密
export function decrypt(decryptData) {
    var prv = jsrsasign.KEYUTIL.getKey(priK);
    var dec = jsrsasign.KJUR.crypto.Cipher.decrypt(jsrsasign.b64utohex(decryptData), prv);
    console.log("jsrsasign decrypt: " + dec);
    console.log("jsrsasign b64utohex: " + jsrsasign.b64utohex(dec));
    return dec;
}


