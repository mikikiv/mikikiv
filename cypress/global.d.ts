/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *
     * @param linkId the data-linkId attribute of the linkbutton
     * @param href expected href value
     */
    checkLinkButtonHref(linkId: string, href: string): Chainable<any>;
  }
}
