import CryptoJS from 'crypto-js';

export default {
    //随机生成指定数量的16进制key
    generatekey(num) {
        let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let key = "";
        for (var i = 0; i < num; i++) {
            let randomPoz = Math.floor(Math.random() * library.length);
            key += library.substring(randomPoz, randomPoz + 1);
        }
        return key;
    },

    //加密
    encryptAes(encryptData, key) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var srcs = CryptoJS.enc.Utf8.parse(encryptData);
        var encrypted = CryptoJS.AES.encrypt(srcs, keyHex, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    },

    //解密
    decryptAes(decryptData, key) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var decrypt = CryptoJS.AES.decrypt(decryptData, keyHex, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }

}