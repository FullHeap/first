const asyncRoutes = [
    {
        "path": "/system",
        "name": 'SystemIndex',
        "component": "system",
        "meta": {
            "title": "系统管理",
            "icon": "el-icon-setting",
            "role": [
                "admin"
            ]
        },
        "children": [
            {
                "path": "role",
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
                "path": "user",
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
                "path": "menu",
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
                "path": "trans",
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
                "path": "test",
                "component": "system/home",
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
        "path": "/system",
        "component": "system",
        "meta": {
            "title": "组件测试",
            "icon": "el-icon-s-tools",
            "role": [
                "admin"
            ]
        },
        "children": [
            {
                "path": "multimenu",
                "component": "system/home",
                "meta": {
                    "title": "多级菜单",
                    "icon": "el-icon-s-opportunity",
                    "role": [
                        "admin"
                    ]
                },
                "children": [
                    {
                        "path": "editor",
                        "component": "system/home",
                        "meta": {
                            "title": "富文本编辑器",
                            "icon": "el-icon-s-opportunity",
                            "role": [
                                "admin"
                            ]
                        }
                    },
                    {
                        "path": "markdown",
                        "component": "system/home",
                        "meta": {
                            "title": "markdown编辑器",
                            "icon": "el-icon-s-opportunity",
                            "role": [
                                "admin"
                            ]
                        }
                    }
                ]
            },
            {
                "path": "tables",
                "component": "system/home",
                "meta": {
                    "title": "表格组件",
                    "icon": "el-icon-s-opportunity",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "trees",
                "component": "system/home",
                "meta": {
                    "title": "树组件",
                    "icon": "el-icon-s-opportunity",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "icon",
                "component": "system/home",
                "meta": {
                    "title": "自定义图标",
                    "icon": "el-icon-s-opportunity",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "charts",
                "component": "system/home",
                "meta": {
                    "title": "schart图表",
                    "icon": "el-icon-s-opportunity",
                    "role": [
                        "admin"
                    ]
                }
            }
        ]
    },
    {
        "path": "/system",
        "component": "system",
        "meta": {
            "title": "错误处理",
            "icon": "el-icon-error",
            "role": [
                "admin"
            ]
        },
        "children": [
            {
                "path": "403",
                "component": "403",
                "meta": {
                    "title": "403页面",
                    "icon": "el-icon-circle-close",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "500",
                "component": "500",
                "meta": {
                    "title": "500页面",
                    "icon": "el-icon-circle-close",
                    "role": [
                        "admin"
                    ]
                }
            },
            {
                "path": "404",
                "component": "404",
                "meta": {
                    "title": "404页面",
                    "icon": "el-icon-circle-close",
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