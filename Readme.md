# Cypress | Cucumber Boilerplate

## Features
- [x] TS Linter on git commit
- [x] Page Object Pattern
- [x] Mocha HTML Report
- [x] Mocha XML Report
- [x] Allure Report
- [x] Retries and Screenshots on failure
- [x] Hooks and Tags
- [x] Dockerize tests
- [x] Parallel testing using dockers
- [x] Dashboard supported slack notifier
- [x] Percy for Visual testing

### Installation
```
npm install
```

### Test Runner
```
npm run tags
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