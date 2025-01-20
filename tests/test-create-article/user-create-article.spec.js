import { expect, test } from "@playwright/test";
import login from "../helpers/login";
import { navBar, newArticle } from "../helpers/menu";
import { resetPage } from "../helpers/reset-page";

test("Create a New Article on Conduit Realworld Example App", async ({page}) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    // Verify login
    await login(page)(email)(password);

    // Verify New Article tab on the head navbar visible
    await page.locator(navBar.NEW_ARTICLE_TAB).click();

    // Fill in the "New Article" form
    const articleTitle = `Article_${Date.now()}`;
    const articleDescription = 'This is the description.';
    const articleBody = 'This is the article body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis ultrices odio.';
    const articleTags = 'test,automation,playwright';

    await page.locator(newArticle.ARTICLE_TITLE).fill(articleTitle);
    await page.locator(newArticle.ARTICLE_DESCRIPTION).fill(articleDescription);
    await page.locator(newArticle.ARTICLE_BODY).fill(articleBody);
    await page.locator(newArticle.ARTICLE_TAGS).fill(articleTags);

    // Verify Publish the Article
    await page.locator(newArticle.PUBLISH_ARTICLE_BTN).click();

    // Verify that the article is published
    await page.waitForSelector('h1'); // Wait for the article title to appear
    const publishedTitle = await page.locator('h1').textContent();
    expect(publishedTitle).toBe(articleTitle);

    console.log('Article published successfully');

    await resetPage(page);
});