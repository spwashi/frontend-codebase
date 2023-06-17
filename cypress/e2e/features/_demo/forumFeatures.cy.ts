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
    cy.get("section[data-feature-name=app--forum--can_exist]");
  });
  it("Has a Page for a List of Posts", () => {
    navigateToPostsPageViaNavbar();
    cy.get("section[data-feature-name=app--forum--can_have_posts]");
  });
  it("Has a Page for Specific Posts", () => {
    clickFirstPost();
    cy.get("section[data-feature-name=app--forum--can_view_post_pages]");
  });
  it("Has a Page for Comments", () => {
    navigateToCommentsPageViaNavbar();
    cy.get("section[data-feature-name=app--forum--can_have_comments]");
    clickFirstCommentPermalink();
    cy.get("section[data-feature-name=app--forum--can_view_comment_pages]");
  });
  it("Has Comment Permalinks", () => {
    clickFirstPost();
    clickFirstCommentPermalink();
    cy.get("section[data-feature-name=app--forum--can_permalink_comments]");
  });
  it("Has a Page for a List of Users", () => {
    navigateToUsersPage();
    cy.get("section[data-feature-name=app--forum--can_have_users]");
  });
  it("Has a Page for Logging In", () => {
    clickLoginLink();
    cy.get("section[data-feature-name=app--forum--can_login_as_user]");
  });
  it("Has a Page for Logging Out", () => {
    clickLogoutLink();
    cy.get("section[data-feature-name=app--forum--can_logout_as_user]");
  });
  it("Has a Page to Check Session Status", () => {
    clickSessionStatusLink();
    cy.get(
      "section[data-feature-name=app--forum--can_view_session_status_as_user]"
    );
  });
  it("Has a Page for User Profiles", () => {
    navigateToUsersPage();
    clickFirstLinkInUserElement();
    cy.get("section[data-feature-name=app--forum--can_view_user_profile]");
  });
});
