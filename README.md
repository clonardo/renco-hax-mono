# Gilead HIV Hackathon App Monorepo

This is a an Nx monorepo containing the frontend (web + mobile) and backend components for submission to the Gilead HIV Hackathon

## Projects

At present, the following Nx projects are set up:

### Core Executables

| Name              | Purpose                     | App/Lib | Debug Port | Notes                               |
| ----------------- | --------------------------- | :-----: | :--------: | ----------------------------------- |
| **fe-mobile**     | Ionic React mobile frontend |   App   |    N/A     | default frontend                    |
| **fe-mobile-e2e** | Tests for mobile UI         |   App   |    N/A     | Not implemented 🤷‍♀️                  |
| **backend-api**   | Core backend services       |   App   |    8771    | Launch in dev mode before attaching |

---

### Shared Libs

| Name               | Purpose                                                     | App/Lib | Debug Port | Notes       |
| ------------------ | ----------------------------------------------------------- | :-----: | :--------: | ----------- |
| **shared-backend** | Basic contracts + NestJS utils, etc.                        |   Lib   |    N/A     | In progress |
| **shared-ui**      | Shared UI resources                                         |   Lib   |    N/A     | In progress |
| **common-utils**   | Assorted utils that aren't tightly-coupled to React or Nest |   Lib   |    N/A     | -           |

---

## Prerequisites

- Node.js 12.x
- yarn 1.x
- Android Studio (if making a production Android build)

## Developing

Using a terminal, navigate to the root of this repo, and follow the steps below:

- Install dependencies with `yarn`
- Run `yarn mobile`, which will launch the UI on http://localhost:4200
- Run `yarn api`, which will launch the backend server on http://localhost:3333 (or whatever port $PORT is set to)
