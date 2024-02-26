## Swagger
### User and Authentication

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
            <td rowspan=4><b><h5>201</h5</b></td>
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

<summary><b><span style="color:#0096FF">GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/user</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Get current user</summary>
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

<summary><b><span style="color:#FFA500">PUT</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /user</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Update current user</summary>
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

</details>

### Articles

<details>

<summary><b><span style="color:#0096FF">GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/articles/feed</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Get most recent articles from users you follow </summary>
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
            <td rowspan="2">
                <p>
                    <h5>offset
                    <br>
                    integer
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>The number of items to skip before starting to collect the result set.
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    <h5>2</h5>
                </p>
            </td>
        </tr>
        <tr>
            <td rowspan="2">
                <p>
                    <h5>limit
                    <br>
                    integer
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>The numbers of items to return.
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    <h5>3</h5>
                </p>
            </td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'GET' \
  'http://localhost:3000/api/articles/feed?offset=2&limit=3' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/feed?offset=2&limit=3

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
            "articles": [
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "connecting-the-port-wont-do-anything-we-need-to-program-the-haptic-RSS-pixel!-120833",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "connecting the port wont do anything, we need to program the haptic RSS pixel!",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Ea hic voluptatum omnis dolorum pariatur sed illo ea. Praesentium veniam vitae pariatur quae. Optio aspernatur aut ut recusandae.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Qui corrupti at eius cumque adipisci ut sunt voluptates ab. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Debitis facilis dolorum maiores aut et.\\nEa voluptas magnam deserunt at ut sunt voluptatem.\\nEt voluptatem voluptatem.\\nUt est fugiat magnam. Consequatur odit voluptatem qui.\\nQui quis sequi vel corrupti asperiores soluta rerum.\\nIusto at id quod reiciendis. Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Officia vero fugiat sit praesentium fugiat id cumque.\\nEt iste amet dolores molestiae quo dignissimos recusandae.\\nAliquam explicabo facilis asperiores ea optio.\\nExplicabo ut quia harum corrupti omnis.\\nOmnis sit mollitia qui dolorem ipsam sed aut. Ipsa cumque ad repellat qui libero quia impedit fugiat.\\nExcepturi ut vitae recusandae eos quisquam et voluptatem.\\nNeque nostrum distinctio provident eius tempore odio aliquid.\\nSaepe ut suscipit architecto. Provident saepe omnis non molestiae natus et.\\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\\nMollitia velit id eius mollitia occaecati repudiandae. Sunt hic autem eum sint quia vitae.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "eos",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "nulla",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "quaerat",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "quos"
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2022-12-09T13:45:20.603Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      "updatedAt": "2022-12-09T13:45:20.603Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 0,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "Einar Abdi",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": "https://api.realworld.io/images/demo-avatar.png",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": true
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                },
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "You-cant-hack-the-card-without-indexing-the-primary-XSS-capacitor!-120833",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "You cant hack the card without indexing the primary XSS capacitor!",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Aut facere quaerat sapiente inventore libero impedit vero. Animi harum assumenda autem sint necessitatibus fugiat. Qui eligendi et ut distinctio.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Ut in omnis sapiente laboriosam autem laborum.\\nRepellendus et beatae qui qui numquam saepe.\\nNon vitae molestias quos illum.\\nSed fugiat qui ullam molestias ad ullam dolore.\\nAutem ex minus distinctio dicta sapiente beatae veritatis at. Eveniet sit ipsa officiis laborum.\\nIn vel est omnis sed impedit quod magni.\\nDignissimos quis illum qui atque aut ut quasi sequi. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Laborum est maxime enim accusantium magnam.\\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\\nDeleniti consequatur explicabo aut nobis est vero tempore.\\nExcepturi earum quo quod voluptatem quo iure vel sapiente occaecati.\\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet. Ducimus dolores recusandae.\\nEa aut aperiam et aut eos inventore.\\nQuia cum ducimus autem iste.\\nQuos consequuntur est delectus temporibus autem. Animi enim quo deserunt.\\nAmet facilis at laboriosam.\\nRerum assumenda harum et sapiente suscipit ipsa fugiat.\\nSunt ut aut rem expedita consequatur optio.\\nRecusandae tenetur rerum quos culpa. Ipsam voluptate fugiat iusto illo dignissimos rerum sint placeat.\\nLabore sit omnis. Molestias non debitis quibusdam quis quod.\\nSaepe ab et hic unde et sed.\\nMagni voluptatem est.\\nEt similique quo porro et. Dolorum eius dignissimos et magnam voluptate aut voluptatem natus.\\nAut sint est eum molestiae consequatur officia omnis.\\nQuae et quam odit voluptatum itaque ducimus magni dolores ab.\\nDolorum sed iure voluptatem et reiciendis. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "necessitatibus",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "quas",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "unde",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "voluptatem"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2022-12-09T13:45:20.602Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2022-12-09T13:45:20.602Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 0,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "Einar Abdi",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": "https://api.realworld.io/images/demo-avatar.png",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": true
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                },
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "Use-the-back-end-AI-firewall-then-you-can-parse-the-optical-program!-120833",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "Use the back-end AI firewall, then you can parse the optical program!",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Esse omnis enim odit. Veniam sed iusto. Voluptas libero accusamus. Corporis consequatur ut voluptas corporis blanditiis laudantium consequatur ea ducimus. Incidunt incidunt molestiae.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Doloribus consequatur et labore suscipit deserunt tempore ad quasi sed.\\nQuam cupiditate modi dolor et eos et culpa qui.\\nDelectus molestias ea id.\\nIllum ea unde sapiente non non non.\\nDolorem ut sed magni. Aut ipsa et qui vel similique sed hic a.\\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Sunt excepturi ut dolore fuga.\\nAutem eum maiores aut nihil magnam corporis consectetur sit. Voluptatem cumque molestias soluta consequatur aut voluptatibus beatae vel commodi.\\nNulla voluptatem aut. Minima qui ut nulla eius.\\nA incidunt ipsum tempore porro tempore.\\nFugit quas voluptas ducimus aut.\\nTempore nostrum velit expedita voluptate est.\\nNam iste explicabo tempore impedit voluptas. Ab quis aut earum.\\nVoluptatem sint accusantium sed cupiditate optio.\\nConsequatur in dolores aut enim.\\nNon sunt atque maxime dolores.\\nNam impedit sit. Rerum minus et quia et dolorem officiis sunt id.\\nPariatur dolorum sint blanditiis ex vero optio.\\nQuam numquam omnis porro voluptatem.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "maiores",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "nostrum",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "quaerat",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "quas"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2022-12-09T13:45:20.602Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2022-12-09T13:45:20.602Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 1,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "Einar Abdi",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": "https://api.realworld.io/images/demo-avatar.png",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": true
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                }
            <br>
            &nbsp; &nbsp;
            ],
       <br>
       &nbsp; &nbsp;
       "articlesCount": 24
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

