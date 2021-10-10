import { getGreeting } from '../support/app.po';

describe('demo', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit('/');
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to demo!');
  });

  it('should display viewport dimensions', () => {
    cy.get(`[data-testid=app]`).contains('1024px / 768px');
  });
});
