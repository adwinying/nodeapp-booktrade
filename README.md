# BookTrade: NodeJS Book Trading App

### Frameworks / Technologies Used
- Express.js
- Node.js
- MongoDB + Mongoose
- Passport.js (Local strategy)
- Google Books API
- ESLint (Airbnb)
- Vue.js
- Vuex
- Vue-router
- SASS

## Backend APIs

#### `POST /api/auth/signup`
Sign up a user and store in database.

```javascript
// Expected input
{
  "name": "John Doe",
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
    "name": "John Doe"
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

```javascript
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
    "name": "John Doe",
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
_**Authentication required**_
Sign out a user and end the current session.

```javascript
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
_**Authentication required**_
Returns the profile of current user session.

```javascript
// Output (Success)
{
  "success": true,
  "user": {
    "_id": "noaein235oubw9tj",
    "name": "John Doe",
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
_**Authentication required**_
Updates the profile of current user session.

```javascript
// Expected input
{
  "_id": "noaein235oubw9tj",
  "name": "John Doe",
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
    "name": "John Doe",
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

---

#### `GET /api/book/all`
Returns all books in the database.

```javascript
// Output (Success)
{
  "success": true,
  "books": [
    {
      "_id": "594161166f1cb8952835ce0d",
      "updated": "2017-06-14T16:15:18.539Z",
      "title": "Steve Jobs",
      "owner": {
        "_id": "593fe5538d8fb9811c5bfd8e",
        "username": "admin",
        "city": "Boston",
        "state": "MA",
        "__v": 0,
        "name": "Admin"
      },
      "borrower": {
        "_id": "593fe659748a28813aa8bac0",
        "username": "adwin",
        "city": "Seattle",
        "state": "WA",
        "__v": 0,
        "name": "Adwin"
      },
      "imageURL": "http://books.google.com/books/content?id=eSMdAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "__v": 0,
      "confirmed": false
    },
    ...
  ]
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `POST /api/book/new`
_**Authentication required**_
Creates new book entry in the database.

```javascript
// Expected input
{
  "title": "My Book Title"
}

// Output (Success)
{
  "success": true,
  "books": {
    "_id": "594161166f1cb8952835ce0d",
    "updated": "2017-06-14T16:15:18.539Z",
    "title": "My Book Title",
    "owner": {
      "_id": "593fe5538d8fb9811c5bfd8e",
      "username": "admin",
      "city": "Boston",
      "state": "MA",
      "__v": 0,
      "name": "Admin"
    },
    "imageURL": "http://books.google.com/books/content?id=eSMdAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "__v": 0,
    "confirmed": false
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `PUT /api/book/update`
_**Authentication required**_
Modifies new book entry in the database.

```javascript
// Expected input
{
  "_id": "594161166f1cb8952835ce0d",
  "title": "My Book Title",
  "owner": "593fe659748a28813aa8bac0",
  "confirmed": true
}

// Output (Success)
{
  "success": true,
  "book": {
    "_id": "594161166f1cb8952835ce0d",
    "updated": "2017-06-15T16:15:18.539Z",
    "title": "My Book Title",
    "owner": {
      "_id": "593fe659748a28813aa8bac0",
      "username": "adwin",
      "city": "Seattle",
      "state": "WA",
      "__v": 0,
      "name": "Adwin"
    },
    "imageURL": "http://books.google.com/books/content?id=eSMdAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "__v": 0,
    "confirmed": true
  }
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```

#### `DELETE /api/book/delete`
_**Authentication required**_
Deletes book entry in the database.

```javascript
// Expected input
{
  "_id": "594161166f1cb8952835ce0d"
}

// Output (Success)
{
  "success": true,
  "message": "Successfully deleted book."
}

// Output (Fail)
{
  "success": false,
  "message": "Error message goes here"
}
```