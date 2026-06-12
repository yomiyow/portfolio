import { test, expect } from "@playwright/test";
import { navigations, SOCIAL, SECTION_IDS } from "@/app/constants";

test.describe('Navigation and Social Links', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to different sections when clicking nav links', async ({ page }) => {
    for (const { label } of navigations) {
      await page.getByRole('link', { name: label }).click();

      if (label === 'Home') {
        await expect(page.getByText("Hello, I'm Romeo")).toBeVisible();
      } else {
        await expect(page.getByRole('heading', { name: label })).toBeInViewport();
      }
    }
  });

  test('should have correct social links in the home section', async ({ page }) => {
    const home = page.locator(`section#${SECTION_IDS.HOME}`);
    await home.scrollIntoViewIfNeeded();

    const linkedin = home.locator(`a[href="${SOCIAL.LINKEDIN}"]`);
    await expect(linkedin).toBeVisible();

    const github = home.locator(`a[href="${SOCIAL.GITHUB}"]`);
    await expect(github).toBeVisible();

    const email = home.locator(`a[href="mailto:${SOCIAL.EMAIL}"]`);
    await expect(email).toBeVisible();
  });

  test('should have correct social links in the contact section', async ({ page }) => {
    const contact = page.locator(`section#${SECTION_IDS.CONTACT}`);
    await contact.scrollIntoViewIfNeeded();

    const email = contact.locator(`a[href="mailto:${SOCIAL.EMAIL}"]`);
    await expect(email).toBeVisible();

    const linkedin = contact.locator(`a[href="${SOCIAL.LINKEDIN}"]`);
    await expect(linkedin).toBeVisible();

  });

  test('should have correct social links in the footer', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    const linkedin = footer.locator(`a[href="${SOCIAL.LINKEDIN}"]`);
    await expect(linkedin).toBeVisible();

    const github = footer.locator(`a[href="${SOCIAL.GITHUB}"]`);
    await expect(github).toBeVisible();

    const email = footer.locator(`a[href="mailto:${SOCIAL.EMAIL}"]`);
    await expect(email).toBeVisible();
  });
});