# Understand of what authentication is
# Reg new users and saves them with MongoDB
# bcrypt
# Tokens using JWT
# API for authentication

# Authorization 

- Authentication Flow
      
User Register
        |
        V
The user is saved in MongoDB
        |
        V
User Login
        |
        V
Password checking
        |
        V
Token creation
        |
        V
User sends token to access to private routes

<!-- 

npm init -y 

-->
<!--

 npm install express mongoose bcrypt 
jsonwebtoken cors nodemon

 -->



# JWT - Json Web Token | string that stores user information safely
# example - 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

# Authentication Exercises — Node.js + MongoDB

## Project Goal

Build and improve an authentication API using:

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JWT

The API should allow users to register, login, access private routes, and use role-based permissions.

---

## Base API Routes

Before starting the exercises, you should already have these routes:

| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/users/profile` | Get logged-in user profile |

---

# Exercise 1 — Add Phone Number to User

## Task

Add a new field called `phone` to the user.

Example register body:

```json
{
  "name": "Omer",
  "email": "omer@gmail.com",
  "password": "123456",
  "phone": "0501234567"
}
Requirements
Update the User model.
Update the register route.
Save the phone number in MongoDB.
Return the phone number in the profile response.
Expected Result

When the user opens their profile, the response should include:

{
  "name": "Omer",
  "email": "omer@gmail.com",
  "phone": "0501234567"
}
Exercise 2 — Add Password Validation
Task

Before registering a user, check that the password is strong enough.

Requirements

The password must:

Be at least 6 characters long.
Not be empty.
Return a message if the password is too short.
Example Invalid Body
{
  "name": "Omer",
  "email": "omer@gmail.com",
  "password": "123"
}
Expected Result
{
  "message": "Password must be at least 6 characters"
}
Exercise 3 — Prevent Duplicate Email Registration
Task

Make sure two users cannot register with the same email.

Requirements
Search for an existing user by email.
If the email already exists, do not create a new user.
Return a clear message to the client.
Expected Result
{
  "message": "User already exists"
}
Exercise 4 — Add Login Validation
Task

Improve the login route by checking if the user sent both email and password.

Requirements
If email is missing, return a message.
If password is missing, return a message.
If both exist, continue the login process.
Example Invalid Body
{
  "email": "omer@gmail.com"
}
Expected Result
{
  "message": "Email and password are required"
}
Exercise 5 — Create Logout Route
Task

Create a logout route.

Route
POST /api/auth/logout
Requirements
Return a logout success message.
Explain that JWT logout usually happens on the frontend.
The frontend should remove the token from localStorage.
Expected Result
{
  "message": "Logout successful. Remove token from frontend."
}
Exercise 6 — Create Admin Route
Task

Create a route that only admin users can access.

Route
GET /api/users/admin
Requirements
The route must be protected with auth middleware.
Check if the logged-in user has role admin.
If the user is not admin, return an access denied message.
If the user is admin, return a welcome message.
Expected Result for Regular User
{
  "message": "Access denied. Admin only."
}
Expected Result for Admin User
{
  "message": "Welcome admin"
}
Exercise 7 — Get All Users for Admin
Task

Create a route that returns all users, but only for admin users.

Route
GET /api/users
Requirements
The route must be protected.
Only users with role admin can access it.
Return all users from MongoDB.
Do not return user passwords.
Expected Result
[
  {
    "_id": "user_id",
    "name": "Omer",
    "email": "omer@gmail.com",
    "role": "user"
  }
]
Exercise 8 — Hide Password from Profile
Task

Make sure the user password is never returned from the profile route.

Route
GET /api/users/profile
Requirements
Return the logged-in user data.
Do not return the password field.
Keep the route protected.
Expected Result
{
  "message": "Private profile data",
  "user": {
    "_id": "user_id",
    "name": "Omer",
    "email": "omer@gmail.com",
    "role": "user"
  }
}
Exercise 9 — Add Created Date to User
Task

Add a created date to every user.

Requirements
Add timestamps to the User model.
Every new user should have a creation date.
Return the creation date in the profile response.
Expected Result
{
  "name": "Omer",
  "email": "omer@gmail.com",
  "createdAt": "2026-05-20T10:00:00.000Z"
}
Exercise 10 — Create Update Profile Route
Task

Allow a logged-in user to update their own profile.

Route
PUT /api/users/profile
Example Body
{
  "name": "Omer Updated",
  "phone": "0522222222"
}
Requirements
The route must be protected.
The user can update only their own profile.
The user can update name and phone.
The user cannot update role from this route.
Return the updated user.
Exercise 11 — Change Password Route
Task

Allow a logged-in user to change their password.

Route
PUT /api/users/change-password
Example Body
{
  "oldPassword": "123456",
  "newPassword": "654321"
}
Requirements
The route must be protected.
Check if the old password is correct.
Hash the new password before saving.
Return a success message.
Do not return the password.
Expected Result
{
  "message": "Password updated successfully"
}
Exercise 12 — Delete My Account
Task

Allow a logged-in user to delete their own account.

Route
DELETE /api/users/profile
Requirements
The route must be protected.
Delete only the logged-in user.
Return a success message.
Expected Result
{
  "message": "User deleted successfully"
}
Exercise 13 — Add Role When Registering
Task

Allow users to have a role.

User Roles
user
admin
Requirements
Add a role field to the User model.
Default role should be user.
Regular registration should create a regular user.
Admin users can be created manually in MongoDB or with a special route.
Exercise 14 — Create Admin Delete User Route
Task

Create a route that allows only admins to delete users.

Route
DELETE /api/users/:id
Requirements
The route must be protected.
Only admin users can access it.
Admin can delete another user by ID.
Return a success message.
Expected Result
{
  "message": "User deleted by admin"
}