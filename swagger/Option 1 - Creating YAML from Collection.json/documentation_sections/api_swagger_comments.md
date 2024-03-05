## Comments

<details>

<summary><b><span style="color:#0096FF">GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/articles/{slug}/comments</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Get comments for an article</summary>
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
                <h6>slug<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>new-one-2</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'GET' \
  'http://localhost:3000/api/articles/new-one-2/comments' \
  -H 'accept: */*'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/new-one-2/comments

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
            "comments": [
                <br>
                &nbsp; &nbsp;
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "id": 7,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2023-08-09T21:19:18.643Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2023-08-09T21:19:18.643Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Cool article",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "gutentag2012",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": "",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp;
                },
                <br>
                &nbsp; &nbsp;
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "id": 48,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2024-02-26T14:24:05.389Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2024-02-26T14:24:05.389Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Best article ever!",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "user518",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp;
                }
            <br>
            &nbsp; &nbsp;
            ]
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

| <h5> Code </h5> | <h5> Description </h5>          | <h5> Links </h5>    |
| :-------------- | :------------------------------ | :------------------ |
| 200             | Comments retrieved successfully | <em> No links </em> |
| 401             | Unauthorized                    | <em> No links </em> |
| 422             | Unexpected error                | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#008000">POST</span>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/articles/{slug}/comments</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Create a comment for an article   </summary>
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
                <h6>slug<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive!-120803</h5></td>
        </tr>
</table>

**Request Body:**
```
{
  "comment": {
    "body": "This is my first comment."
  }
}
```
**Responses:**
**<h5>Curl</h5>**
```
curl -X 'POST' \
  'http://localhost:3000/api/articles/Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive%21-120803/comments' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  -H 'Content-Type: application/json' \
  -d '{
  "comment": {
    "body": "This is my first comment."
  }
}'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive%21-120803/comments

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
            "comments": {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "id": 47,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2024-02-26T14:06:47.730Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2024-02-26T14:06:47.730Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "This is my first comment.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "user518",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
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
| 200             | Comment created successfully | <em> No links </em> |
| 401             | Unauthorized                 | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#EE4B2B">DELETE</span> &nbsp; &nbsp; &nbsp; &nbsp;/articles/{slug}/comments/{commentId}</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Delete a comment for an article</summary>
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
                <h6>slug<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>new-one-2</h5></td>
        </tr>
                <tr>
            <td>
            <p>
                <h6>commentId<sup><span style="color:#EE4B2B"> * required</span></sup>
                <br>
                string
                <br>
                (path)
                </h6>
            </p>
            </td>
            <td><h5>48</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'DELETE' \
  'http://localhost:3000/api/articles/new-one-2/comments/48' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/new-one-2/comments/48

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
    </tr>
    <tr>
      <td> 
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
| 200             | Comment deleted successfully | <em> No links </em> |
| 401             | Unauthorized                 | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>