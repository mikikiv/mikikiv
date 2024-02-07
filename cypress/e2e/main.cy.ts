describe('template spec', () => {
  before(() => {
    cy.visit('/');
  });
  const topLinks = [
    { name: 'GitHub', href: 'https://github.com/mikikiv' },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mikeyvillavicencio',
    },
    { name: 'Substack', href: 'https://substack.com/@mikikiv' },
    { name: 'Email', href: 'mailto:villavicem@gmail.com' },
  ];
  it('has the expected page top data', () => {
    cy.get('h1').should('contain', 'Mikey Villavicencio');
    cy.get('img[alt="Mikey Villavicencio"]')
      .invoke('attr', 'src')
      .as('imageSource');
    cy.request('@imageSource').should('have.property', 'status', 200);
    topLinks.forEach(link => {
      cy.checkLinkButtonHref(link.name, link.href);
    });
  });

  it('has the expected website examples', () => {
    cy.get('.siteCard').should('have.length', 5);
  });

  it('can update from dark to light mode', () => {
    cy.get('#colorSwitcher').click();
    cy.get('body').should('have.class', 'chakra-ui-light');
  });

  it('can view the pdf viewer', () => {
    cy.get('button').contains('View Resume').click();
    cy.contains('Loading PDF').should('exist');
    cy.get('.react-pdf__Page__canvas').should('exist');
    cy.wait(300);
    cy.contains('Loading PDF').should('not.exist');
    cy.get('button').contains('Next Page').click();
    cy.get('button').contains('Previous Page').click();
    cy.get('[aria-label="close"]').click();
    cy.get('.react-pdf__Page').should('not.exist');
  });
});

