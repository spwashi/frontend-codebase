import { forumRoutes, getAbsoluteUrl } from "../../../__generated__/routes";

describe("Forum Features", () => {
  beforeEach(() => {
    cy.visit(getAbsoluteUrl(forumRoutes.root));
  });

  it("Has a Page for a List of Posts", () => {
    cy.contains("a", "Posts");
  });
  it("Has a Page for Specific Posts", () => {
    cy.contains("a", "View Post");
  });
  it("Has Comment Permalinks", () => {
    cy.contains("a", "Permalink Comment");
  });
  it("Has a Page for User Profiles", () => {
    cy.contains("a", "View Profile");
  });
  it("Has a Page for Logging In", () => {
    cy.contains("a", "Log in");
  });
  it("Has a Button for Logging Out", () => {
    cy.contains("a", "Log out");
  });
  it("Has a Widget to Check Session Status", () => {
    cy.contains("a", "Check session status");
  });
});