| <h5> Code </h5> | <h5> Description </h5>                                                | <h5> Links </h5>    |
| :-------------- | :-------------------------------------------------------------------- | :------------------ |
| 200             | Successfully retrieved the most recent articles from users you follow | <em> No links </em> |
| 401             | Unauthorized                                                          | <em> No links </em> |
| 422             | Unexpected error                                                      | <em> No links </em> |

</details>

<details>

<summary>
<span style="color:#0096FF"><b>GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/articles</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Get recent articles globally</span></summary>
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
            <td rowspan="2">
                <p>
                    <h5>tag
                    <br>
                    string
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>Filter by tag
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    <h5>dicta</h5>
                </p>
            </td>
        </tr>
        <tr>
            <td rowspan="2">
                <p>
                    <h5>author
                    <br>
                    string
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>Filter by author (username)
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    <h5>Andrey Esteban</h5>
                </p>
            </td>
        </tr>
        <tr>
            <td rowspan="2">
                <p>
                    <h5>favorited
                    <br>
                    string
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>Filter by favorites of a user (username)
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    <h5>user518</h5>
                </p>
            </td>
        </tr>
        <tr>
            <td rowspan="2">
                <p>
                    <h5>offset
                    <br>
                    integer
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>The number of items to skip before starting to collect the result set.
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
        <tr>
            <td rowspan="2">
                <p>
                    <h5>limit
                    <br>
                    integer
                    <br>
                    (query)
                    </h5>
                </p>
            </td>
            <td>
                <p>
                    <h5>The numbers of items to return.
                    </h5>
                </p>
            </td>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
