import { SITE_URL } from "../constants";

describe("Event Features", () => {
  beforeEach(() => {
    cy.visit(SITE_URL + "admin/events");
  });
});
