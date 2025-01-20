import { navBar } from "./menu";

const logout = async (page) => {
    await page.locator(navBar.PROFILE_TAB).click();
    await page.locator(navBar.DROPDOWN_LOGOUT_BTN).click();
};

export default logout;