</table>

**Responses:** 

##### **Curl** #####

```
curl -X 'GET' \
  'http://localhost:3000/api/articles?tag=dicta&author=Andrey%20Esteban&favorited=user518' \
  -H 'accept: */*' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
```

##### **Request URL** #####

http://localhost:3000/api/articles?tag=dicta&author=Andrey%20Esteban&favorited=user518

##### **Server response** #####

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
            "articles": [
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "Quia-doloribus-occaecati-esse-exercitationem-fugiat-reiciendis-aliquid-rerum-tenetur-quasi-sit-at-unde-rerum-quasi-voluptate-quas-consequatur-magnam-blanditiis-dicta-ducimus-voluptate-est-sapiente-at-quaerat-ullam-excepturi-qui-dicta-quia-voluptatibus-sequi-error-consequatur-neque-dolores-labore-occaecati-reiciendis-excepturi-quae-labore-nemo.-Nulla-nulla-non-labore-dicta.-Excepturi-id-laborum-aut-nostrum-qui-qui-ducimus-numquam-at-quos-blanditiis-consequatur-laborum-sunt-sapiente-sapiente-ullam-quasi-fugiat-voluptatem-sunt-nihil-commodi-at-voluptatem.-Reiciendis-excepturi-quae-commodi-nemo.-Neque-sed-possimus-et-sunt-consequatur-nostrum-est-sunt-id-sunt-doloribus-enim-deserunt-omnis-nostrum-fugit-est-neque-necessitatibus-necessitatibus-rerum-ducimus-sed-ullam-magnam-fugiat-deserunt-at-ullam-enim-occaecati-exercitationem-deserunt-omnis-excepturi-neque-rerum-nulla-voluptatibus-sequi-non-vel-quas-ullam-tenetur-nulla-eos-repellat-commodi.-105570",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "Quia doloribus occaecati esse exercitationem, fugiat reiciendis aliquid rerum tenetur quasi sit at unde, rerum quasi voluptate quas consequatur magnam, blanditiis dicta ducimus voluptate est sapiente at quaerat ullam excepturi qui dicta, quia voluptatibus sequi, error consequatur neque dolores labore occaecati reiciendis excepturi quae labore nemo.\nNulla nulla non labore dicta.\nExcepturi id laborum aut nostrum qui qui ducimus numquam at quos blanditiis consequatur laborum sunt sapiente sapiente ullam quasi fugiat voluptatem sunt nihil commodi at voluptatem.\nReiciendis excepturi quae commodi nemo.\nNeque sed possimus et sunt consequatur nostrum est sunt id sunt doloribus enim deserunt, omnis nostrum fugit est neque necessitatibus necessitatibus rerum ducimus sed ullam magnam fugiat deserunt at, ullam enim occaecati exercitationem deserunt, omnis excepturi neque rerum nulla voluptatibus sequi non vel quas ullam, tenetur nulla eos repellat commodi.\n",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Quo nihil assumenda corrupti nobis provident tenetur et. Molestiae unde explicabo nihil maxime. Quidem molestiae velit laborum amet rerum tenetur. Error non aspernatur suscipit asperiores voluptas ipsa dolor. Similique itaque omnis.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Laborum est maxime enim accusantium magnam.\\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\\nDeleniti consequatur explicabo aut nobis est vero tempore.\\nExcepturi earum quo quod voluptatem quo iure vel sapiente occaecati.\\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet. Autem reiciendis provident iure possimus.\\nOccaecati soluta quibusdam libero tenetur minus vel sit illo.\\nCulpa optio dolorem eos similique voluptatem voluptatibus error accusantium. Dolores accusamus ducimus suscipit neque fugit quo aliquam.\\nOdit eum eum sint accusamus.\\nQuod ipsum sed placeat.\\nEt culpa voluptas et quod atque a.\\nVoluptatibus rerum nihil quia cupiditate nihil facere beatae dolor. Sed odit quidem qui sed eum id eligendi laboriosam. Laborum excepturi numquam sequi reiciendis voluptate repellat sint.\\nQui inventore ipsam voluptatem sit quos.\\nDolorem aut quod suscipit fugiat culpa.\\nOdio nostrum praesentium accusantium dolor quo. Voluptatem velit ut deserunt.\\nQuibusdam eius repellat. Nemo repudiandae molestiae.\\nNobis sed ducimus aperiam.\\nBeatae cupiditate praesentium in omnis. Ipsum eos ipsam.\\nAperiam quia quis sit fugiat saepe voluptas est.\\nDolores et veniam ut.\\nQuibusdam voluptatum quis.\\nEt omnis ut corporis. Dolores accusamus ducimus suscipit neque fugit quo aliquam.\\nOdit eum eum sint accusamus.\\nQuod ipsum sed placeat.\\nEt culpa voluptas et quod atque a.\\nVoluptatibus rerum nihil quia cupiditate nihil facere beatae dolor. Facere consequatur ullam.\\nSint illum iste ab et saepe sit ut quis voluptatibus.\\nQuo esse dolorum a quasi nihil.\\nError quo eveniet.\\nQuia aut rem quia in iste fugit ad.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "dicta",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "quas",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "qui",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "unde"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2022-10-09T10:09:51.618Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2022-10-09T10:09:51.618Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": true,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 1,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "Andrey Esteban",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": "https://api.realworld.io/images/demo-avatar.png",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                },
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "Quae-nemo-esse-voluptatem-repellat-consequuntur-unde-asperiores-sed-tenetur-deserunt-aut-at-magnam-tenetur-voluptatibus-numquam-blanditiis-est-beatae-tenetur-aut-hic-blanditiis-voluptatibus-voluptate-repellat-numquam-maiores-deserunt-nulla-in-possimus-magnam-rerum-id-rerum-in-id-necessitatibus-commodi-numquam-nihil-deserunt-doloribus-doloribus-enim-sunt-in-ullam.-Dicta-voluptatem-fugiat-error-commodi-est-ducimus-facilis-doloribus-quae-ipsum.-Consequatur-enim-quaerat-sed-voluptatibus-non-numquam-nihil.-Laborum-vel-quia-exercitationem-rerum-repellat-aut-ducimus-beatae-facilis-dolores-aliquid-nostrum-laborum-quaerat-voluptatibus-dolores-dolores-voluptatibus-sit-quia-sequi-asperiores-quas-non-hic.-Quos-in-quos-neque-asperiores-sunt-enim-sequi-dicta-reiciendis-commodi-maiores-voluptatem-error-exercitationem-facilis-quia-beatae-ducimus-repellat-vitae-error-at-nostrum-quas-ullam-vel-vel-exercitationem-ducimus-exercitationem-vel-nulla-voluptatem-aut-voluptatem-dolores-sed.-105570",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "Quae nemo esse voluptatem repellat consequuntur unde asperiores sed tenetur deserunt aut at magnam tenetur voluptatibus numquam blanditiis est beatae tenetur aut hic blanditiis voluptatibus voluptate repellat numquam maiores deserunt nulla in possimus magnam rerum id rerum in id necessitatibus commodi numquam nihil deserunt doloribus doloribus enim sunt in ullam.\nDicta voluptatem fugiat error commodi est ducimus facilis doloribus quae ipsum.\nConsequatur enim quaerat sed voluptatibus non numquam, nihil.\nLaborum vel quia exercitationem rerum repellat aut ducimus beatae facilis dolores aliquid nostrum laborum quaerat voluptatibus dolores dolores voluptatibus sit quia sequi asperiores quas non, hic.\nQuos in quos neque asperiores sunt enim sequi dicta reiciendis, commodi maiores voluptatem error exercitationem facilis quia, beatae ducimus repellat vitae error at nostrum quas ullam vel vel exercitationem ducimus exercitationem vel nulla voluptatem, aut voluptatem dolores sed.\n",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Labore corporis blanditiis dolorum nemo nam praesentium alias sequi inventore. Cupiditate rerum enim sint quis. Eum occaecati provident labore veniam deserunt vero sed soluta repellat. Cum sapiente pariatur et ea a recusandae et optio. Sequi doloribus reiciendis corrupti quidem accusamus est nesciunt. Excepturi accusamus consequatur est sed maiores excepturi autem.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "Facere consequatur ullam.\\nSint illum iste ab et saepe sit ut quis voluptatibus.\\nQuo esse dolorum a quasi nihil.\\nError quo eveniet.\\nQuia aut rem quia in iste fugit ad. Consequatur odit voluptatem qui.\\nQui quis sequi vel corrupti asperiores soluta rerum.\\nIusto at id quod reiciendis. Nisi vitae nostrum perspiciatis impedit laborum repellat ullam et ut. Quos pariatur tenetur.\\nQuasi omnis eveniet eos maiores esse magni possimus blanditiis.\\nQui incidunt sit quos consequatur aut qui et aperiam delectus.\\nPraesentium quas culpa.\\nEaque occaecati cumque incidunt et. Dolores accusamus ducimus suscipit neque fugit quo aliquam.\\nOdit eum eum sint accusamus.\\nQuod ipsum sed placeat.\\nEt culpa voluptas et quod atque a.\\nVoluptatibus rerum nihil quia cupiditate nihil facere beatae dolor. Nesciunt numquam velit nihil qui quia eius. Eveniet sit ipsa officiis laborum.\\nIn vel est omnis sed impedit quod magni.\\nDignissimos quis illum qui atque aut ut quasi sequi. Deserunt ab porro similique est accusamus id enim aut suscipit.\\nSoluta reprehenderit error nesciunt odit veniam sed.\\nDolore optio qui aut ab.\\nAut minima provident eius repudiandae a quibusdam in nisi quam. Sunt dolor maxime nam assumenda non beatae magni molestias quia. Minima qui ut nulla eius.\\nA incidunt ipsum tempore porro tempore.\\nFugit quas voluptas ducimus aut.\\nTempore nostrum velit expedita voluptate est.\\nNam iste explicabo tempore impedit voluptas.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "asperiores",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "consectetur",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "dicta",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "nihil"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2022-10-09T10:09:51.617Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2022-10-09T10:09:51.617Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": true,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 1,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "username": "Andrey Esteban",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "bio": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "image": "https://api.realworld.io/images/demo-avatar.png",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
                <br>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                }
            <br>
            &nbsp; &nbsp;
            ],
       <br>
       &nbsp; &nbsp;
       "articlesCount": 2
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

