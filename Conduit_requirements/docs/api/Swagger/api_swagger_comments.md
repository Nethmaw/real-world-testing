---
sidebar_position: 3
---
 
# Comments
<details>
   

 <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#0096FF' }}>GET</span>&nbsp; &nbsp; /articles/`slug`/comments &nbsp; &nbsp; &nbsp; Get comments for an article
    </div>
  </summary> 
 
  **Parameters:**
 
  | Name                                                                            | Description |
  | ------------------------------------------------------------------------------- | ----------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | new-one-2   |
 
 
  **Responses:**
 
  **Curl:**
  ```bash
  curl -X 'GET' 'http://localhost:3000/api/articles/new-one-2/comments' -H 'accept: */*'
  ```
 
  **Request URL:**
 
  http://localhost:3000/api/articles/new-one-2/comments
 
  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |
 
  ```json
  {
    "comments": [
      {
        "id": 7,
        "createdAt": "2023-08-09T21:19:18.643Z",
        "updatedAt": "2023-08-09T21:19:18.643Z",
        "body": "Cool article",
        "author": {
          "username": "gutentag2012",
          "bio": "",
          "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
          "following": false
        }
      },
      {
        "id": 48,
        "createdAt": "2024-02-26T14:24:05.389Z",
        "updatedAt": "2024-02-26T14:24:05.389Z",
        "body": "Best article ever!",
        "author": {
          "username": "user518",
          "bio": null,
          "image": null,
          "following": false
        }
      }
    ]
  }
  ```
  | Response headers               |
  | ------------------------------ |
  | content-type: application/json |
 
  **Responses:**
  | Code | Description                     | Links    |
  | ---- | ------------------------------- | -------- |
  | 200  | Comments retrieved successfully | No links |
  | 401  | Unauthorized                    | No links |
  | 422  | Unexpected error                | No links |
 
</details>
 
<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#008000' }}>POST</span>&nbsp; &nbsp; /articles/`slug`/comments &nbsp; &nbsp; &nbsp; Create a comment for an article
    </div>
  </summary>
 
 
  **Parameters:**
 
  | Name                                                                            | Description                                                                            |
  | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive!-120803 |
 
  **Request Body:**
  ```json
  {
    "comment": {
      "body": "I like this article."
    }
  }
  ```
 
  **Responses:**
 
  **Curl:**
  ```bash
  curl -X 'POST' \
  'http://localhost:3000/api/articles/Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive%21-120803/comments' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  -H 'Content-Type: application/json' \
  -d '{
    "comment":
    {
      "body": "I like this article."
    }
  }'
  ```
 
  **Request URL:**
 
  http://localhost:3000/api/articles/Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive%21-120803/comments
 
  **Server response:**
  | Code | Details        |
  | ---- | -------------- |
  | 200  | See JSON below |
 
  ```json
  {                                                              
    "comments": {                                                  
      "id": 49,                                                      
      "createdAt": "2024-02-26T14:06:47.730Z",                        
      "updatedAt": "2024-02-26T14:06:47.730Z",                        
      "body": "I like this article.",                            
      "author": {                                                    
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
  | 200  | Comment created successfully | No links |
  | 401  | Unauthorized                 | No links |
  | 422  | Unexpected error             | No links |
 
</details>
 
<details>

  <summary>
    <div>
      <span style={{ fontWeight: 'bold', color: '#EE4B2B' }}>Delete a comment</span>&nbsp; &nbsp; /articles/`slug`/comments/`commentId`&nbsp; &nbsp; &nbsp; Delete a comment for an article
    </div>
  </summary>
 
  **Parameters:**
 
  | Name                                                                            | Description |
  | ------------------------------------------------------------------------------- | ----------- |
  | `slug`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>string</h6> <h6>(path)</h6> | new-one-2   |
  | `commentId`<sup style={{ color: '#EE4B2B' }}>*</sup> <h6>integer</h6>           | 48          |
 
  **Responses:**
 
  **Curl:**
  ```bash
  curl -X 'DELETE' \
  'http://localhost:3000/api/articles/new-one-2/comments/48' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3QxZDJ3czAwMDA2M3hiZTVsZHFsOHoiLCJpYXQiOjE3MDg1MTIxMDV9.9Ar6eoPvWM1ydXFwhsrUy2lHIhoLG5AnskFzAvd9sm4'
  ```
 
  **Request URL:**
  http://localhost:3000/api/articles/new-one-2/comments/48
 
  **Server response:**
  | Code | Details                        |
  | ---- | ------------------------------ |
  | 200  |                                |
  |      | **Response headers**           |
  |      | content-type: application/json |
 
  **Responses:**
  | Code | Description                  | Links    |
  | ---- | ---------------------------- | -------- |
  | 200  | Comment deleted successfully | No links |
  | 401  | Unauthorized                 | No links |
  | 422  | Unexpected error             | No links |
 
</details>