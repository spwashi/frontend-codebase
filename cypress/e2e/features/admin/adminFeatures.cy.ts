import { adminRoutes, getAbsoluteUrl } from "../../../__generated__/routes";

describe("Admin Features", () => {
  beforeEach(() => {
    cy.visit(getAbsoluteUrl(adminRoutes.all));
  });
  it("Has Main Admin Navigation", () => {
    cy.get("main nav.admin")
      .first()
      .should("have.text", "AllProjectsUsersScenesConceptsEventsTagsAssets");
  });
});
