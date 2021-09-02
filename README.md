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
3. docker起動(port:3000が必要)
```
docker-compose up -d
```
4. dockerコンテナに入る
```
docker-compose exec node bash
```

## 機能

## 技術

バックエンド
1. Go1.16.2

フロントエンド
1. Vue
2. chakra-ui

インフラ
1. Cloud Build + Cloud Run
2. Cloud Firestore(NoSQL)
