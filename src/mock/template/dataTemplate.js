import Mock from 'mockjs'

Mock.mock({
//String    
    /* 'name|min-max': string */
    "string|1-10": "★",
    
    /* 'name|count': string */
    "string|3": "★★★",

//number
    /* 'name|+1': number */
    "number|+1": 202,

    /* 'name|min-max': number */
    "number|1-100": 100,

    /* 'name|min-max.dmin-dmax': number */
    "number|1-100.1-10": 1,

//Boolean
    /* 'name|1': boolean */
    "boolean|1": true,

    /* 'name|min-max': boolean */
    "boolean|1-2": true,

//Object
    /* 'name|count': object */
    "object|2": {
        "310000": "上海市",
        "320000": "江苏省",
        "330000": "浙江省",
        "340000": "安徽省"
    },

    /* 'name|min-max': object */
    "object|2-4": {
        "110000": "北京市",
        "120000": "天津市",
        "130000": "河北省",
        "140000": "山西省"
    },

//Array
    /* 'name|1': array */
    "array|1": [
        "AMD",
        "CMD",
        "UMD"
    ],

    /* 'name|+1': array */
    "array|+1": [
        "AMD",
        "CMD",
        "UMD"
    ],
    "array|1-10": [
        {
          "name|+1": [
            "Hello",
            "Mock.js",
            "!"
          ]
        }
    ],

    /* 'name|min-max': array */
    "array|1-9": [
        "Mock.js"
    ],
    "array|1-8": [
        "Hello",
        "Mock.js",
        "!"
    ],

    /* 'name|count': array */
    "array|4": [
        "Hello",
        "Mock.js",
        "!"
    ],

//function    
    /* 'name': function */
    'foo': 'Syntax Demo',
    'name': function() {
        return this.foo
    },

//regexp
    /* 'name': regexp */
    'regexp': /[a-z][A-Z][0-9]/,
    'regexp|3': /\d{5,10}-/,
    'regexp|1-5': /\d{5,10}-/,

//Path
    /* Absolute Path */
    "foo1": "Hello",
    "nested": {
        "a": {
        "b": {
            "c": "Mock.js"
        }
        }
    },
    "absolutePath": "@/foo1 @/nested/a/b/c",


})