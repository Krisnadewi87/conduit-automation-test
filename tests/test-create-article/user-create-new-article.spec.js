import { expect, test } from "@playwright/test";
import login from "../helpers/login";
import logout from "../helpers/logout";


test.describe("Create a New Article on Conduit Realworld Example App", () => {
    let page;

    test.beforeAll("Login to the system", async ({ browser }) => {
        page = await browser.newPage();
        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;
        // Verify login
        await login(page)(email)(password);
    });

    test.afterAll("Logout from the system", async () => {
        // Verify logout
        await logout(page);
        await page.close();
    });

    test.beforeEach("Go to New Article page", async () => {
        // Ensure starting at the homepage before each test

    });
});