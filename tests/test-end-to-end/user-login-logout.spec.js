import { expect, test } from "@playwright/test";
import login from "../helpers/login";
import { navBar } from "../helpers/menu";
import logout from "../helpers/logout";


test("Should Login and Logout successfully", async ({page}) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const username = process.env.USER_NAME;

    // Verify Login
    await login(page)(email)(password);

    // Verify Profile tab on the head navbar visible
    await expect(page.locator(navBar.PROFILE_TAB).getByText(username)).toBeVisible();

    // Verify New Article tab on the head navbar visible
    await expect(page.locator(navBar.NEW_ARTICLE_TAB)).toBeVisible();

    console.log(`Login successfull for user: ${username}`);

    // Verify Logout
    await logout(page);

    // Verify logout successful by checking the presence of the "Login" tab button
    await expect(page.locator(navBar.LOGIN_TAB)).toBeVisible();

    console.log(`Log out successful`);
});