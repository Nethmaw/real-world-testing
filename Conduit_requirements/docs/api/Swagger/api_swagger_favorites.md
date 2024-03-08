---
sidebar_position: 5
---
# Favorites

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#008000' }}>POST</span>&nbsp; &nbsp; /articles/`slug`/favorite &nbsp; &nbsp; &nbsp; Favorite an article
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                            | Description          |
  | ------------------------------------------------------------------------------- | -------------------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | this-is-my-article-1 |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'POST' \
    'http://localhost:3000/api/articles/this-is-my-article-1/favorite' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'\
    -d ''
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles/this-is-my-article-1/favorite

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "article": {
        "slug": "this-is-my-article-1",
        "title": "This is my article",
        "description": "nothing really",
        "body": "# This is the title\n\nThis is the body\n\n## Also subtitle here\n\nHey you",
        "tagList": [ ],
        "createdAt": "2023-08-09T17:20:17.753Z",
        "updatedAt": "2023-08-09T17:20:17.753Z",
        "favorited": true,
        "favoritesCount": 1,
        "author": {
            "username": "gutentag2012",
            "bio": "",
            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
            "following": false
        }
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                    | Links    |
  | ---- | ------------------------------ | -------- |
  | 200  | Article favorited successfully | No links |
  | 401  | Unauthorized                   | No links |
  | 422  | Unexpected error               | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#EE4B2B' }}>DELETE</span>&nbsp; &nbsp; /articles/`slug`/favorite &nbsp; &nbsp; &nbsp; Unfavorite an article
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                            | Description                                             |
  | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | We-need-to-navigate-the-virtual-SSL-transmitter!-120833 |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'DELETE' \
    'http://localhost:3000/api/articles/We-need-to-navigate-the-virtual-SSL-transmitter%21-120833/favorite' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles/We-need-to-navigate-the-virtual-SSL-transmitter%21-120833/favorite

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "article": 
    {
        "slug": "We-need-to-navigate-the-virtual-SSL-transmitter!-120833",
        "title": "We need to navigate the virtual SSL transmitter!",
        "description": "Consequuntur nihil a id. Consequatur est cum excepturi aut labore odit quo molestiae molestiae. Soluta voluptatem ducimus cupiditate. Dolorum eveniet aliquid aut repudiandae et illo et. Harum unde ut harum accusamus suscipit quia.",
        "body": "Commodi est rerum dolorum quae voluptatem aliquam. Omnis quidem vero eius sed laudantium a ex a saepe.\\nModi qui laudantium in libero odit et impedit. Sapiente maxime sequi. Sapiente vitae culpa ut voluptatem incidunt excepturi voluptates exercitationem.\\nSed doloribus alias consectetur omnis occaecati ad placeat labore.\\nVoluptate consequatur expedita nemo recusandae sint assumenda.\\nQui vel totam quia fugit saepe suscipit autem quasi qui.\\nEt eum vel ut delectus ut nesciunt animi. Est aut quis soluta accusantium debitis vel.\\nQuisquam aliquid ex corporis velit. Totam ab necessitatibus quidem non. In ipsam mollitia placeat quia adipisci rerum labore repellat. Officia vero fugiat sit praesentium fugiat id cumque.\\nEt iste amet dolores molestiae quo dignissimos recusandae.\\nAliquam explicabo facilis asperiores ea optio.\\nExplicabo ut quia harum corrupti omnis.\\nOmnis sit mollitia qui dolorem ipsam sed aut. Eos pariatur eos fugit aut aperiam labore beatae.\\nVel non ea id dignissimos voluptate quis error assumenda consectetur.\\nRerum quas libero totam error facere sunt facilis quo.\\nEveniet debitis et aliquid ratione. Debitis facilis dolorum maiores aut et.\\nEa voluptas magnam deserunt at ut sunt voluptatem.\\nEt voluptatem voluptatem.\\nUt est fugiat magnam.",
        "tagList": [ ],
        "createdAt": "2022-12-09T13:45:20.602Z",
        "updatedAt": "2022-12-09T13:45:20.602Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
            "username": "Einar Abdi",
            "bio": null,
            "image": "https://api.realworld.io/images/demo-avatar.png",
            "following": false
        }
    }
  }   
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                      | Links    |
  | ---- | -------------------------------- | -------- |
  | 200  | Article unfavorited successfully | No links |
  | 401  | Unauthorized                     | No links |
  | 422  | Unexpected error                 | No links |

</details>