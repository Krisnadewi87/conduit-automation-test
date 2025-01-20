import { expect, test } from "@playwright/test";
import login from "../helpers/login";
import logout from "../helpers/logout";
import { homePage, navBar, newArticle } from "../helpers/menu";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

let testArticle = {
    articleTitle: `Article_${Date.now()}`,
    articleDescription: 'This is the description.',
    articleBody: 'This is the article body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis ultrices odio.',
    articleTags: 'test,automation,playwright',
};

test("Should create a new article successfully", async ({page}) => {

    // Verify login and navigate to the homepage
    await login(page)(email)(password);
    await expect(page.locator(homePage.YOUR_FEED_TAB)).toBeVisible();


    // Navigate to "New Article"
    await page.locator(navBar.NEW_ARTICLE_TAB).click();     

    // Fill in the "New Article" form
    await page.locator(newArticle.ARTICLE_TITLE).fill(testArticle.articleTitle);
    await page.locator(newArticle.ARTICLE_DESCRIPTION).fill(testArticle.articleDescription);
    await page.locator(newArticle.ARTICLE_BODY).fill(testArticle.articleBody);
    await page.locator(newArticle.ARTICLE_TAGS).fill(testArticle.articleTags);
        
    // Verify Publish the Article
    await page.locator(newArticle.PUBLISH_ARTICLE_BTN).click();
        
    // Verify that the article is published
    await page.waitForSelector('h1'); // Wait for the article title to appear
    const publishedTitle = await page.locator('h1').textContent();
    expect(publishedTitle).toBe(testArticle.articleTitle);
        
    console.log('Article published successfully');

    // Verify logout after test
    await logout(page); 
});

