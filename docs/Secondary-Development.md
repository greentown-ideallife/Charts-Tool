## 介绍

项目基于[Sketch webView插件开发](https://www.yuque.com/jingwhale/tool/qiu8hv)，功能参考[Kitchen](https://kitchen.alipay.com/)

## 项目目录结构
```
├── docs                   # 文档
├── src                    # Source directory
  ├── icons                   # 插件图标
  ├── plugins                 # sketch插件
       └── svg-insert.js        # sketch svg-insert插件
  ├── manifest.json           # 插件配置
  └── index.js                # 入口js
├── panel                  # web项目文件
  ├── config.js               # 存放相关页面配置项
  ├── scripts.js              # 全局公共方法类
  ├── src                     # Source directory
    ├── assets                  # jpg，icon, svg, font等静态资源
    ├── components              # UI公共组件
    ├── data                    # 初始化数据
    ├── layouts                 # 自定义全局依赖样式
    ├── models                  # model层
      ├── app.js                  # 公共model
    ├── page                    # 与项目相关的配置
      ├── router.js               # 页面路由配置
    ├── utils                   # 存放公共方法或公用js
    ├── app.js                  # 
    ├── global.css              # 根节点样式       
├── .editorconfig          # 编辑器配置
├── .gitignore             # 提交至git时，不需要提交的文件夹或文件
├── README.md              # 项目概况
└── package.json           # sketch插件包依赖
 ```
## 安装

  #### 在最外层目录(安装插件依赖)

  ```
  npm i 或者 yarn
  ```
  #### 进入panel目录(安装web项目依赖)
  ```
  cd panel && npm i 或者 yarn
  ```
## 启动
  #### 启动web项目,在根目录下执行
  ```
  npm start
  ```
  #### 同时启动web和sketch插件
  ```
  npm run start:all
  ```

## 构建
  > 此项目中sketch打开webview的url是以外链的方式打开。若要本地部署，需在本地服务器部署静态资源dist并修改`src/index.js`中的链接配置指向该地址。
  #### 同时构建sketch插件和web
  ```
  npm run build
  ```
  #### 构建sketch插件,构建完成之后在文件中打开ChartsTool.sketchplugin即为sketch插件
  ```
  npm run build:plugin
  ```
  #### 构建web
  ```
  npm run build:panel
  ```

