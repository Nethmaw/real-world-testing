---
sidebar_position: 1
---
# User Authentication


<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#008000' }}>POST</span>&nbsp; &nbsp; /users &nbsp; &nbsp; &nbsp; Register a new user
    </div>
  </summary>

  **Parameters:** No parameters

  **Request Body:**
  ```json
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

  **Curl:**
  ```bash
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

  **Request URL:**
  
  http://localhost:3000/api/users

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 201  | See JSON below |

  ```json
  {
    "user": {
        "email": "user518@testing.com",
        "username": "user518",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDgzNTMxNjB9.qvYt8vvmA-Q6JCCjL0MSAvtw2iiO4Kmzna9ai6_BqxQ",
        "bio": null,
        "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                  | Links    |
  | ---- | ---------------------------- | -------- |
  | 201  | User registered successfully | No links |
  | 422  | Unexpected error             | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#008000' }}>POST</span>&nbsp; &nbsp; /users/login &nbsp; &nbsp; &nbsp; Login
    </div>
  </summary>

  **Parameters:** No parameters

  **Request Body:**
  ```json
  {
    "user": 
    {
        "email": "user518@testing.com",
        "password": "Testing151!",
    }
  }
  ```

  **Responses:**

  **Curl:**
  ```bash
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

  **Request URL:**
  
  http://localhost:3000/api/users/login

   **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "user": {
        "email": "user518@testing.com",
        "username": "user518",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDgzNTMxNjB9.qvYt8vvmA-Q6JCCjL0MSAvtw2iiO4Kmzna9ai6_BqxQ",
        "bio": null,
        "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
    }
  }
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                 | Links    |
  | ---- | --------------------------- | -------- |
  | 200  | User logged in successfully | No links |
  | 401  | Unauthorized                | No links |
  | 422  | Unexpected error            | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /user &nbsp; &nbsp; &nbsp; Get current user
    </div>
  </summary>

  **Parameters:** No parameters

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'GET' \
    'http://localhost:3000/api/user' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```

  **Request URL:**
  
  http://localhost:3000/api/user

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "user": {
        "email": "user518@testing.com",
        "username": "user518",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTI0MDh9.FkPKCwyvaMP1MftEFUaIHdx_fhmM_I46Bl7kuaASDuk",
        "bio": null,
        "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
    }
  }   
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description                         | Links    |
  | ---- | ----------------------------------- | -------- |
  | 200  | Current user retrieved successfully | No links |
  | 401  | Unauthorized                        | No links |
  | 422  | Unexpected error                    | No links |

</details>

<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#FFA500' }}>PUT</span>&nbsp; &nbsp; /user &nbsp; &nbsp; &nbsp; Update current user
    </div>
  </summary>

  **Parameters:** No parameters

  **Request Body:**
  ```json
  {
    "user": 
    {
        "email": "user518_updated@testing.com",
    }
  }
  ```

  **Responses:**

  **Curl:**
  ```bash
  curl -X 'PUT' \
    'http://localhost:3000/api/user' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4' \
    -H 'Content-Type: application/json' \
    -d '{
        "user": 
        {
            "email": "user518_updated@testing.com"
        }
    }
  ```

  **Request URL:**
  
  http://localhost:3000/api/user

  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |

  ```json
  {
    "user": {
        "email": "user518@testing.com",
        "username": "user518",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTQ4Mjl9.yXS6DAQavtiwMcU5KFBg6syVuFmK1lqg_Db7CK2eiFA",
        "bio": null,
        "image": null
    }
  } 
  ```

  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |

  **Responses:**
  | Code | Description               | Links    |
  | ---- | ------------------------- | -------- |
  | 200  | User updated successfully | No links |
  | 401  | Unauthorized              | No links |
  | 422  | Unexpected error          | No links |

</details>