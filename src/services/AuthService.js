class AuthService {
    // Simulated user data (replace with actual backend API calls)
    users = [
      { id: 1, email: 'user1@example.com', password: 'password1' },
      { id: 2, email: 'user2@example.com', password: 'password2' },
    ];
  
    // Simulated authentication token (replace with actual token handling)
    authToken = null;
  
    // Login method
    login(email, password) {
      // Simulated API call to authenticate user
      const user = this.users.find(user => user.email === email && user.password === password);
      if (user) {
        // Set authentication token (simulate token generation)
        this.authToken = `Bearer ${Math.random().toString(36).substring(7)}`;
        return { user, authToken: this.authToken };
      } else {
        throw new Error('Invalid email or password');
      }
    }
  
    // Logout method
    logout() {
      // Clear authentication token
      this.authToken = null;
    }
  
    // Check if user is authenticated
    isAuthenticated() {
      return !!this.authToken;
    }
  }
  
  export default new AuthService();