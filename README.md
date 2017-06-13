# BookTrade: NodeJS Book Trading App

### Frameworks / Technologies Used
- Express.js
- Node.js
- MongoDB + Mongoose
- Passport.js (Local strategy)
- ESLint (Airbnb)

## Backend APIs

#### `POST /api/auth/signup`
Sign up a user and store in database.

```javascipt
// Expected input
{
  "username": "testuser",
  "password": "secret",
  "city": "myCity",
  "state": "myState"
}

// Output (Success)
{
  "success": true,
  "user": {
    "_id": "noaein235oubw9tj",
    "username": "testuser",
    "city": "myCity",
    "state": "myState"
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```


#### `POST /api/auth/signin`
Sign in a user and create a session.

```javascipt
// Expected input
{
  "username": "testuser",
  "password": "secret"
}

// Output (Success)
{
  "success": true,
  "user": {
    "_id": "noaein235oubw9tj",
    "username": "testuser",
    "city": "myCity",
    "state": "myState"
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```


#### `GET /api/auth/signout`
Sign out a user and end the current session.

```javascipt
// Output (Success)
{
  "success": true,
  "message": "Successfully logged out."
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```


#### `GET /api/auth/profile`
** Authentication required **
Returns the profile of current user session.

```javascipt
// Output (Success)
{
  "success": true,
  "user": {
    "_id": "noaein235oubw9tj",
    "username": "testuser",
    "city": "myCity",
    "state": "myState"
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```


#### `PUT /api/auth/profile`
** Authentication required **
Updates the profile of current user session.

```javascipt
// Expected input
{
  "_id": "noaein235oubw9tj",
  "username": "testuser",
  "password": "secret",
  "newPassword": "thisisoptional",
  "city": "myCity",
  "state": "myState"
}


// Output (Success)
{
  "success": true,
  "user": {
    "_id": "noaein235oubw9tj",
    "username": "testuser",
    "city": "myCity",
    "state": "myState"
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```