##### **Responses** #####

| <h5> Code </h5> | <h5> Description </h5>                 | <h5> Links </h5>    |
| :-------------- | :------------------------------------- | :------------------ |
| 200             | Global articles retrieved successfully | <em> No links </em> |
| 401             | Unauthorized                           | <em> No links </em> |
| 422             | Unexpected error                       | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#008000">POST</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /articles</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Create an article</summary>
&nbsp;

**Parameters:** No parameters

**Request Body:**
```
{
  "article": {
    "title": "The best flowers by post: Delight delivered to your doorstep",
    "description": "Whether you’re wishing someone a happy birthday, good luck or sending roses just because, a stunning bouquet sometimes speaks louder than words.",
    "body": "There are plenty of avenues you can take to send your loved ones (or yourself) fresh arrangements without even leaving the house. Some companies are more conventional and hand deliver blooms in vases, some send blossoms in a letterbox-shaped package and many are tapping into the increasing popularity of subscription services — by sending you the most in-season flowers on a weekly or monthly basis throughout the year.",
    "tagList": [
      "Flowers", "Delivery"
    ]
  }
}
```

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'POST' \
  'http://localhost:3000/api/articles' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
  -H 'Content-Type: application/json' \
  -d '{
  "article": {
    "title": "The best flowers by post: Delight delivered to your doorstep",
    "description": "Whether you’re wishing someone a happy birthday, good luck or sending roses just because, a stunning bouquet sometimes speaks louder than words.",
    "body": "There are plenty of avenues you can take to send your loved ones (or yourself) fresh arrangements without even leaving the house. Some companies are more conventional and hand deliver blooms in vases, some send blossoms in a letterbox-shaped package and many are tapping into the increasing popularity of subscription services — by sending you the most in-season flowers on a weekly or monthly basis throughout the year.",
    "tagList": [
      "Flowers", "Delivery"
    ]
  }
}'

