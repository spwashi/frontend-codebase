import { SITE_URL } from "../constants";

describe("Asset Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/assets");
  });
});
