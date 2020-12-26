/// <reference types="cypress" />

context("App load and navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("auto navigate to /dashboard when home page opens", () => {
    cy.url().should("include", "/dashboard"); // auto navigate to /dashboard
    
  });
  it("Number of Data drop down should be visible ", () => {
    cy.get("#dropdown-menu-align-right").should("be.visible");
  });

  it("Number of Data drop down should functional ", () => {
    cy.get("#dropdown-menu-align-right").click();
    cy.get(".dropdown-item").should("be.visible").should("have.length", 9);
    cy.screenshot();
    cy.get(".dropdown-item").eq(5).click();
    cy.get("#dropdown-menu-align-right").contains("1200");
    cy.screenshot();
  });

  it("Chart controls should work ", () => {
    cy.get(".highcharts-button").eq(0).click();
    cy.wait(500);
    cy.screenshot();
    cy.get(".highcharts-button").eq(1).click();
    cy.wait(500);
    cy.screenshot();
    cy.get(".highcharts-button").eq(2).click();
    cy.wait(500);
    cy.screenshot();
    cy.get(".highcharts-button").eq(3).click();
    cy.wait(500);
    cy.screenshot();
    cy.get(".highcharts-button").eq(4).click();
    cy.wait(500);
    cy.screenshot();
  });

  it("Chart Page Navigation", () => {
    cy.get(".nav-link").eq(1).click();
    cy.url().should("include", "/chart");
    cy.wait(500);
    cy.screenshot();
  });
});
