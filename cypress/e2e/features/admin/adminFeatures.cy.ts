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
  it("Has a link to Concepts; Concept Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Concepts").click();
    cy.contains("[this feature is not enabled: app--concepts]").should(
      "be.visible"
    );
  });
  it("Has a link to Events; Event Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Events").click();
    cy.contains("[this feature is not enabled: app--events]").should(
      "be.visible"
    );
  });
  it("Has a link to Projects; Project Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Projects").click();
    cy.contains("[this feature is not enabled: app--projects]").should(
      "be.visible"
    );
  });
  it("Has a link to Scenes; Scene Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Scenes").click();
    cy.contains("[this feature is not enabled: app--scenes]").should(
      "be.visible"
    );
  });
  it("Has a link to Tags; Tag Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Tags").click();
    cy.contains("[this feature is not enabled: app--tags]").should(
      "be.visible"
    );
  });
  it("Has a link to Users; User Features Are Not Enabled", () => {
    cy.get(".admin--nav").contains("a", "Users").click();
    cy.contains("[this feature is not enabled: app--users]").should(
      "be.visible"
    );
  });
});
