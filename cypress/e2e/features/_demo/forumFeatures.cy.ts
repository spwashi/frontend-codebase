import { forumRoutes, getAbsoluteUrl } from "../../../__generated__/routes";

function clickFirstPost() {
  navigateToPostsPageViaNavbar();
  cy.get(".forum-post a").first().click();
}
function clickFirstCommentPermalink() {
  cy.contains("a", "[permalink comment]").first().click();
}
function navigateToUsersPage() {
  cy.contains("a", "Users").first().click();
  cy.location("pathname").should("include", "forum/users");
}
function clickLoginLink() {
  cy.contains("a", "Log In").first().click();
}
function clickLogoutLink() {
  cy.contains("a", "Log Out").first().click();
}
function clickSessionStatusLink() {
  cy.contains("a", "Status").first().click();
}
function navigateToPostsPageViaNavbar() {
  cy.contains("a", "Posts").first().click();
  cy.location("pathname").should("include", "forum/posts");
}
function navigateToCommentsPageViaNavbar() {
  cy.contains("a", "Comments").first().click();
  cy.location("pathname").should("include", "forum/comments");
}
function clickFirstLinkInUserElement() {
  cy.get(".forum-user a").first().click();
}
describe("Forum Features", () => {
  beforeEach(() => {
    cy.visit(getAbsoluteUrl(forumRoutes.root));
  });

  it("Has a Forum Feature", () => {
    cy.get("section[data-feature-name=app--forum]");
  });
  it("Has a Page for a List of Posts", () => {
    navigateToPostsPageViaNavbar();
    cy.get("section[data-feature-name=app--forum--posts]");
  });
  it("Has a Page for Specific Posts", () => {
    clickFirstPost();
    cy.get("section[data-feature-name=app--forum--single-post]");
  });
  it("Has a Page for Comments", () => {
    navigateToCommentsPageViaNavbar();
    cy.get("section[data-feature-name=app--forum--comments]");
    clickFirstCommentPermalink();
    cy.get("section[data-feature-name=app--forum--comment-route]");
  });
  it("Has Comment Permalinks", () => {
    clickFirstPost();
    clickFirstCommentPermalink();
    cy.get("section[data-feature-name=app--forum--permalinkedComment]");
  });
  it("Has a Page for a List of Users", () => {
    navigateToUsersPage();
    cy.get("section[data-feature-name=app--forum--users]");
  });
  it("Has a Page for Logging In", () => {
    clickLoginLink();
    cy.get("section[data-feature-name=app--forum--login]");
  });
  it("Has a Page for Logging Out", () => {
    clickLogoutLink();
    cy.get("section[data-feature-name=app--forum--logout]");
  });
  it("Has a Page to Check Session Status", () => {
    clickSessionStatusLink();
    cy.get("section[data-feature-name=app--forum--session-status]");
  });
  it("Has a Page for User Profiles", () => {
    navigateToUsersPage();
    clickFirstLinkInUserElement();
    cy.get("section[data-feature-name=app--forum--user-profile]");
  });
});
