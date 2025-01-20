import { navBar } from "./menu";

export const resetPage = async(page) => {
    await page.locator(navBar.HOME_TAB).click();
};