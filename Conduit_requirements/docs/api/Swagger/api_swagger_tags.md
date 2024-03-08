---
sidebar_position: 6
---
#  Tags

<details>
  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /tags &nbsp; &nbsp; &nbsp; Get all tags
    </div>
  </summary>

  **Parameters:** No parameters

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'GET' \
    'http://localhost:3000/api/tags' \
    -H 'accept: */*'
  ```

  **Request URL:**
  
  http://localhost:3000/api/tags

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "tags": [
      "voluptate",
      "rerum",
      "ducimus",
      "hic",
      "maiores",
      "omnis",
      "quae",
      "possimus",
      "voluptatem",
      "cupiditate",
      "nostrum",
      "quia",
      "quaerat",
      "numquam",
      "necessitatibus",
      "vitae",
      "repellat",
      "labore",
      "dicta",
      "blanditiis",
      "facilis",
      "dolores",
      "aut",
      "consectetur",
      "ullam",
      "unde",
      "commodi",
      "excepturi",
      "sed",
      "nulla",
      "fugit",
      "vel",
      "at",
      "aliquid",
      "consequuntur",
      "consequatur",
      "esse",
      "sunt",
      "eos",
      "laborum",
      "quos",
      "quas",
      "nihil",
      "non",
      "beatae",
      "exercitationem",
      "qui",
      "id",
      "nemo",
      "quasi",
      "reiciendis",
      "neque",
      "enim",
      "tenetur",
      "voluptatibus",
      "occaecati",
      "sit",
      "est",
      "error",
      "et",
      "sequi",
      "doloribus",
      "deserunt",
      "fugiat",
      "sapiente",
      "ipsum",
      "magnam",
      "asperiores",
      "in",
      "implementations",
      "codebaseShow",
      "welcome",
      "introduction",
      "no",
      "tags",
      "needed",
      "link",
      "me",
      "markdown",
      "test",
      "can you change me?" ,
      "training",
      "dragons",
      "asd",
      "Flowers",
      "Delivery"
    ]
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                 | Links    |
  | ---- | --------------------------- | -------- |
  | 200  | Tags retrieved successfully | No links |
  | 422  | Unexpected error            | No links |

</details>