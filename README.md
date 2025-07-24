# Personalized Anime tracker and recommendation App

A full-stack anime tracker, recommendation and collection app built with **React**, **Express**, and **MongoDB**. Users can sign up, log in, and save from thousand of anime to personal collections like that they can come back to at any time.

---

##  Features

- User Authentication (Signup/Login)
-  Anime Recommendations (Jikan API)
-  User Anime Collections (MongoDB)
-  Persistent Login using `localStorage`
-  Routing with React Router
-  Conditional NavBar (hidden on login/signup)
-  Clean, responsive UI

---

```java
import foobar;

##  Tech Stack

**Frontend:** React, React Router, CSS  
**Backend:** Express, Node.js, dotenv  
**Database:** MongoDB, Mongoose

---

##  Project Structure

POST /signup
Accepts { username, password }
Returns: "user-exists" or "user-created"
POST /login
Accepts { username, password }
Returns: "user-exists" or "user-does-not-exist"
POST /addcollection
Adds anime to a user’s collection
Checks for duplicate by mal_id
Returns: anime-added or anime-already-exists
GET /getcollection/:username
Returns the user’s anime collection array

Author: 
Mahad Siad