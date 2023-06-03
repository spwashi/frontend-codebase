import { SITE_URL } from "../constants";

describe("Tag Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/tags");
  });
});
