import goToPageURL from "./go-to-page-url";
import { navBar, signUpPage } from "./menu";

const baseURL = process.env.URL

const signUp = (page) => (username) => (email) => async (password) => {
    await goToPageURL(page)(`${baseURL}register`);
    await page.locator(navBar.SIGNUP_TAB).click();
    await page.locator(signUpPage.USERNAME_INPUT).fill(username);
    await page.locator(signUpPage.EMAIL_INPUT).fill(email);
    await page.locator(signUpPage.PASSWORD_INPUT).fill(password);
    await page.locator(signUpPage.SIGNUP_BUTTON).click();
};

export default signUp;