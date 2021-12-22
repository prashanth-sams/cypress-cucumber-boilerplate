# Cypress | Cucumber Boilerplate
[![pull request lint](https://github.com/prashanth-sams/cypress-cucumber-boilerplate/actions/workflows/linter.yml/badge.svg)](https://github.com/prashanth-sams/cypress-cucumber-boilerplate/actions/workflows/linter.yml)

## Features
- [x] Page Object Pattern
- [x] Dockerize tests
- [x] Parallel testing using dockers
- [x] XHR
- [x] Hooks and Tags
- [x] Retries and Screenshots on failure
- [x] Dashboard supported slack notifier
- [x] TS Linter on git commit
- [x] Mocha HTML Report
- [x] Mocha XML Report
- [x] Allure Report

### Installation
```
sudo npm install -g yarn

yarn
```

### Test Runner

| Action          | Command             |
| --------------    | ---------          |
| Node test runner | `npm run tests`   |
| Yarn test runner | `yarn tests`   |
| Docker test runner | `docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.1.1` |
| Scale Docker containers for parallel testing | `docker-compose scale e2e=2` |
| Shell runner | `bash build.sh` |

### Cypress Launcher
```
npm run open
```

#### OPTIONAL

| Action          | Command             |
| --------------    | ---------          |
| husky initializer | `npx husky-init`   |
| linter on stagged git files | `yarn lint-staged`   |
| skip mandatory linter | `git commit -am '<message>' --no-verify` |
