---
sidebar_position: 4
---
# Profile

<details>
  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /profiles/`USERNAME` &nbsp; &nbsp; &nbsp; Get a profile
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                                | Description |
  | ----------------------------------------------------------------------------------- | ----------- |
  | `USERNAME`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | Gerome      |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'GET' \
    'http://localhost:3000/api/profiles/Gerome' \
    -H 'accept: */*'
  ```

  **Request URL:**
  
  http://localhost:3000/api/profiles/Gerome

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "profile": {
      "username": "Gerome",
      "bio": "Hello followers",
      "image": "https://api.realworld.io/images/demo-avatar.png",
      "following": true
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                    | Links    |
  | ---- | ------------------------------ | -------- |
  | 200  | Profile retrieved successfully | No links |
  | 401  | Unauthorized                   | No links |
  | 422  | Unexpected error               | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#008000' }}>POST</span>&nbsp; &nbsp; /profiles/`USERNAME`/follow &nbsp; &nbsp; &nbsp; Follow a user
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                                | Description |
  | ----------------------------------------------------------------------------------- | ----------- |
  | `USERNAME`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | username_1  |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'POST' \
    'http://localhost:3000/api/profiles/username_1/follow' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
    -d ''
  ```

  **Request URL:**
  
  http://localhost:3000/api/profiles/username_1/follow

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "profile": {
      "username": "username_1",
      "bio": null,
      "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
      "following": true
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                | Links    |
  | ---- | -------------------------- | -------- |
  | 200  | User followed successfully | No links |
  | 401  | Unauthorized               | No links |
  | 422  | Unexpected error           | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#EE4B2B' }}>DELETE</span>&nbsp; &nbsp; /profiles/`USERNAME`/follow &nbsp; &nbsp; &nbsp; Unfollow a user
    </div>
  </summary>

  **Parameters:**
  
  | Name                                                                                | Description |
  | ----------------------------------------------------------------------------------- | ----------- |
  | `USERNAME`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | username_1  |

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'DELETE' \
    'http://localhost:3000/api/profiles/username_1/follow' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```

  **Request URL:**
  
  http://localhost:3000/api/profiles/username_1/follow

  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "profile": {
      "username": "username_1",
      "bio": null,
      "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
      "following": false
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                  | Links    |
  | ---- | ---------------------------- | -------- |
  | 200  | User unfollowed successfully | No links |
  | 401  | Unauthorized                 | No links |
  | 422  | Unexpected error             | No links |

</details>