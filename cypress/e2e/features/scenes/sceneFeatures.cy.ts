import { SITE_URL } from "../constants";

describe("Scene Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/scenes");
  });
});
