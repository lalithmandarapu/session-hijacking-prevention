# session-hijacking-prevention
# Session Hijacking Prevention System

## **Project Overview**
The **Session Hijacking Prevention System** is a secure web-based application that demonstrates techniques to mitigate session hijacking attacks. It incorporates token-based authentication, HTTPS enforcement, and best practices to ensure session security. This project is an educational tool to understand modern methods for safeguarding user sessions.

---

## **Features**

1. **Token-Based Authentication:**
   - Uses JSON Web Tokens (JWT) to authenticate and authorize users.
   - Tokens are securely stored in HTTP-only cookies to prevent client-side tampering.

2. **HTTPS Enforcement:**
   - Enforces secure communication between the client and server using HTTPS.
   - Ensures all cookies are transmitted securely.

3. **Session Management:**
   - Implements session expiration and automatic logout after a specified time.
   - Prevents unauthorized access using middleware for token validation.

4. **Secure Cookie Attributes:**
   - HTTP-only cookies to prevent client-side access via JavaScript.
   - `SameSite=Strict` and `Secure` attributes to prevent cross-site attacks.

5. **Protected Routes:**
   - Only authenticated users can access protected resources.
   - Non-authenticated requests are redirected to the login page.

6. **User-Friendly Frontend:**
   - Interactive login and dashboard pages.
   - Automatic redirection based on user authentication status.

---

## **Tech Stack**

### Backend:
- **Node.js**: Runtime environment for server-side logic.
- **Express.js**: Framework for building REST APIs.
- **JWT (jsonwebtoken)**: For secure token-based authentication.
- **cookie-parser**: To manage cookies.
- **dotenv**: To manage environment variables.

### Frontend:
- **HTML/CSS**: For the user interface.
- **Vanilla JavaScript**: For client-side logic and API communication.

---

## **Project Structure**

```
session-hijacking-prevention/
├── backend/
│   ├── server.js           # Main server file
│   ├── .env                # Environment variables
│   ├── routes/
│   │   └── auth.js         # Authentication-related routes
│
├── frontend/
│   ├── index.html          # Landing page
│   ├── login.html          # Login page
│   ├── dashboard.html      # Dashboard for authenticated users
│   ├── scripts/
│   │   ├── login.js        # Login functionality
│   │   ├── dashboard.js    # Dashboard functionality
│   └── styles/
│       └── style.css       # Basic styling
```

---

## **Setup Instructions**

### Prerequisites:
- **Node.js** (v14 or above)
- **npm** (Node Package Manager)

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/session-hijacking-prevention.git
   cd session-hijacking-prevention
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` directory:
     ```env
     PORT=5000
     JWT_SECRET=your_secret_key
     ```
   - Start the server:
     ```bash
     node server.js
     ```

3. **Frontend Setup:**
   - Open another terminal.
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Start a local server using any static server tool (e.g., `http-server`):
     ```bash
     npx http-server . -p 3000
     ```

4. **Access the Application:**
   - Open `http://localhost:3000` in your browser.
   - Login credentials:
     - **Username:** `admin`
     - **Password:** `password123`

---

## **How It Works**

1. **Authentication Flow:**
   - User submits credentials via the login page.
   - Server validates the credentials and generates a JWT.
   - JWT is sent to the client as an HTTP-only cookie.

2. **Session Security:**
   - All subsequent requests include the JWT in the cookie.
   - Server validates the token before granting access to protected routes.

3. **Token Expiration:**
   - Tokens expire after 1 hour, ensuring sessions are time-limited.

4. **Logout:**
   - Clears the JWT cookie, effectively logging the user out.

---

## **Endpoints**

### Backend Routes:
1. **POST `/auth/login`**
   - Authenticates the user and issues a JWT.

2. **POST `/auth/logout`**
   - Logs out the user by clearing the token cookie.

3. **GET `/auth/protected`**
   - Validates the token and grants access to protected resources.

---

## **Security Best Practices Implemented**

1. **HTTPS Enforcement:** Ensures all communication is encrypted.
2. **Secure Cookies:** Prevents JavaScript access and cross-site attacks.
3. **Token-Based Authentication:** Reduces reliance on server-side sessions.
4. **Token Expiry:** Minimizes the risk of long-lived tokens being compromised.

---

## **Future Enhancements**

- Implement multi-factor authentication (MFA).
- Add rate-limiting and IP blacklisting for brute force protection.
- Integrate database storage for dynamic user management.
- Provide detailed user activity logging.

---


