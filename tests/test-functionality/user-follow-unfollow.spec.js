import { test, expect } from "@playwright/test";
import login from "../helpers/login";
import { navBar, newArticle, profilePage } from "../helpers/menu";


test("Should follow and unfollow a user and verify counts", async ({ page }) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const username = process.env.USER_NAME;
    const baseURL = process.env.URL

    // Verify login
    await login(page)(email)(password);

    // Verify Profile tab on the head navbar visible
    await expect(page.locator(navBar.PROFILE_TAB).getByText(username)).toBeVisible();

    console.log('Login successful');

    // Navigate to the target article
    await page.goto(`${baseURL}article/follow-unfollow-test`)

    // Reload the page
    await page.reload();

    // Step 2: Click on the author’s profile from the article page
    await page.locator(newArticle.PROFILE_BANNER).click();
    const followButton = page.locator("//button[@class='btn btn-sm action-btn ']");
    await expect(followButton).toBeVisible();

    // Log button text for debugging
    const buttonText = await followButton.textContent();
    console.log(`Button text before click: ${buttonText}`);

    // Extract initial count
    const match = buttonText.match(/\d+/);
    if (!match) {
        throw new Error(`No number found in button text: ${buttonText}`);
    }
    const initialCount = parseInt(match[0], 10);
    console.log(`Initial count: ${initialCount}`);

    // Click the button
    await followButton.click();

    // Wait for the count to update
    await page.waitForFunction(
        (button, initial) => {
            const text = button.textContent;
            const match = text.match(/\d+/);
            if (!match) return false;
            const currentCount = parseInt(match[0], 10);
            return currentCount > initial;
        },
        followButton,
        initialCount
    );

    // Log updated button text
    const updatedText = await followButton.textContent();
    console.log(`Button text after click: ${updatedText}`);

    // Extract and verify updated count
    const updatedMatch = updatedText.match(/\d+/);
    if (!updatedMatch) {
        throw new Error(`No number found in updated button text: ${updatedText}`);
    }
    const updatedCount = parseInt(updatedMatch[0], 10);
    console.log(`Updated count: ${updatedCount}`);

    expect(updatedCount).toBe(initialCount + 1);


    
    // Step 3: Capture initial followers count
    // initialFollowersCount = await getFollowersCount(page);


//   // Wait for user info and verify the initial followers count
//   await page.waitForSelector('.user-info .text-secondary', { timeout: 60000 });
//   const initialFollowersCount = parseInt(
//     (await page.locator('.user-info .text-secondary').textContent()).trim(),
//     10
//   );

    
//     const followButton = page.locator(profilePage.FOLLOW_BTN);
//     await expect(followButton).toBeVisible(); // Verifies the button is visible
//     await followButton.click(); // Performs the follow/unfollow action

// // Follow the user
// await page.locator('.btn.btn-sm.btn-outline-secondary').click();
// await page.waitForTimeout(2000); // Give time for the count to update



//     // Step 4: Follow the user
//     await page.locator("button:has-text('Follow')").click();

//     // Verify the button text changes to 'Unfollow'
//     await expect(page.locator("button:has-text('Unfollow')")).toBeVisible();

//     // Verify followers count increases by 1
//     const updatedFollowersCount = await getFollowersCount(page);
//     expect(updatedFollowersCount).toBe(initialFollowersCount + 1);

//     // Step 5: Unfollow the user
//     await page.locator("button:has-text('Unfollow')").click();

//     // Verify the button text changes back to 'Follow'
//     await expect(page.locator("button:has-text('Follow')")).toBeVisible();

//     // Verify followers count decreases by 1
//     const finalFollowersCount = await getFollowersCount(page);
//     expect(finalFollowersCount).toBe(initialFollowersCount);

//     console.log("Follow/Unfollow test completed successfully");
});
