import { SITE_URL } from "../constants";

describe("Admin Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/");
  });
  it("Has Main Admin Navigation", () => {
    cy.get("main nav.admin")
      .first()
      .should("have.text", "AllProjectsUsersScenesConceptsEventsTagsAssets");
  });
});
