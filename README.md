# popular_vue

[popular](https://github.com/keigooba/popular)をVueでSPA化<br />
コンポーネント分割はatomic designを採用

サイト URL:

## 概要

概要は[popular](https://github.com/keigooba/popular)に記載

## 初期設定


## 開発環境
docker version 20.10.6が必要。なければ下記URLからダウンロード。<br />
https://hub.docker.com/

localhostで起動・dockerコンテナ内確認
1. gitリポジトリをクローンする
```
git clone https://github.com/keigooba/popular_SPA.git
```
2. dockerをビルド
```
docker-compose build
```
3. なぜか依存関係でエラーが起きるので、npmを再インストール
```
rm -rf node_modules package-lock.json && npm install
```
4. docker起動(port:3000が必要)
```
docker-compose up -d
```
5. dockerコンテナに入る
```
docker-compose exec node bash
```

## 機能

## 技術

バックエンド
1. Go1.16.2

フロントエンド
1. Vue2
2. chakra-ui

インフラ
1. Cloud Build + Cloud Run
2. Cloud Firestore(NoSQL)

## 学習記録

1. Vue.js入門決定版！jQuery を使わない Web 開発 - 導入からアプリケーション開発まで体系的に動画で学ぶ (https://www.udemy.com/share/101YM03@7bucuxRdvgmiZCTaHVXa5Qc1WAHJufx4cGy4GrBzmC42FUWz0289DWrfIK5OWzRzIA==/ ) 8月16日~8月29日修了
