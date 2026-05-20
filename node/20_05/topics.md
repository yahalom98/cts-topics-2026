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