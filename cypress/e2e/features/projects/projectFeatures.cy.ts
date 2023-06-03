import { SITE_URL } from "../constants";

describe("Project Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/projects");
  });
});
