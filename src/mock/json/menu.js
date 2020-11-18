const asyncRoutes = [
    {
        "path": "/system",
        "name": 'SystemIndex',
        "component": "system",
        "meta": {
            "title": "sys系统管理",
            "icon": "el-icon-setting",
            "role": [
                "admin"
            ]
        },
        "children": [
            {
                "path": "/system/home",
                "component": "system/home",
                "meta": {
                    "title": "欢迎登录",
                    "icon": "el-icon-star-on",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/system/role",
                "component": "system/role",
                "meta": {
                    "title": "角色管理",
                    "icon": "el-icon-star-on",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/system/user",
                "component": "system/user",
                "meta": {
                    "title": "用户管理",
                    "icon": "el-icon-user-solid",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/system/menu",
                "component": "system/menu",
                "meta": {
                    "title": "菜单管理",
                    "icon": "el-icon-menu",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/system/trans",
                "component": "system/trans",
                "meta": {
                    "title": "多系统",
                    "icon": "el-icon-s-opportunity",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/system/test",
                "component": "system/test",
                "meta": {
                    "title": "系统测试",
                    "icon": "el-icon-success",
                    "role": [
                        "admin"
                    ]
                }
            }
        ]
    },
    {
        "path": "/cip",
        "name": 'CipIndex',
        "component": "system",
        "meta": {
            "title": "cip系统管理",
            "icon": "el-icon-setting",
            "role": [
                "admin"
            ]
        },
        "children": [
            {
                "path": "/cip/home",
                "component": "cip/home",
                "meta": {
                    "title": "欢迎登录",
                    "icon": "el-icon-star-on",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/cip/role",
                "component": "cip/role",
                "meta": {
                    "title": "角色管理",
                    "icon": "el-icon-star-on",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/cip/user",
                "component": "cip/user",
                "meta": {
                    "title": "用户管理",
                    "icon": "el-icon-user-solid",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "/cip/test",
                "component": "cip/test",
                "meta": {
                    "title": "系统测试",
                    "icon": "el-icon-success",
                    "role": [
                        "admin"
                    ]
                }
            }
        ]
    }
]

module.exports = {
    asyncRoutes,
}