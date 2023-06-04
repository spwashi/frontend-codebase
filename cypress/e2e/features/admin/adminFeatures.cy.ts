import { adminRoutes, getAbsoluteUrl } from "../../../__generated__/routes";

describe("Admin Features Are Grounded", () => {
  beforeEach(() => {
    cy.visit(getAbsoluteUrl(adminRoutes.all));
  });
  it("Has a link to Assets; Asset Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Assets").click();
    cy.contains("[this feature is not enabled: app--assets]").should(
      "be.visible"
    );
  });
});
