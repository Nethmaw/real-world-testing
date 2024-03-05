## Favorites

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
