import { SITE_URL } from "../constants";

describe("User Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/users");
  });
});
