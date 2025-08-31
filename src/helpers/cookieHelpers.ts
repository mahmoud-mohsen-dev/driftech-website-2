/**
 * Sets a cookie with the given name, value, and number of days to expire.
 * Returns the value of the cookie or null if the cookie is not set.
 * @param {string} cookieName - The name of the cookie.
 * @param {string} cookieValue - The value of the cookie.
 * @param {number} [days=30] - The number of days until the cookie expires.
 * @returns {string | null} The value of the cookie or null if the cookie is not set.
 */
export const setCookie = (
  cookieName: string,
  cookieValue: string,
  days: number = 30,
): string | null => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/`;
  return getCookie(cookieName);
};

/**
 * Gets the value of a cookie with the given name.
 * @param {string} cookieName - The name of the cookie.
 * @returns {string | null} The value of the cookie or null if the cookie is not set.
 */
export const getCookie = (cookieName: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);

  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null; // Return null if cookie doesn't exist
};

/**
 * Removes the cookie with the given name.
 * @param {string} cookieName - The name of the cookie to remove.
 */
export const removeCookie = (cookieName: string): void => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

/**
 * Checks if a cookie with the given name exists.
 * @param {string} cookieName - The name of the cookie to check.
 * @returns {boolean} True if the cookie exists, false otherwise.
 */

export const doesCookieByNameExist = (cookieName: string): boolean => {
  return document.cookie
    .split("; ")
    .some((row) => row.startsWith(`${cookieName}=`));
};
