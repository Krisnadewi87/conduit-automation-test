// sign up page
export const signUpPage = {
    USERNAME_INPUT: "//input[@name='username']",
    EMAIL_INPUT: "//input[@name='email']",
    PASSWORD_INPUT: "//input[@name='password']",
    SIGNUP_BUTTON: "//button[@class='btn btn-lg btn-primary pull-xs-right']",
};

export const LOGIN_BUTTON = "//button[@class='btn btn-lg btn-primary pull-xs-right']";

export const navBar = {
    SIGNUP_TAB: "//a[contains(.,'Sign up')]",
    LOGIN_TAB: "//a[contains(.,'Login')]",
    HOME_TAB: "//a[contains(.,'Home')]", 
    NEW_ARTICLE_TAB: "//a[contains(.,'New Article')]",
    PROFILE_TAB: "//div[@class='nav-link dropdown-toggle cursor-pointer']",
    DROPDOWN_PROFILE_BTN: "//a[contains(.,'Profile')]",
    DROPDOWN_SETTINGS_BTN: "//a[contains(.,'Settings')]",
    DROPDOWN_LOGOUT_BTN: "//a[contains(.,'Logout')]",
};


export const homePage = {
    YOUR_FEED_TAB: "//button[@class='nav-link active']",
    GLOBAL_FEED_TAB: "//button[@class='nav-link ']",
};


export const newArticle = {
    ARTICLE_TITLE: "//input[@name='title']",
    ARTICLE_DESCRIPTION: "//input[@name='description']",
    ARTICLE_BODY: "//textarea[@name='body']",
    ARTICLE_TAGS: "//input[@name='tags']",
    PUBLISH_ARTICLE_BTN: "//button[@class='btn btn-lg pull-xs-right btn-primary']",
};


export const articlePage = {
    DELETE_ARTICLE_BTN: "//div[@class='banner']//button[contains(.,'Delete Article')]",
    EDIT_ARTICLE_BTN: "//div[@class='banner']//a[contains(.,'Edit Article')]",
    COMMENT_FIELD: "//textarea[@class='form-control']",
    POST_COMMENT_BTN: "//button[@class='btn btn-sm btn-primary']",
    COMMENT_TEXT: "//p[@class='card-text']",
};

export const profilePage = {
    PAGE_TITTLE: "//h1[@class='text-xs-center']",
    IMAGE_INPUT: "//input[@name='image']",
    USERNAME_INPUT: "//input[@name='username']",
    BIO_INPUT: "//textarea[@name='bio']",
    EMAIL_INPUT: "//input[@name='email']",
    PASSWORD_INPUT: "//input[@name='password']",
    UPDATE_SETTING_BTN: "//button[@class='btn btn-lg btn-primary pull-xs-right']",
    UPDATED_USERNAME: ".user-info h4",
    UPDATED_BIO: ".user-info p",
};