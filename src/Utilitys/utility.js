// Utility function to check if the user is authenticated
export const isAuthenticated = (token) => {
    return !!token || !!localStorage.getItem('googleToken');
  };
  