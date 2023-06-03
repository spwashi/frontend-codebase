import { SITE_URL } from "../constants";

describe("Concept Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/concepts");
  });
});
