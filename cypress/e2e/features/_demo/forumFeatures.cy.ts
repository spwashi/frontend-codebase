import { forumRoutes, getAbsoluteUrl } from "../../../__generated__/routes";

describe("Forum Features Are Grounded", () => {
  beforeEach(() => {
    cy.visit(getAbsoluteUrl(forumRoutes.root));
  });
  it("Has a link to Posts", () => {
    cy.contains("a", "Posts");
  });
});
