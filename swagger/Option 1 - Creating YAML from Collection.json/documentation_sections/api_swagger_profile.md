## Profile

<details>

<summary><b><span style="color:#0096FF">GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /profiles/{USERNAME}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Get a profile</summary>
&nbsp;

**Parameters:**
<table>
    <thead>
        <tr>
            <th><h5>Name</h5></th>
            <th><h5>Description</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <p>
                <h6>USERNAME<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>Gerome</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'GET' \
  'http://localhost:3000/api/profiles/Gerome' \
  -H 'accept: */*'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/profiles/Gerome

**<h5>Server response</h5>**

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan=4>200</th>
      <th>Response body</th>
    </tr>
    <tr>
      <td> {
            <br>
            &nbsp; &nbsp;
            "profile": {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "username": "Gerome",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "bio": "Hello followers",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "image": "https://api.realworld.io/images/demo-avatar.png",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "following": true
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <br>
                &nbsp; &nbsp;
                }
        <br>
        }
      </td>
    </tr>
    <tr>
      <th>Response headers</th>
    </tr>
    <tr>
      <td>content-type: application/json </td>
    </tr>
  </tbody>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>         | <h5> Links </h5>    |
| :-------------- | :----------------------------- | :------------------ |
| 200             | Profile retrieved successfully | <em> No links </em> |
| 401             | Unauthorized                   | <em> No links </em> |
| 422             | Unexpected error               | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#008000">POST</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /profiles/{USERNAME}/follow</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Follow a user</summary>
&nbsp;

**Parameters:**
<table>
    <thead>
        <tr>
            <th><h5>Name</h5></th>
            <th><h5>Description</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <p>
                <h6>USERNAME<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>username_1</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'POST' \
  'http://localhost:3000/api/profiles/username_1/follow' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
  -d ''
```
**<h5>Request URL</h5>**
http://localhost:3000/api/profiles/username_1/follow

**<h5>Server response</h5>**

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan=4>200</th>
      <th>Response body</th>
    </tr>
    <tr>
      <td> {
            <br>
            &nbsp; &nbsp;
            "profile": {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "username": "username_1",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "bio": null,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "following": true
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <br>
                &nbsp; &nbsp;
                }
        <br>
        }
      </td>
    </tr>
    <tr>
      <th>Response headers</th>
    </tr>
    <tr>
      <td>content-type: application/json </td>
    </tr>
  </tbody>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>     | <h5> Links </h5>    |
| :-------------- | :------------------------- | :------------------ |
| 200             | User followed successfully | <em> No links </em> |
| 401             | Unauthorized               | <em> No links </em> |
| 422             | Unexpected error           | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#EE4B2B">DELETE</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /profiles/{USERNAME}/follow</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Unfollow a user</summary>
&nbsp;

**Parameters:**
<table>
    <thead>
        <tr>
            <th><h5>Name</h5></th>
            <th><h5>Description</h5></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <p>
                <h6>USERNAME<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>username_1</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'DELETE' \
  'http://localhost:3000/api/profiles/username_1/follow' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/profiles/username_1/follow

**<h5>Server response</h5>**

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan=4>200</th>
      <th>Response body</th>
    </tr>
    <tr>
      <td> {
            <br>
            &nbsp; &nbsp;
            "profile": {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "username": "username_1",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "bio": null,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <br>
                &nbsp; &nbsp;
                }
        <br>
        }
      </td>
    </tr>
    <tr>
      <th>Response headers</th>
    </tr>
    <tr>
      <td>content-type: application/json </td>
    </tr>
  </tbody>
</table>

**<h5>Responses</h5>**

| <h5> Code </h5> | <h5> Description </h5>       | <h5> Links </h5>    |
| :-------------- | :--------------------------- | :------------------ |
| 200             | User unfollowed successfully | <em> No links </em> |
| 401             | Unauthorized                 | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>