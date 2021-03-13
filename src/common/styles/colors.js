/* eslint-disable no-lone-blocks */
//Main colors

import { lighten, rgba } from './color';

// first

const primary = '#5629B6';
const accent = '#FFC107';

// Core colors
const colorPrimary = '#673FBD';
const colorPrimaryDark = '#5629B6';
const colorSecondary = '#6569DF';
const colorCoreRed = '#EA475D';
const colorCoreTeal = '#63D2D6';
const colorCoreYellow = '#fda50f';
const colorCoreOrange = '#FF6600';
const colorCoreGreen = '#3CCC38';
const colorCoreBlue = '#3B85F4';
const colorCoreDarkBlue = '#0a1e41';
const colorCoreBlack = '#393C40';
const colorCoreGray = '#888';
const colorCoreLightGray = '#AAAEB3';
const colorCoreMediumGray = '#6a818c';

const colorLightGray = '#AAA';
const colorLightBlue = '#F8FBFF';
const colorCoreDarkGray = '#373737';
const colorShadowGray = '#DDD';

const colorBlack = '#000';
const colorWhite = '#FFF';

// backgrounds
const bgMain = '#EDF1F5';
const bgDark = rgba(colorBlack, 0.95);
const bgLight = '#FAFAFA';
const bgActive = '#F0F0F0';
const bgGray = '#e6e6e6';
const bgLightPurple = '#F7F8FC';
const bgUnread = '#ededfb';
const bgInternal = '#fff0b2';
const bgStage = '#e5e8ec';

// Link colors
const linkPrimary = '#1785FC';
const linkPrimaryHover = rgba(linkPrimary, 0.7);

// Border colors
const borderPrimary = rgba(colorBlack, 0.16);
const borderDarker = '#DEE4E7';

// Text colors
const textPrimary = '#252437';
const textSecondary = lighten(textPrimary, 20);

// Shadow colors
const shadowPrimary = rgba(colorBlack, 0.08);
const darkShadow = rgba(colorBlack, 0.2);

// Social colors
const socialFacebook = '#3A5999';
const socialFacebookMessenger = '#1472FB';
const socialTwitter = '#1DA1F2';
const socialGmail = '#D44638';
const socialGoogleMeet = '#038476';
const socialWhatsApp = '#25D366';
const socialTelegram = '#0088cc';
const socialViber = '#8f5db7';
const socialLine = '#00c300';
const socialTwilio = '#cf272d';

export default {
  colorPrimary,
  colorPrimaryDark,
  colorSecondary,
  colorCoreRed,
  colorCoreTeal,
  colorCoreYellow,
  colorCoreOrange,
  colorCoreBlue,
  colorCoreGreen,
  colorCoreBlack,
  colorCoreGray,
  colorCoreLightGray,
  colorWhite,
  colorBlack,
  colorShadowGray,
  colorLightGray,
  colorLightBlue,
  colorCoreDarkGray,
  colorCoreDarkBlue,
  colorCoreMediumGray,
  bgStage,

  bgMain,
  bgDark,
  bgLight,
  bgActive,
  bgUnread,
  bgLightPurple,
  bgInternal,
  bgGray,

  linkPrimary,
  linkPrimaryHover,

  borderPrimary,
  borderDarker,

  textPrimary,
  textSecondary,

  shadowPrimary,
  darkShadow,

  socialFacebook,
  socialFacebookMessenger,
  socialTwitter,
  socialGmail,
  socialGoogleMeet,
  socialTelegram,
  socialViber,
  socialLine,
  socialTwilio,
  socialWhatsApp,

  primary,
  accent
};
