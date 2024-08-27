import { test, expect } from '@playwright/test';


// Our application has features enabled via toggles. We have tests for feature A in 1 describe
// and feature B in another describe. These different configurations scenarios get deployed in parallel,
// and we'd like to use these configuration names as tags to ensure all relevant tests are executed, and only the relevant tests.


test.describe('These tests all pertain to scenarios with feature A enabled and ensure the application', 
  { tag: [
    '@scenario-with-feature-A',      // This is a scenario of our application under test with feature A enabled
    '@scenario-with-feature-A-and-B' // This is a scenario of our application under test with both features A and B enabled
  ]}, () => {
    
    test('has a behavior specific to feature A', 
      { tag: [
        '@test-number-123' // This is a tag so we can integrate this test into our testing system
      ]},
      async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    });
    
    test('has another behavior specific to feature A', 
      { tag: [
        '@test-number-456' // This is a tag so we can integrate this test into our testing system
      ]},
      async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      // Click the get started link.
      await page.getByRole('link', { name: 'Get started' }).click();
    
      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
    
  }
)

test.describe('These tests all pertain to scenarios with feature B enabled and ensure the application', 
  { tag: [
    '@scenario-with-feature-B',      // This is a scenario of our application under test with feature A enabled
    '@scenario-with-feature-A-and-B' // This is a scenario of our application under test with both features A and B enabled
  ]}, () => {
    
    test('has a behavior specific to feature B', 
      { tag: [
        '@test-number-789' // This is a tag so we can integrate this test into our testing system
      ]},
      async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    });
    
    test('has another behavior specific to feature B', 
      { tag: [
        '@test-number-101' // This is a tag so we can integrate this test into our testing system
      ]},
      async ({ page }) => {
      await page.goto('https://playwright.dev/');
    
      // Click the get started link.
      await page.getByRole('link', { name: 'Get started' }).click();
    
      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
    
  }
)