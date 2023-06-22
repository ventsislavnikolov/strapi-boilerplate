---
title: Strapi
description: A self-hosted version of Strapi using a Postgres database
tags:
  - strapi
  - postgresql
  - cms
  - javascript
---

# Strapi boilerplate

This example deploys self-hosted version of [Strapi](https://strapi.io/). Internally it uses a
PostgreSQL database to store the data.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/strapi?referralCode=milo)

## ✨ Features

- Strapi
- Postgres
- ESLint
- Prettier
- Husky
- Lint Staged
- Commit Lint
- Conventional Commits
- Semantic Release
- Automatic ChatGPT Code Review
- Dependabot
- Yarn

## Requirements

1. Node.js
2. yarn
3. Visual Studio Code or any other IDE
4. ESLint for Visual Studio Code (or any other IDE with ESLint support)
5. Prettier for Visual Studio Code (or any other IDE with Prettier support)

## 💁‍♀️ How to use

- Click the Railway button 👆
- Add the environment variables
  - If you do not add the Cloudinary related environment variables, your images/files will not be
    persisted between deploys.

## 📝 Notes

- After your app is deployed, visit the `/admin` endpoint to create your admin user.
- Railway's filesystem is ephemeral which is why any changes to the filesystem are not persisted
  between deploys. This is why, this example uses Cloudinary for storage.
