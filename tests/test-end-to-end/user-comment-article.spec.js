import { expect, test } from "playwright/test";
import login from "../helpers/login";
import { articlePage, homePage, navBar } from "../helpers/menu";

test("Should add a comment to an article successfully", async ({page}) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const username = process.env.USER_NAME;

    // Verify login
    await login(page)(email)(password);

    // Verify Profile tab on the head navbar visible
    await expect(page.locator(navBar.PROFILE_TAB).getByText(username)).toBeVisible();

    console.log('Login successful');

    // Verify Global Feed tab on the Home page visible
    await page.locator(homePage.GLOBAL_FEED_TAB).click();

    // Go to the specific artcile
    const baseURL = process.env.URL
    await page.goto(`${baseURL}article/article-comment`)

    // Verify the article page visible
    await expect(page.locator('h1').getByText('Article Comment')).toBeVisible();

    // Add a comment to the article
    const commentText = `This is a test comment at ${new Date().toISOString()}`;
    await page.locator(articlePage.COMMENT_FIELD).fill(commentText);

    // Verify post the comment
    await page.locator(articlePage.POST_COMMENT_BTN).click();

    // Verify that the comment is added and visible
    await expect(page.locator(articlePage.COMMENT_TEXT).getByText(commentText)).toBeVisible();

    console.log('Comment added successfully');
});