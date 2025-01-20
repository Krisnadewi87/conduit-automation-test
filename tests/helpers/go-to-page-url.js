const goToPageURL = (page) => async (url) => await page.goto(url);

export default goToPageURL;