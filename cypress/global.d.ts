/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @param linkid the data-linkid attribute of the linkbutton
     * @param href expected href value
     */
    checkLinkButtonHref(linkid: string, href: string): Chainable<any>;
  }
}
