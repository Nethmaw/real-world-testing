---
sidebar_position: 2
---


#  Articles

<details>
  <summary>
    <div>
       <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /articles/feed &nbsp; &nbsp; &nbsp; Get most recent articles from users you follow
    </div>
  </summary>
  
  **Parameters:**
  | Name                                       | Description                                                                       |
  | ------------------------------------------ | --------------------------------------------------------------------------------- |
  | `offset` <h6>integer</h6> <h6>(query)</h6> | <h6>The number of items to skip before starting to collect the result set.</h6> 2 |
  | `limit` <h6>integer</h6> <h6>(query)</h6>  | <h6>The numbers of items to return.</h6> 3                                        |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'GET' \
    'http://localhost:3000/api/articles/feed?offset=2&limit=3' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles/feed?offset=2&limit=3

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "articles": 
    [
        {
            "slug": "connecting-the-port-wont-do-anything-we-need-to-program-the-haptic-RSS-pixel!-120833",
            "title": "connecting the port wont do anything, we need to program the haptic RSS pixel!",
            "description": "Ea hic voluptatum omnis dolorum pariatur sed illo ea. Praesentium veniam vitae pariatur quae. Optio aspernatur aut ut recusandae.",
            "body": "Qui corrupti at eius cumque adipisci ut sunt voluptates ab. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Debitis facilis dolorum maiores aut et.\\nEa voluptas magnam deserunt at ut sunt voluptatem.\\nEt voluptatem voluptatem.\\nUt est fugiat magnam. Consequatur odit voluptatem qui.\\nQui quis sequi vel corrupti asperiores soluta rerum.\\nIusto at id quod reiciendis. Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Officia vero fugiat sit praesentium fugiat id cumque.\\nEt iste amet dolores molestiae quo dignissimos recusandae.\\nAliquam explicabo facilis asperiores ea optio.\\nExplicabo ut quia harum corrupti omnis.\\nOmnis sit mollitia qui dolorem ipsam sed aut. Ipsa cumque ad repellat qui libero quia impedit fugiat.\\nExcepturi ut vitae recusandae eos quisquam et voluptatem.\\nNeque nostrum distinctio provident eius tempore odio aliquid.\\nSaepe ut suscipit architecto. Provident saepe omnis non molestiae natus et.\\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\\nMollitia velit id eius mollitia occaecati repudiandae. Sunt hic autem eum sint quia vitae.",
            "tagList": [
                "eos",
                "nulla",
                "quaerat",
                "quos"
            ],
            "createdAt": "2022-12-09T13:45:20.603Z",
            "updatedAt": "2022-12-09T13:45:20.603Z",
            "favorited": false,
            "favoritesCount": 0,
            "author": {
                "username": "Einar Abdi",
                "bio": null,
                "image": "https://api.realworld.io/images/demo-avatar.png",
                "following": true
            }
        },
        {
            "slug": "You-cant-hack-the-card-without-indexing-the-primary-XSS-capacitor!-120833",
            "title": "You cant hack the card without indexing the primary XSS capacitor!",
            "description": "Aut facere quaerat sapiente inventore libero impedit vero. Animi harum assumenda autem sint necessitatibus fugiat. Qui eligendi et ut distinctio.",
            "body": "Ut in omnis sapiente laboriosam autem laborum.\\nRepellendus et beatae qui qui numquam saepe.\\nNon vitae molestias quos illum.\\nSed fugiat qui ullam molestias ad ullam dolore.\\nAutem ex minus distinctio dicta sapiente beatae veritatis at. Eveniet sit ipsa officiis laborum.\\nIn vel est omnis sed impedit quod magni.\\nDignissimos quis illum qui atque aut ut quasi sequi. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Laborum est maxime enim accusantium magnam.\\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\\nDeleniti consequatur explicabo aut nobis est vero tempore.\\nExcepturi earum quo quod voluptatem quo iure vel sapiente occaecati.\\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet. Ducimus dolores recusandae.\\nEa aut aperiam et aut eos inventore.\\nQuia cum ducimus autem iste.\\nQuos consequuntur est delectus temporibus autem. Animi enim quo deserunt.\\nAmet facilis at laboriosam.\\nRerum assumenda harum et sapiente suscipit ipsa fugiat.\\nSunt ut aut rem expedita consequatur optio.\\nRecusandae tenetur rerum quos culpa. Ipsam voluptate fugiat iusto illo dignissimos rerum sint placeat.\\nLabore sit omnis. Molestias non debitis quibusdam quis quod.\\nSaepe ab et hic unde et sed.\\nMagni voluptatem est.\\nEt similique quo porro et. Dolorum eius dignissimos et magnam voluptate aut voluptatem natus.\\nAut sint est eum molestiae consequatur officia omnis.\\nQuae et quam odit voluptatum itaque ducimus magni dolores ab.\\nDolorum sed iure voluptatem et reiciendis. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi.",
            "tagList": [
                "necessitatibus",
                "quas",
                "unde",
                "voluptatem"
            ],
            "createdAt": "2022-12-09T13:45:20.602Z",
            "updatedAt": "2022-12-09T13:45:20.602Z",
            "favorited": false,
            "favoritesCount": 0,
            "author": {
                "username": "Einar Abdi",
                "bio": null,
                "image": "https://api.realworld.io/images/demo-avatar.png",
                "following": true
            }
        },
        {
            "slug": "Use-the-back-end-AI-firewall-then-you-can-parse-the-optical-program!-120833",
            "title": "Use the back-end AI firewall, then you can parse the optical program!",
            "description": "Esse omnis enim odit. Veniam sed iusto. Voluptas libero accusamus. Corporis consequatur ut voluptas corporis blanditiis laudantium consequatur ea ducimus. Incidunt incidunt molestiae.",
            "body": "Doloribus consequatur et labore suscipit deserunt tempore ad quasi sed.\\nQuam cupiditate modi dolor et eos et culpa qui.\\nDelectus molestias ea id.\\nIllum ea unde sapiente non non non.\\nDolorem ut sed magni. Aut ipsa et qui vel similique sed hic a.\\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Sunt excepturi ut dolore fuga.\\nAutem eum maiores aut nihil magnam corporis consectetur sit. Voluptatem cumque molestias soluta consequatur aut voluptatibus beatae vel commodi.\\nNulla voluptatem aut. Minima qui ut nulla eius.\\nA incidunt ipsum tempore porro tempore.\\nFugit quas voluptas ducimus aut.\\nTempore nostrum velit expedita voluptate est.\\nNam iste explicabo tempore impedit voluptas. Ab quis aut earum.\\nVoluptatem sint accusantium sed cupiditate optio.\\nConsequatur in dolores aut enim.\\nNon sunt atque maxime dolores.\\nNam impedit sit. Rerum minus et quia et dolorem officiis sunt id.\\nPariatur dolorum sint blanditiis ex vero optio.\\nQuam numquam omnis porro voluptatem.",
            "tagList": ["maiores", "nostrum", "quaerat", "quas"],
            "createdAt": "2022-12-09T13:45:20.602Z",
            "updatedAt": "2022-12-09T13:45:20.602Z",
            "favorited": false,
            "favoritesCount": 1,
            "author": {
                "username": "Einar Abdi",
                "bio": null,
                "image": "https://api.realworld.io/images/demo-avatar.png",
                "following": true,
            },
        },
    ],
  "articlesCount": 24
  }
     
  ```
  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                                                           | Links    |
  | ---- | --------------------------------------------------------------------- | -------- |
  | 200  | Successfully retrieved the most recent articles from users you follow | No links |
  | 401  | Unauthorized                                                          | No links |
  | 422  | Unexpected error                                                      | No links |

</details>

<details>
  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /articles &nbsp; &nbsp; &nbsp; Get recent articles globally
    </div>
  </summary>

  **Parameters:**
  | Name                                         | Description                                                                     |
  | -------------------------------------------- | ------------------------------------------------------------------------------- |
  | `tag` <h6>string</h6> <h6>(query)</h6>       | <h6>Filter by tag set.</h6> dicta                                               |
  | `author` <h6>string</h6> <h6>(query)</h6>    | <h6>Filter by author (username)</h6> Andrey Esteban                             |
  | `favorited` <h6>string</h6> <h6>(query)</h6> | <h6>Filter by favorites of a user (username)</h6> user518                       |
  | `offset` <h6>integer</h6> <h6>(query)</h6>   | <h6>The number of items to skip before starting to collect the result set.</h6> |
  | `limit` <h6>integer</h6> <h6>(query)</h6>    | <h6>The numbers of items to return.</h6>                                        |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'GET' \
    'http://localhost:3000/api/articles?tag=dicta&author=Andrey%20Esteban&favorited=user518' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles?tag=dicta&author=Andrey%20Esteban&favorited=user518

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "articles": 
    [
        {
            "slug": "Quia...", 
            "title": "Quia doloribus...", 
            "description": "Quo nihil assumenda...", 
            "body": "Laborum est maxime...", 
            "tagList": ["dicta", "quas", "qui", "unde"], 
            "createdAt": "2022-10-09T10:09:51.618Z", 
            "updatedAt": "2022-10-09T10:09:51.618Z", 
            "favorited": true,
            "favoritesCount": 1,
            "author": {
                "username": "Andrey Esteban",
                "bio": null,
                "image": "https://api.realworld.io/images/demo-avatar.png",
                "following": false 
            }  
       }, 
       {
            "slug": "Quae...",
            "title": "Quae nemo...",
            "description": "Labore corporis blanditiis...",
            "body": "Facere consequatur...",
            "tagList": ["asperiores", "consectetur", "dicta", "nihil"],
            "createdAt": "2022-10-09T10:09:51.617Z",
            "updatedAt": "2022-10-09T10:09:51.617Z",
            "favorited": true,
            "favoritesCount": 1,
            "author": {
                "username": "Andrey Esteban",
                "bio": null,
                "image": "https://api.realworld.io/images/demo-avatar.png",
                "following": false
            }
       }
    ],
    "articlesCount": 2
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                            | Links    |
  | ---- | -------------------------------------- | -------- |
  | 200  | Global articles retrieved successfully | No links |
  | 401  | Unauthorized                           | No links |
  | 422  | Unexpected error                       | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#008000' }}>POST</span>&nbsp; &nbsp; /articles &nbsp; &nbsp; &nbsp; Create an article
    </div>
  </summary>

  **Parameters:** No parameters

  **Request Body:**
  ```json
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

  **Curl:**
  ```bash
  curl -X 'POST' \
    'http://localhost:3000/api/articles' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
    -H 'Content-Type: application/json' \
    -d '{
        "article": 
        {
            "title": "The best flowers by post: Delight delivered to your doorstep",
            "description": "Whether you’re wishing someone a happy birthday, good luck or sending roses just because, a stunning bouquet sometimes speaks louder than words.",
            "body": "There are plenty of avenues you can take to send your loved ones (or yourself) fresh arrangements without even leaving the house. Some companies are more conventional and hand deliver blooms in vases, some send blossoms in a letterbox-shaped package and many are tapping into the increasing popularity of subscription services — by sending you the most in-season flowers on a weekly or monthly basis throughout the year.",
            "tagList": [
                "Flowers", "Delivery"
            ]
        }
    }'
  ```
  
  **Request URL:**
  
  http://localhost:3000/api/articles

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 201  | See JSON below |

  ```json
  {
    "article": 
    {
        "slug": "the-best-flowers-by-post:-delight-delivered-to-your-doorstep-6",
        "title": "The best flowers by post: Delight delivered to your doorstep",
        "description": "Whether you’re wishing someone a happy birthday, good luck or sending roses just because, a stunning bouquet sometimes speaks louder than words.",
        "body": "There are plenty of avenues you can take to send your loved ones (or yourself) fresh arrangements without even leaving the house. Some companies are more conventional and hand deliver blooms in vases, some send blossoms in a letterbox-shaped package and many are tapping into the increasing popularity of subscription services — by sending you the most in-season flowers on a weekly or monthly basis throughout the year.",
        "tagList": [
            "Delivery",
            "Flowers"
        ],
        "createdAt": "2024-02-23T13:41:10.926Z",
        "updatedAt": "2024-02-23T13:41:10.926Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": 
        {
            "username": "user518",
            "bio": null,
            "image": null,
            "following": false
        }
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                  | Links    |
  | ---- | ---------------------------- | -------- |
  | 201  | Article created successfully | No links |
  | 401  | Unauthorized                 | No links |
  | 422  | Unexpected error             | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /articles/`slug` &nbsp; &nbsp; &nbsp; Get an article
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                            | Description |
  | ------------------------------------------------------------------------------- | ----------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | new-one-2   |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'GET' \
    'http://localhost:3000/api/articles/new-one-2' \
    -H 'accept: */*'
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles/new-one-2

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "article": {
        "slug": "new-one-2",
        "title": "New one",
        "description": "Slugs",
        "body": "# Slugs\n\n## What is a slug\n\n### Wrong syntax (fixed)\n\n```javascript\nconsole.log(\"HEY\")\n```\n\n- Point 1\n- Point 2\n\n1. First\n2. Second",
        "tagList": [
            "can you change me?",
            "markdown",
            "test"
        ],
        "createdAt": "2023-08-09T21:08:11.735Z",
        "updatedAt": "2023-08-09T21:19:06.178Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
            "username": "gutentag2012",
            "bio": "",
            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
            "following": true
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
  | 200  | Article retrieved successfully | No links |
  | 422  | Unexpected error               | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#FFA500' }}>PUT</span>&nbsp; &nbsp; /articles/`slug` &nbsp; &nbsp; &nbsp; Update an article
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                            | Description                |
  | ------------------------------------------------------------------------------- | -------------------------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | how-to-train-your-dragon-1 |

  **Request Body:**
  ```json
  {
    "article": {
        "body": "with enough food"
    }
  }
  ```
  
  **Responses:**

  **Curl:**
  ```bash
  curl -X 'PUT' \
    'http://localhost:3000/api/articles/how-to-train-your-dragon-1' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
    -H 'Content-Type: application/json' \
    -d '{
        "article": 
        {
            "body": "with enough food"
        }
    }'
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles/how-to-train-your-dragon-1

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "article": {
        "slug": "how-to-train-your-dragon-1",
        "title": "How to train your dragon",
        "description": "Ever wonder how?",
        "body": "with enough food",
        "tagList": [
            "dragons",
            "training"
        ],
        "createdAt": "2023-08-10T17:45:10.407Z",
        "updatedAt": "2024-02-24T01:12:25.977Z",
        "favorited": false,
        "favoritesCount": 1,
        "author": {
            "username": "u1691689493",
            "bio": null,
            "image": null,
            "following": false
        }
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                  | Links    |
  | ---- | ---------------------------- | -------- |
  | 200  | Article updated successfully | No links |
  | 401  | Unauthorized                 | No links |
  | 422  | Unexpected error             | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#EE4B2B' }}>DELETE</span>&nbsp; &nbsp; /articles/`slug` &nbsp; &nbsp; &nbsp; Delete an article
    </div>
  </summary>
  
  **Parameters:**
  
  | Name                                                                            | Description                                                    |
  | ------------------------------------------------------------------------------- | -------------------------------------------------------------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | the-best-flowers-by-post:-delight-delivered-to-your-doorstep-6 |
 
  **Responses:**

  **Curl:**
  ```bash
  curl -X 'DELETE' \
    'http://localhost:3000/api/articles/the-best-flowers-by-post%3A-delight-delivered-to-your-doorstep-6' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```

  **Request URL:**
  
  http://localhost:3000/api/articles/the-best-flowers-by-post%3A-delight-delivered-to-your-doorstep-6

  **Server response:**
  | Code | Details                        |
  | ---- | ------------------------------ |
  | 200  |                                |
  |      | **Response headers**           |
  |      | content-type: application/json |

  **Responses:**
  | Code | Description                  | Links    |
  | ---- | ---------------------------- | -------- |
  | 200  | Article deleted successfully | No links |
  | 401  | Unauthorized                 | No links |
  | 422  | Unexpected error             | No links |

</details>