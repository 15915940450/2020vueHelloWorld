# 2020vueHelloWorld

## 部署

```
====部署流程
+ 1. npm install
+ 2. npm run test-build (测试: test-build,预发布: pre-build,正式: prod-build)
+ 3. www.yourwebsite.com 访问 /dist/ (/dist/index.html)
```

```
====服务端参考
+ Docker (Nginx): https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx
```

```
====分支
+ test
+ pre
+ prod
```


###### ...接部署

将dist移到Apache www下，打开 http://www.cantondist.com/ 访问

```
====gulp方式
+ 4. gulp
```

```
====dest方式
+ 4.npm run build-cantondist
[你可以在 vue.config.js 文件中计算环境变量。它们仍然需要以 VUE_APP_ 前缀开头。](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
```


### 开发
```
1. npm install
2. npm run serve (npm start)
```

+ 代码托管:
+ 项目原型:
+ UI:
+ 访问地址(测试):
+ 接口文档:
```
API
```

### words
Kwangtung,Canton,Tsingyuen,Linnam,Shumchun(Shamchun)

#### Kwangtung version

```
+ .eslintrc.js
+ .gitignore
+ README.md
+ package-lock.json
+ package.json
+ public/index.html
+ src/main.js
+ .env
+ .env.premode
+ .env.prodmode
+ .env.testmode
+ gulpfile.js
+ public/__img/
+ src/veri.scss
+ vue.config.js
```


#### WeChat 
```
@所有人
运维这边要求我们统一下打包的环境变量参数，大家以后按照这个来吧：
test对应测试环境， 
pre对应预发布环境， 
prod对应正式环境。

npm run test-build
npm run pre-build
npm run prod-build

+ 环境变量与模式: https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%A4%BA%E4%BE%8B%EF%BC%9Astaging-%E6%A8%A1%E5%BC%8F
+ npm run build (deleted)
```

### Customize configuration
见 [配置参考 Configuration Reference](https://cli.vuejs.org/zh/config/).


###### git
```
Git global setup
git config --global user.name "Thilina-Fang"
git config --global user.email "thilina.fang@immotor.com"

Create a new repository
git clone git@gitlab.ehuandian.net:root/__project.git
cd __project
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin git@gitlab.ehuandian.net:root/__project.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@gitlab.ehuandian.net:root/__project.git
git push -u origin --all
git push -u origin --tags
```


###### Node.js(nodejs.org)

+ 进程之 [命令行参数](https://nodejs.org/api/process.html#process_process_argv)


###### 备忘
```
1. 全局修改 2020vueHelloWorld
```

