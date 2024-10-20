# Login, Collection and Cart page

This project was built as a part of a task to implement an app with login and cart collection page. It is built using Vite and React. Below are the instructions for setting up the project.

## Prerequisites

- You need Node.js and npm installed. The current project uses:
  - Node.js: `v20.18.0`
  - npm: `10.8.2`

## Installation

```bash
git clone https://github.com/vukovuko/login-and-cart.git
cd login-and-cart
npm install
npm run dev
```

and then visit [http://localhost:3000](http://localhost:3000).

You can also use docker

```bash
git clone https://github.com/vukovuko/login-and-cart.git
cd login-and-cart
docker build . -t login-and-cart-dev:latest
docker run -dp 3000:3000 login-and-cart-dev:latest
```

app will be available at [http://localhost:3000](http://localhost:3000)

## Credentials to login
- Username: `admin@example.com`
- Password: `admin`

<b>Note: Tested on Windows 11 and WSL2 Ubuntu 22.04.</b>
