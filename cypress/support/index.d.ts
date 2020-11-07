/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        listenRoute(type: string, url: string, alias: string): Chainable<any>
    }
}