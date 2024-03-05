---
sidebar_position: 1
---
<!-- # Swagger User Authentication

## User and Authentication

<details>

<summary><b><span style="color:#008000">POST</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /users</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Register a new user</summary>
&nbsp;

**Parameters:** No parameters

**Request Body:**
```
    {
        "user": 
        {
            "email": "user518@testing.com",
            "password": "Testing151!",
            "username": "user518"
        }
    }
```

**Responses:**
**<h5>Curl</h5>**
```
  curl -X 'POST' \
  'http://localhost:3000/api/users' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "user":   {
        "email": "user518@testing.com",
        "password": "Testing151!",
        "username": "user518"
    }
}'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/users

**<h5>Server response</h5>**

 <table>
    <thead>
        <tr>
            <th><h5>Code</h5></th>
            <th><h5>Details</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4"><b><h5>201</h5</b></td>
            <td><b><h5>Response Body</h5></b></td>
        </tr>
        <tr>
            <td rowspan="1">
            {
                <br>
                &nbsp;&nbsp; &nbsp; &nbsp; "user":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "email": "user518@testing.com",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "username": "user518",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDgzNTMxNjB9.qvYt8vvmA-Q6JCCjL0MSAvtw2iiO4Kmzna9ai6_BqxQ",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "bio": null,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
                    <br>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                }
            <br>
            }
            </td>
        </tr>
        <tr>
            <td><b><h5>Response headers</h5</b></td>
        </tr>
        <tr>
            <td>content-type: application/json</td>
        </tr>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>       | <h5> Links </h5>    |
| :-------------- | :--------------------------- | :------------------ |
| 201             | User registered successfully | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#008000">POST</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /users/login</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Login</summary>
&nbsp;

**Parameters:** No parameters

**Request Body:**
```
    {
        "user": 
        {
            "email": "user518@testing.com",
            "password": "Testing151!"
        }
    }
```

**Responses:**
**<h5>Curl</h5>**
```
  curl -X 'POST' \
  'http://localhost:3000/api/users/login' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "user":   {
        "email": "user518@testing.com",
        "password": "Testing151!"
    }
}'
```

**<h5>Request URL</h5>**
http://localhost:3000/api/users/login

**<h5>Server response</h5>**

 <table>
    <thead>
        <tr>
            <th><h5>Code</h5></th>
            <th><h5>Details</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4><b><h5>200</h5</b></td>
            <td><b><h5>Response Body</h5></b></td>
        </tr>
        <tr>
            <td rowspan="1">
            {
                <br>
                &nbsp;&nbsp; &nbsp; &nbsp; "user":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "email": "user518@testing.com",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "username": "user518",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "bio": null,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
                    <br>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                }
            <br>
            }
            </td>
        </tr>
        <tr>
            <td><b><h5>Response headers</h5</b></td>
        </tr>
        <tr>
            <td>content-type: application/json</td>
        </tr>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>      | <h5> Links </h5>    |
| :-------------- | :-------------------------- | :------------------ |
| 200             | User logged in successfully | <em> No links </em> |
| 401             | Unauthorized                | <em> No links </em> |
| 422             | Unexpected error            | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#0096FF">GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /user</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Get current user</summary>
&nbsp;

**Parameters:** No parameters

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'GET' \
  'http://localhost:3000/api/user' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'

```

**<h5>Request URL</h5>**
http://localhost:3000/api/user

**<h5>Server response</h5>**

 <table>
    <thead>
        <tr>
            <th><h5>Code</h5></th>
            <th><h5>Details</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4><b><h5>200</h5</b></td>
            <td><b><h5>Response Body</h5></b></td>
        </tr>
        <tr>
            <td rowspan=1>
            {
                <br>
                &nbsp;&nbsp; &nbsp; &nbsp; "user":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "email": "user518@testing.com",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "username": "user518",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTI0MDh9.FkPKCwyvaMP1MftEFUaIHdx_fhmM_I46Bl7kuaASDuk",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "bio": null,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
                    <br>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                }
            <br>
            }
            </td>
        </tr>
        <tr>
            <td><b><h5>Response headers</h5</b></td>
        </tr>
        <tr>
            <td>content-type: application/json</td>
        </tr>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>              | <h5> Links </h5>    |
| :-------------- | :---------------------------------- | :------------------ |
| 200             | Current user retrieved successfully | <em> No links </em> |
| 401             | Unauthorized                        | <em> No links </em> |
| 422             | Unexpected error                    | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#FFA500">PUT</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/user</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Update current user</summary>
&nbsp;

**Parameters:** No parameters

**Request Body:**
```
    {
        "user": 
        {
            "email": "user518_updated@testing.com",
        }
    }
```

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'PUT' \
  'http://localhost:3000/api/user' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
  -H 'Content-Type: application/json' \
  -d '{
  "user": {
    "email": "user518_updated@testing.com"
  }
}
```

**<h5>Request URL</h5>**
http://localhost:3000/api/user

**<h5>Server response</h5>**

 <table>
    <thead>
        <tr>
            <th><h5>Code</h5></th>
            <th><h5>Details</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4"><b><h5>200</h5</b></td>
            <td><b><h5>Response Body</h5></b></td>
        </tr>
        <tr>
            <td rowspan="1">
            {
                <br>
                &nbsp;&nbsp; &nbsp; &nbsp; "user":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "email": "user518@testing.com",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "username": "user518",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTQ4Mjl9.yXS6DAQavtiwMcU5KFBg6syVuFmK1lqg_Db7CK2eiFA",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "bio": null,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "image": null
                    <br>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                }
            <br>
            }
            </td>
        </tr>
        <tr>
            <td><b><h5>Response headers</h5</b></td>
        </tr>
        <tr>
            <td>content-type: application/json</td>
        </tr>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>    | <h5> Links </h5>    |
| :-------------- | :------------------------ | :------------------ |
| 200             | User updated successfully | <em> No links </em> |
| 401             | Unauthorized              | <em> No links </em> |
| 422             | Unexpected error          | <em> No links </em> |

</details> -->