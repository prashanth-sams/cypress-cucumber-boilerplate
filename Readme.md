# Cypress | Cucumber Boilerplate

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
npm install
```

### Test Runner
```
npm run tests
```
> Docker
```
docker run -it -v $PWD:/e2e -w /e2e cypress/included:5.5.0
```
> Scale Docker containers for parallel testing
```
docker-compose scale e2e=2
```
or
```
bash build.sh
```

### Launcher
```
npm run open
```