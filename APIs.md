# Backend API Routes

## 🔐 Auth Routes

**Prefix:** `/api/auth`

| Method | Full API Path        | Controller     |
| ------ | -------------------- | -------------- |
| POST   | `/api/auth/register` | `userRegister` |
| POST   | `/api/auth/login`    | `userLogin`    |
| POST   | `/api/auth/logout`   | `userLogout`   |

---

## 👤 Customize Profile Routes

**Prefix:** `/user/customize`

| Method | Full API Path                 | Controller         |
| ------ | ----------------------------- | ------------------ |
| PATCH  | `/user/customize/profile/:id` | `customizeProfile` |

**Multipart fields:**

* `profileImage`
* `coverImage`

---

## 📝 Post Routes

**Prefix:** `/user/profile`

| Method | Full API Path                  | Controller    |
| ------ | ------------------------------ | ------------- |
| GET    | `/user/profile/feed`           | `getAllPosts` |
| GET    | `/user/profile/feed/:id`       | `getPost`     |
| POST   | `/user/profile/addPost`        | `createPost`  |
| PATCH  | `/user/profile/editPost/:id`   | `updatePost`  |
| DELETE | `/user/profile/deletePost/:id` | `deletePost`  |

**Create Post:** `multipart/form-data`

**Field:**

* `image`

---

## 👥 Follow Routes

**Prefix:** `/user/profile`

| Method | Full API Path                | Controller        |
| ------ | ---------------------------- | ----------------- |
| POST   | `/user/profile/follow/:id`   | `followUser`      |
| POST   | `/user/profile/unfollow/:id` | `unfollowUser`    |
| GET    | `/user/profile/stats`        | `getProfileStats` |

---

## ❤️ Like Routes

**Prefix:** `/user/post`

| Method | Full API Path              | Controller     |
| ------ | -------------------------- | -------------- |
| POST   | `/user/post/like/:id`      | `likePost`     |
| POST   | `/user/post/unlike/:id`    | `unlikePost`   |
| GET    | `/user/post/postCount/:id` | `getLikeCount` |

---

## 💬 Comment Routes

**Prefix:** `/user/post`

| Method | Full API Path                 | Controller        |
| ------ | ----------------------------- | ----------------- |
| POST   | `/user/post/comment/:id`      | `commentPost`     |
| POST   | `/user/post/uncomment/:id`    | `uncommentPost`   |
| GET    | `/user/post/commentCount/:id` | `getCommentCount` |

---

## 📰 Feed Routes

**Prefix:** `/user/feed`

| Method | Full API Path      | Controller |
| ------ | ------------------ | ---------- |
| GET    | `/user/feed/posts` | `getFeed`  |

---

## 🔎 Search Routes

**Prefix:** `/api/search`

| Method | Full API Path      | Controller   |
| ------ | ------------------ | ------------ |
| GET    | `/api/search/user` | `searchUser` |

---

# Frontend API Reference

### Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
```

### Profile

```text
PATCH  /user/customize/profile/:id
GET    /user/profile/stats
```

### Posts

```text
GET    /user/profile/feed
GET    /user/profile/feed/:id
POST   /user/profile/addPost
PATCH  /user/profile/editPost/:id
DELETE /user/profile/deletePost/:id
```

### Follow

```text
POST   /user/profile/follow/:id
POST   /user/profile/unfollow/:id
```

### Likes

```text
POST   /user/post/like/:id
POST   /user/post/unlike/:id
GET    /user/post/postCount/:id
```

### Comments

```text
POST   /user/post/comment/:id
POST   /user/post/uncomment/:id
GET    /user/post/commentCount/:id
```

### Feed

```text
GET    /user/feed/posts
```

### Search

```text
GET    /api/search/user
```

---

# Axios Examples

### Register

```javascript
axios.post("/api/auth/register", {
    fullname,
    email,
    password
});
```

### Login

```javascript
axios.post("/api/auth/login", {
    email,
    password
});
```

### Get Feed

```javascript
axios.get("/user/feed/posts");
```

### Follow User

```javascript
axios.post(`/user/profile/follow/${userId}`);
```

### Like Post

```javascript
axios.post(`/user/post/like/${postId}`);
```

### Get Like Count

```javascript
axios.get(`/user/post/postCount/${postId}`);
```

### Comment

```javascript
axios.post(`/user/post/comment/${postId}`, {
    comment
});
```

### Delete Post

```javascript
axios.delete(`/user/profile/deletePost/${postId}`);
```

### Search User

```javascript
axios.get(`/api/search/user?username=${username}`);
```

### Customize Profile

```javascript
const formData = new FormData();

formData.append("profileImage", profileImage);
formData.append("coverImage", coverImage);

axios.patch(
    `/user/customize/profile/${userId}`,
    formData
);
```
