type User = {
  id: string;
  name: string;
  email: string;
  password: string; // Added password field
};

const USER_KEY = "app_user";

// Save user to local storage
export const saveUser = (user: User): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

// Load user from local storage
export const loadUser = (): User | null => {
  if (typeof window !== "undefined") {
    const userString = localStorage.getItem(USER_KEY);
    if (userString) {
      try {
        return JSON.parse(userString) as User;
      } catch (error) {
        console.error("Failed to parse user from local storage:", error);
        return null;
      }
    }
  }
  return null;
};



// Delete user from local storage
export const deleteUser = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_KEY);
  }
};

// On login, set a cookie
export const setAuthCookie = (user: any) => {
  if (typeof window !== "undefined") {
    document.cookie = `user=${JSON.stringify(user)}; path=/;`;
  }
};

// On logout, clear the cookie
export const clearAuthCookie = () => {
  if (typeof window !== "undefined") {
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }
};
