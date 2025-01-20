import { expect, test } from "playwright/test";
import signUp from "../helpers/sign-up";
import { homePage, navBar } from "../helpers/menu";


test("Register a new user on Conduit Realworld Example App", async ({page}) => {
    const username = `user_${Date.now()}`;
    const email = `test_${Date.now()}@example.com`;
    const password = 'password123';

    // regist new user
    await signUp(page)(username)(email)(password);

    // Verify Profile tab on the head navbar visible
    await expect(page.locator(navBar.PROFILE_TAB).getByText(username)).toBeVisible();

    // Verify Your Feed tab on the home page visible
    await expect(page.locator(homePage.YOUR_FEED_TAB)).toBeVisible();

    console.log(`User registered successfully: ${username} | ${email}`);
});