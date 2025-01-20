import goToPageURL from "./go-to-page-url";
import { LOGIN_BUTTON, navBar, signUpPage } from "./menu";

const baseURL = process.env.URL

const login = (page) => (email) => async (password) => {
    await goToPageURL(page)(`${baseURL}login`);
    await page.locator(navBar.LOGIN_TAB).click();
    await page.locator(signUpPage.EMAIL_INPUT).fill(email);
    await page.locator(signUpPage.PASSWORD_INPUT).fill(password);
    await page.locator(LOGIN_BUTTON).click();
};

export default login;