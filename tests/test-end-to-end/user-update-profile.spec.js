import test, { expect } from "playwright/test";
import { navBar, profilePage } from "../helpers/menu";
import { resetPage } from "../helpers/reset-page";
import signUp from "../helpers/sign-up";

test("Should update profile successfully", async ({page}) => {
    const email = `user_${Date.now()}@gmail.com`;  // Generating random email using current timestamp
    const password = 'test123';
    const username = `User_${Date.now()}`; // Random username using timestamp
    const newProfileData = {
        image: 'https://tangselpos.id/storage/2023/01/cinta-laura-enjoy-diusia-30-tahun-belum-menikah-02012023-141034.jpg', // New profile image URL
        username: `UserUpdated_${Date.now()}`, // Random new username
        bio: 'Updated Bio! There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
        email: email, // Random new email
        password: password,
    };

    // Verify login
    await signUp(page)(username)(email)(password);

    // Verify Profile tab on the head navbar visible
    const profileDropdown = navBar.PROFILE_TAB;
    await expect(page.locator(profileDropdown).getByText(username)).toBeVisible();

    // Go to profile page
    await page.locator(profileDropdown).click();
    await page.locator(navBar.DROPDOWN_SETTINGS_BTN).click();

    // Verify Profile page visible
    const usernameField = page.locator(profilePage.USERNAME_INPUT);
    await expect(usernameField).toHaveValue(username);

    // Verify update the profile information
    await page.locator(profilePage.IMAGE_INPUT).fill(newProfileData.image); // update the profile picture
    await page.locator(profilePage.USERNAME_INPUT).fill(newProfileData.username); // update the username
    await page.locator(profilePage.BIO_INPUT).fill(newProfileData.bio); // update the bio
    await page.locator(profilePage.EMAIL_INPUT).fill(newProfileData.email); // update email
    await page.locator(profilePage.PASSWORD_INPUT).fill(newProfileData.password); // update password

    // Verify submit the update
    await page.locator(profilePage.UPDATE_SETTING_BTN).click();

    // Verify that the changes are saved
    await resetPage(page);
    await page.waitForTimeout(5000); // 10000 ms = 5 seconds

    await page.locator(navBar.PROFILE_TAB).click();
    await page.locator(navBar.DROPDOWN_PROFILE_BTN).click();

    const displayedUsername = await page.locator(profilePage.UPDATED_USERNAME).textContent();
    expect(displayedUsername.trim()).toBe(newProfileData.username);
  
    const displayedBio = await page.locator(profilePage.UPDATED_BIO).textContent();
    expect(displayedBio.trim()).toBe(newProfileData.bio);
  
    console.log('Profile updated successfully');
});
