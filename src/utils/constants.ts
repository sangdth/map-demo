export const IS_VERCEL = !!process.env.VERCEL;
export const SESSION_NAME = `${
  IS_VERCEL ? '__Secure-' : ''
}next-auth.session-token`;

export const getCookieDomain = () => {
  if (IS_VERCEL && process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return `.${process.env.SITE_DOMAIN}`;
  }

  return undefined;
};

export const COOKIE_DOMAIN = getCookieDomain();

export const DEFAULT_VIEWSTATE = {
  latitude: 61.75987711792641,
  longitude: 24.643040610232276,
  zoom: 9,
  bearing: 0,
  pitch: 0,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
};
