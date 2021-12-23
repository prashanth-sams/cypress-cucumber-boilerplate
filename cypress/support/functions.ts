export class Environments {

    getEnv() {
        const env = Cypress.env('ENV');
        switch (env) {
            case 'dev':
                return 'https://www.cypress.io';
            case 'qa':
                return 'https://www.google.com';
            default:
                return 'https://www.stackoverflow.com';
        }
    }

}
