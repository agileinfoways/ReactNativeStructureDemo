import { Dimensions, Platform } from 'react-native';
var { height, width } = Dimensions.get('window');

export const CONST = {
    TITLE_HOME: 'Home',
    TITLE_LOGIN: 'Login',
    DEVICE_HEIGHT: height,
    DEVICE_WIDTH: width,
    DEVICE_OS: Platform.OS
}

export const FONTS = {
    REGULAR: 'Nunito-Regular',
    BOLD: 'Nunito-Bold',
    SEMIBOLD: 'Nunito-Semibold',
    LIGHT: 'Nunito-Light',
    ITALIC: 'Nunito-Italic',
    LIGHT_ITALIC: 'Nunito-LightItalic',
    SEMIBOLD_ITALIC: 'Nunito-SemiBoldItalic',
    BLACK: 'Nunito-Black',
    BLACK_ITALIC: 'Nunito-BlackItalic',
    EXTRA_BOLD_ITALIC: 'Nunito-ExtraBoldItalic',
    EXTRA_BOLD: 'Nunito-ExtraBold',
    EXTRA_LIGHT: 'Nunito-ExtraLight',
    EXTRA_LIGHT_ITALIC: 'Nunito-ExtraLightItalic',
    BOLD_ITALIC: 'Nunito-BoldItalic',
};

export const COLORS = {
    RED: 'rgb(255, 0, 0)',
    LIGHT_RED: 'rgb(255, 72, 48)',
    YELLOW: 'rgb(255, 255, 0)',
    WHITE: 'rgba(255, 255, 255, 1)',
    BLACK: 'rgba(0, 0, 0, 1)',
    GRAYBLACK: '#444',
    GREY: 'rgba(52, 52, 52, 0.2)',
    BLUE: 'rgb(0, 0, 255)',
    TRANSPARENT: 'rgba(255, 255, 255, 0)',
    CEMENT: '#8388A4'
}

export const SCALE = {
    TITLE_TEXT_SIZE: 16,
    INPUT_TEXT_SIZE: 15,
    SUB_TEXT_SIZE: 14,
    CONTENT_TEXT_SIZE: 12,
    CONTAINER_PADDING: 16,
    SUB_CONTAINER_PADDING: 8,
    w: (size) => size / 2 * (320 / 375),
    h: (size) => size / 2,
}
export const PREF = {
    //pref keys
    pref_user_id: 'pref_user_id',
    pref_access_token: 'pref_access_token',
    pref_is_loggedin: 'pref_is_loggedin'
}
export const API_RES_CODES = {
    //api response code    
    SUCCESS_CODE: 200,
    ERROR_CODE: 400,
}

export const VALIDATION_CONST = {
    minPasswordLength: 6,
    minInputTextLength: 2,
    minPhoneLength: 8,
    minZipCodeLength: 5,
    maxPasswordLength: 16,
    maxNameLength: 64,
    maxPhoneLength: 15,
    maxZipCodeLength: 5    
}