```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles

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
            <td rowspan=4><b><h5>201</h5</b></td>
            <td><b><h5>Response Body</h5></b></td>
        </tr>
        <tr>
            <td rowspan=1>
            {
                <br>
                &nbsp;&nbsp; &nbsp; &nbsp; "article":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "the-best-flowers-by-post:-delight-delivered-to-your-doorstep-6",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "The best flowers by post: Delight delivered to your doorstep",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Whether you’re wishing someone a happy birthday, good luck or sending roses just because, a stunning bouquet sometimes speaks louder than words.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "There are plenty of avenues you can take to send your loved ones (or yourself) fresh arrangements without even leaving the house. Some companies are more conventional and hand deliver blooms in vases, some send blossoms in a letterbox-shaped package and many are tapping into the increasing popularity of subscription services — by sending you the most in-season flowers on a weekly or monthly basis throughout the year.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "Delivery",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "Flowers"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2024-02-23T13:41:10.926Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2024-02-23T13:41:10.926Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 0,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        "username": "user518",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    
                        "bio": null,                
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        "image": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
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
| 201             | Article created successfully | <em> No links </em> |
| 401             | Unauthorized                 | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#0096FF">GET</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /articles/{slug}</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Get an article </summary>
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
  'http://localhost:3000/api/articles/new-one-2' \
  -H 'accept: */*'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/new-one-2

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
                &nbsp;&nbsp; &nbsp; &nbsp; "article":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; 
                {
                <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "new-one-2",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "New one",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Slugs",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "# Slugs\n\n## What is a slug\n\n### Wrong syntax (fixed)\n\n```javascript\nconsole.log(\"HEY\")\n```\n\n- Point 1\n- Point 2\n\n1. First\n2. Second",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "can you change me?",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "markdown",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "test"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2023-08-09T21:08:11.735Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2023-08-09T21:19:06.178Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 0,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        "username": "gutentag2012",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    
                        "bio": "",               
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": true
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
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

| <h5> Code </h5> | <h5> Description </h5>         | <h5> Links </h5>    |
| :-------------- | :----------------------------- | :------------------ |
| 200             | Article retrieved successfully | <em> No links </em> |
| 422             | Unexpected error               | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#FFA500">PUT</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /articles/{slug}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Update an article </summary>
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
            <td rowspan=2>
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
            <td><h5>how-to-train-your-dragon-1</h5></td>
        </tr>
</table>

**Request Body:**
```
{
  "article": {
    "body": "with enough food"
  }
}
```
**Responses:**
**<h5>Curl</h5>**
```
curl -X 'PUT' \
  'http://localhost:3000/api/articles/how-to-train-your-dragon-1' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
  -H 'Content-Type: application/json' \
  -d '{
  "article": {
    "body": "with enough food"
  }
}'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/how-to-train-your-dragon-1

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
                &nbsp;&nbsp; &nbsp; &nbsp; "article": {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "slug": "how-to-train-your-dragon-1",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "title": "How to train your dragon",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "description": "Ever wonder how?",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "body": "with enough food",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tagList": [
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "dragons",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "training"
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "createdAt": "2023-08-10T17:45:10.407Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "updatedAt": "2024-02-24T01:12:25.977Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "favoritesCount": 1,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "author": {
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        "username": "u1691689493",
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    
                        "bio": null,               
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        "image": null,
                        <br>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        "following": false
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    }
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
| 200             | Article updated successfully | <em> No links </em> |
| 401             | Unauthorized                 | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#EE4B2B">DELETE</span>&nbsp; &nbsp; &nbsp; &nbsp; /articles/{slug}</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Delete an article </summary>
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
            <td><h5>the-best-flowers-by-post:-delight-delivered-to-your-doorstep-6</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'DELETE' \
  'http://localhost:3000/api/articles/the-best-flowers-by-post%3A-delight-delivered-to-your-doorstep-6' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/the-best-flowers-by-post%3A-delight-delivered-to-your-doorstep-6

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
            <td rowspan=3><b><h5>200</h5</b></td>
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
| 200             | Article deleted successfully | <em> No links </em> |
| 401             | Unauthorized                 | <em> No links </em> |
| 422             | Unexpected error             | <em> No links </em> |

</details>

### Favorites


<details>

<summary><b><span style="color:#008000">POST</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/articles/{slug}/favorite</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Favorite an article</summary>
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
            <td rowspan=2>
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
            <td><h5>this-is-my-article-1</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'POST' \
  'http://localhost:3000/api/articles/this-is-my-article-1/favorite' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'\
  -d ''
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/this-is-my-article-1/favorite

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
                &nbsp;&nbsp; &nbsp; &nbsp; "article":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "slug": "this-is-my-article-1",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "title": "This is my article",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "description": "nothing really",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "body": "# This is the title\n\nThis is the body\n\n## Also subtitle here\n\nHey you",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tagList": [ ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "createdAt": "2023-08-09T17:20:17.753Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "updatedAt": "2023-08-09T17:20:17.753Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "favorited": true,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "favoritesCount": 1,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "author": {
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "username": "gutentag2012",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "bio": "",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "following": false
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
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

| <h5> Code </h5> | <h5> Description </h5>         | <h5> Links </h5>    |
| :-------------- | :----------------------------- | :------------------ |
| 200             | Article favorited successfully | <em> No links </em> |
| 401             | Unauthorized                   | <em> No links </em> |
| 422             | Unexpected error               | <em> No links </em> |

</details>

<details>

<summary><b><span style="color:#EE4B2B">DELETE</span> &nbsp; &nbsp; &nbsp; /articles/{slug}/favorite</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Unfavorite an article</summary>
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
            <td rowspan=2>
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
            <td><h5>We-need-to-navigate-the-virtual-SSL-transmitter!-120833</h5></td>
        </tr>
</table>

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'DELETE' \
  'http://localhost:3000/api/articles/We-need-to-navigate-the-virtual-SSL-transmitter%21-120833/favorite' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/articles/We-need-to-navigate-the-virtual-SSL-transmitter%21-120833/favorite

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
                &nbsp;&nbsp; &nbsp; &nbsp; "article":
                <br>
                &nbsp; &nbsp;&nbsp; &nbsp; {
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "slug": "We-need-to-navigate-the-virtual-SSL-transmitter!-120833",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "title": "We need to navigate the virtual SSL transmitter!",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "description": "Consequuntur nihil a id. Consequatur est cum excepturi aut labore odit quo molestiae molestiae. Soluta voluptatem ducimus cupiditate. Dolorum eveniet aliquid aut repudiandae et illo et. Harum unde ut harum accusamus suscipit quia.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "body": "Commodi est rerum dolorum quae voluptatem aliquam. Omnis quidem vero eius sed laudantium a ex a saepe.\\nModi qui laudantium in libero odit et impedit. Sapiente maxime sequi. Sapiente vitae culpa ut voluptatem incidunt excepturi voluptates exercitationem.\\nSed doloribus alias consectetur omnis occaecati ad placeat labore.\\nVoluptate consequatur expedita nemo recusandae sint assumenda.\\nQui vel totam quia fugit saepe suscipit autem quasi qui.\\nEt eum vel ut delectus ut nesciunt animi. Est aut quis soluta accusantium debitis vel.\\nQuisquam aliquid ex corporis velit. Totam ab necessitatibus quidem non. In ipsam mollitia placeat quia adipisci rerum labore repellat. Officia vero fugiat sit praesentium fugiat id cumque.\\nEt iste amet dolores molestiae quo dignissimos recusandae.\\nAliquam explicabo facilis asperiores ea optio.\\nExplicabo ut quia harum corrupti omnis.\\nOmnis sit mollitia qui dolorem ipsam sed aut. Eos pariatur eos fugit aut aperiam labore beatae.\\nVel non ea id dignissimos voluptate quis error assumenda consectetur.\\nRerum quas libero totam error facere sunt facilis quo.\\nEveniet debitis et aliquid ratione. Debitis facilis dolorum maiores aut et.\\nEa voluptas magnam deserunt at ut sunt voluptatem.\\nEt voluptatem voluptatem.\\nUt est fugiat magnam.",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tagList": [ ],
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "createdAt": "2022-12-09T13:45:20.602Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "updatedAt": "2022-12-09T13:45:20.602Z",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "favorited": false,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "favoritesCount": 0,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "author": {
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "username": "Einar Abdi",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "bio": null,
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "image": "https://api.realworld.io/images/demo-avatar.png",
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            "following": false
                            <br>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }
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

| <h5> Code </h5> | <h5> Description </h5>           | <h5> Links </h5>    |
| :-------------- | :------------------------------- | :------------------ |
| 200             | Article unfavorited successfully | <em> No links </em> |
| 401             | Unauthorized                     | <em> No links </em> |
| 422             | Unexpected error                 | <em> No links </em> |

</details>

### Comments

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

### Profile


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

<summary><b><span style="color:#EE4B2B">DELETE</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /profiles/{USERNAME}/follow</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Unfollow a user</summary>
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

### Tags

<details>

<summary><b><span style="color:#0096FF">GET</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /tags</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Get all tags</summary>
&nbsp;

**Parameters:** No parameters

**Responses:**
**<h5>Curl</h5>**
```
curl -X 'GET' \
  'http://localhost:3000/api/tags' \
  -H 'accept: */*'
```
**<h5>Request URL</h5>**
http://localhost:3000/api/tags

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
            "tags": [
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "voluptate",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "rerum",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "ducimus",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "hic",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "maiores",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "omnis",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "quae",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "possimus",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "voluptatem",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "cupiditate",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "nostrum",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "quia",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "quaerat",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "numquam",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "necessitatibus",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "vitae",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "repellat",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "labore",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "dicta",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "blanditiis",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "facilis",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "dolores",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "aut",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "consectetur",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "ullam",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "unde",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "commodi",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "excepturi",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "sed",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "nulla",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "fugit",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "vel",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "at",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "aliquid",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "consequuntur",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "consequatur",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "esse",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "sunt",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "eos",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "laborum",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "quos",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "quas",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "nihil",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "non",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "beatae",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "exercitationem",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "qui",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "id",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "nemo",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "quasi",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "reiciendis",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "neque",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "enim",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tenetur",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "voluptatibus",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "occaecati",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "sit",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "est",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "error",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "et",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "sequi",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "doloribus",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "deserunt",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "fugiat",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "sapiente",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "ipsum",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "magnam",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "asperiores",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "in",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "implementations",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "codebaseShow",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "welcome",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "introduction",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "no",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "tags",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "needed",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "link",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "me",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "markdown",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "test",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "can you change me?" ,
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "training",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "dragons",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "asd",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "Flowers",
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    "Delivery"
                    <br>
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

| <h5> Code </h5> | <h5> Description </h5>      | <h5> Links </h5>    |
| :-------------- | :-------------------------- | :------------------ |
| 200             | Tags retrieved successfully | <em> No links </em> |
| 422             | Unexpected error            | <em> No links </em> |

</details>