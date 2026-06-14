import { test, expect } from "@playwright/test";
import { navigations, SOCIAL, SECTION_IDS, PROJECT_LINK } from "@/app/constants";

test.describe('Navigation, Social, and Project Links', () => {

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
    await expect(linkedin).toHaveAttribute('target', '_blank');

    const github = home.locator(`a[href="${SOCIAL.GITHUB}"]`);
    await expect(github).toBeVisible();
    await expect(github).toHaveAttribute('target', '_blank');

    const email = home.locator(`a[href="mailto:${SOCIAL.EMAIL}"]`);
    await expect(email).toBeVisible();
    await expect(email).toHaveAttribute('target', '_blank');
  });

  test('should have correct social links in the contact section', async ({ page }) => {
    const contact = page.locator(`section#${SECTION_IDS.CONTACT}`);
    await contact.scrollIntoViewIfNeeded();

    const email = contact.locator(`a[href="mailto:${SOCIAL.EMAIL}"]`);
    await expect(email).toBeVisible();
    await expect(email).toHaveAttribute('target', '_blank');

    const linkedin = contact.locator(`a[href="${SOCIAL.LINKEDIN}"]`);
    await expect(linkedin).toBeVisible();
    await expect(linkedin).toHaveAttribute('target', '_blank');

  });

  test('should have correct social links in the footer', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    const linkedin = footer.locator(`a[href="${SOCIAL.LINKEDIN}"]`);
    await expect(linkedin).toBeVisible();
    await expect(linkedin).toHaveAttribute('target', '_blank');

    const github = footer.locator(`a[href="${SOCIAL.GITHUB}"]`);
    await expect(github).toBeVisible();
    await expect(github).toHaveAttribute('target', '_blank');

    const email = footer.locator(`a[href="mailto:${SOCIAL.EMAIL}"]`);
    await expect(email).toBeVisible();
    await expect(email).toHaveAttribute('target', '_blank');
  });

  test('should have correct social links in the project section', async ({ page }) => {
    const projects = page.locator(`section#${SECTION_IDS.PROJECTS}`);
    await projects.scrollIntoViewIfNeeded();

    const osas = projects.locator(`a[href='${PROJECT_LINK.OSAS}']`);
    await expect(osas).toBeVisible();
    await expect(osas).toHaveAttribute('target', '_blank');

    const kubernetes = projects.locator(`a[href='${PROJECT_LINK.KUBERNETES}']`);
    await expect(kubernetes).toBeVisible();
    await expect(kubernetes).toHaveAttribute('target', '_blank');

    const recipeApp = projects.locator(`a[href='${PROJECT_LINK.RECIPE_APP}']`);
    await expect(recipeApp).toBeVisible();
    await expect(recipeApp).toHaveAttribute('target', '_blank');

    const flashcardApp = projects.locator(`a[href='${PROJECT_LINK.FLASHCARD_APP}']`);
    await expect(flashcardApp).toBeVisible();
    await expect(flashcardApp).toHaveAttribute('target', '_blank');

    const ccms = projects.locator(`a[href='${PROJECT_LINK.CCMS}']`);
    await expect(ccms).toBeVisible();
    await expect(ccms).toHaveAttribute('target', '_blank');

    const lms = projects.locator(`a[href='${PROJECT_LINK.LMS}']`);
    await expect(lms).toBeVisible();
    await expect(lms).toHaveAttribute('target', '_blank');
  });

});