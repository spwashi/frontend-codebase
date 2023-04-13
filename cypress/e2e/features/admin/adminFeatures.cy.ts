import {SITE_URL} from '../constants';

describe('Admin Features', () => {
  beforeEach(() => {
    cy.visit(SITE_URL + 'admin/')
  });
  it('displays two todo items by default', () => {
    cy.get('main nav.admin').first().should('have.text', 'AllProjectsUsersScenesConceptsEventsTagsAssets')
  })
});