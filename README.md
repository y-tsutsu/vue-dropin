# これは何？

Vue3のコンポーネントを既存のHTMLに組み込むサンプル

# ディレクトリ階層

```
vue-dropin
├─ vue-sdk
├─ index.html
└─ README.md
```

* vue-sdk  
  Vue3のコンポーネント．create-vueで生成したテンプレートをベースに今回の構成に合わせてエントリーポイントまわりを更新
* index.html  
  vue-sdkで開発したコンポーネントをHTMLで使用するサンプル

# Vue3側の開発

## 環境セットアップ

関連パッケージのインストール

```console
$ cd vue-dropin/vue-sdk
$ npm ci
```

## 実行

開発サーバで実行

```console
$ cd vue-dropin/vue-sdk
$ npm run dev
```

## ビルド（distディレクトリの生成）

コンポーネントの利用者に向けてトランスパイル

```console
$ cd vue-dropin/vue-sdk
$ npm run build
```

# 既存HTMLからの利用

## 事前準備

Vue側の開発環境でdistディレクトリを生成していること

## 利用方法

* `link`タグで`dist/main.css`を指定
* `script`タグで`dist/main.js`を指定
* JavaScriptコードでVueSdk.create()を呼び出してマウントする箇所のセレクタ（id）とオプションを指定
* VueSdk.create()の戻り値のインスタンス経由で公開関数を使ってオプションの再設定が可能

## サンプル

簡単な`index.html`をサンプルとして実装しているのでHTTPサーバを立てると確認できる

```console
$ cd vue-dropin
$ npm install -g http-server
$ http-server
```
