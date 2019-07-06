# vue-template
・TypeScript  
・VS Code によるデバッグ  
## 事前準備
１．node.js（npm）のインストール  
２．yarn global add yarn  
３．yarn global add @vue/cli  
４．yarn global add @vue/cli-service-global  
５．VS Code のインストール  
６．VS Code（Debugger for Chrome）のインストール  

## VS Code 設定の共通化
### 状況  
VS Codeの設定は settings.json に書き込まれます。
公式ドキュメントによると、次の場所に配置されるようです。
```
%APPDATA%\Code\User\settings.json
```
### 方法 (1)
上記フォルダへのシンボリックリンクを作成
```
mklink /d %AppData%\Code\User {VS Code ディレクトリの場所}
```
### 方法 (2)
Settings Sync プラグインを利用する。
```
https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
