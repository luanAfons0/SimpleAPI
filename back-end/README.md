<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
# SimpleDash

A lightweight CMS designed to simplify the management of **products**, **clients**, and **orders**.  
Built with modern technologies to provide flexibility, scalability, and ease of use.

---

## 🚀 Features

- Manage **products, clients, and orders** with a simple interface.
- **NestJS** backend for structured and scalable development.
- **MikroORM** for database management.
- **MySQL** as the relational database.
- **Kottster** integration for a ready-to-use admin panel.
- **Swagger** documentation at `/swagger`.
- **Compodoc** documentation available at [http://localhost:8080](http://localhost:8080).
- Database schema (`.DBML`) and system requirements in the `docs/` folder.

---

## 🛠️ Technologies

- [NestJS](https://nestjs.com/)
- [MikroORM](https://mikro-orm.io/)
- [MySQL](https://www.mysql.com/)
- [Kottster](https://kottster.app/)

---

## 📦 Installation & Setup

### Clone the repository

```console
git clone https://github.com/luanAfons0/SimpleDash.git
cd SimpleDash
```

### Running locally (without Docker)

Install dependencies:

```console
npm install
```

Start the application:

- Development

```console
npm run start:dev
```

- Production

```console
npm run start:prod
```

- Documentation

```console
npm run compodoc
```

---

## 📖 Documentation

- **API Docs (Swagger)** → [http://localhost:3000/swagger](http://localhost:3000/swagger)
- **Compodoc** → [http://localhost:8080](http://localhost:8080)
- **Database Schema & Requirements** → check the `docs/` folder.

---

## 🤝 Contributing

Contributions are welcome!  
Please open an issue or submit a pull request with improvements.

---

## 📄 License

This project is licensed under the **MIT License**.
