export const login = async (username, password) => {
  return new Promise((resolve) => {
    // Mock login delay
    setTimeout(() => resolve({ success: true, user: username }), 500);
  });
};
