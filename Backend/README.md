# UberApp Backend API Documentation

## Endpoints

### POST /users/registers

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string with a valid email format and a minimum length of 5 characters (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - Description: User registered successfully.
  - Body:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**
  - Description: Validation error or user already exists.
  - Body:
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```
    or
    ```json
    {
      "message": "User already exist"
    }
    ```

#### Example Request
```bash
curl -X POST http://localhost:3000/users/registers \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

#### Example Response
- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

### POST /captains/registers

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string with a valid email format and a minimum length of 5 characters (required)
- `password`: A string with a minimum length of 6 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `capacity`: An integer with a minimum value of 1 (required)
  - `vehicleType`: A string that must be one of 'car', 'motorcycle', or 'auto' (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **200 OK**
  - Description: Captain registered successfully.
  - Body:
    ```json
    {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
    ```

- **400 Bad Request**
  - Description: Validation error or captain already exists.
  - Body:
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```
    or
    ```json
    {
      "message": "Captain already exists"
    }
    ```

#### Example Request
```bash
curl -X POST http://localhost:3000/captains/registers \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

#### Example Response
- `captain` (object):
  - `fullname` (object).
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).   
  - `email` (string): Captain's email address (must be a valid email).
  - `vehicle` (object):
    - `color` (string): Vehicle color (minimum 3 characters).
    - `plate` (string): Vehicle plate (minimum 3 characters).
    - `capacity` (integer): Vehicle capacity (minimum 1).
    - `vehicleType` (string): Vehicle type (must be one of 'car', 'motorcycle', or 'auto').

### POST /users/logins

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body must be a JSON object containing the following fields:
- `email`: A string with a valid email format (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - Description: User logged in successfully.
  - Body:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**
  - Description: Invalid email or password.
  - Body:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **400 Bad Request**
  - Description: Validation error.
  - Body:
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "field_name",
          "location": "body"
        }
      ]
    }
    ```

#### Example Request
```bash
curl -X POST http://localhost:3000/users/logins \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

#### Example Response
- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.   
  - `email` (string): User's email address.
- `token` (String): JWT Token

### GET /users/profiles

#### Description
This endpoint is used to get the profile of the logged-in user.

#### Headers
- `Authorization`: Bearer token (required)

#### Responses

- **200 OK**
  - Description: User profile retrieved successfully.
  - Body:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - Description: Unauthorized access.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request
```bash
curl -X GET http://localhost:3000/users/profiles \
-H "Authorization: Bearer jwt_token"
```

#### Example Response
- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.   
  - `email` (string): User's email address.

### GET /users/logouts

#### Description
This endpoint is used to log out the logged-in user.

#### Headers
- `Authorization`: Bearer token (required)

#### Responses

- **200 OK**
  - Description: User logged out successfully.
  - Body:
    ```json
    {
      "message": "Logged out"
    }
    ```

- **401 Unauthorized**
  - Description: Unauthorized access.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

#### Example Request
```bash
curl -X GET http://localhost:3000/users/logouts \
-H "Authorization: Bearer jwt_token"
```

#### Example Response
- `message` (string): "Logged out"
