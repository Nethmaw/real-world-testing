---
sidebar_position: 3
---
#   System Features  

##   Functional Requirements  

Functional requirements are specifications that describe the functions and features the 'Conduit' website must have to meet its intended purpose and the needs of its users. These requirements outline the specific behaviours and capabilities the website must possess to perform its functions effectively. Overall, these requirements describe what the website is supposed to do and how it can be used by the users accessing it.

## API

The API provides functionality for creating, retrieving, updating and deleting articles and comments. It also supports user authentication, profile management and interaction between users.

### Endpoints

#### Authentication Header: 

You can read the authentication header from the headers of the request.

Authorization: `Token <token string>`

## Registration:  

| Method | URL                       |
| ------ | ------------------------- |
| POST   | localhost:3000/api/users/ |



Example request body:  

   ```json
{
"user": {
"username": "Jacob",
"email": "jake@jake.jake",
"password": "jakejake"
}
}
```
Required fields:  email, username, password  

No authentication required – returns a User

## Authentication:

| Method | URL                            |
| ------ | ------------------------------ |
| POST   | localhost:3000/api/users/login |

Example request body:  

```json
    {
        "user":{
        "email": "jake@jake.jake",
        "password": "jakejake"
      }
    }
```
Required fields:  email, password  

No authentication required – returns a User

## Get Current User:
| Method | URL                      |
| ------ | ------------------------ |
| GET    | localhost:3000/api/user/ |

Authentication required – returns a User that's the current user

## Update User 
| Method | URL                      |
| ------ | ------------------------ |
| PUT    | localhost:3000/api/user/ |

Example request body:

```json
    {
        "user":{
        "email": "jake@jake.jake",
        "bio": "I like to skateboard",
        "image": "https://i.stack.imgur.com/xHWG8.jpg"
      }
    }
```
Accepted fields: email, username, password, image, bio  

Authentication required – returns the User

## Get Profile 
| Method | URL                                   |
| ------ | ------------------------------------- |
| GET    | localhost:3000/api/profiles/:username |

Authentication optional –  returns a  Profile

## Follow user 
| Method | URL                                          |
| ------ | -------------------------------------------- |
| POST   | localhost:3000/api/profiles/:username/follow |

Authentication required – returns a  Profile  

No additional parameters required

## Unfollow user 
| Method | URL                                          |
| ------ | -------------------------------------------- |
| DELETE | localhost:3000/api/profiles/:username/follow |

Authentication required – returns a  Profile  

No additional parameters required

## List Articles 
| Method | URL                         |
| ------ | --------------------------- |
| GET    | localhost:3000/api/articles |

Returns most recent articles globally by default  

Fields: Tag, author or favourited query parameter to filter results

**Query Parameters**

Filter by tag:  

?tag=AngularJS  

Filter by author:  

?author=jake  

Favourited by user:  

?favorited=jake  

Authentication optional – will return multiple articles, ordered by the most recent first

## Feed Articles 
| Method | URL                              |
| ------ | -------------------------------- |
| GET    | localhost:3000/api/articles/feed |

Authentication required – will return multiple articles created by followed users, ordered by the most recent first.

## Get Article 
| Method | URL                               |
| ------ | --------------------------------- |
| GET    | localhost:3000/api/articles/:slug |

No authentication required – will return single article

## Create Article 
| Method | URL                          |
| ------ | ---------------------------- |
| POST   | localhost:3000/api/articles/ |

Example request body:  

```json
      {
          "article": {
          "title": "How to train your dragon",
          "description": "Ever wonder how?",
          "body": "You have to believe",
          "tagList": ["reactjs", "angularjs", "dragons"]
        }
      }
```
Authentication required – will return an Article  

Required fields: title, description, body  

Optional fields: tagList as an array of Strings

## Update Article 
| Method | URL                               |
| ------ | --------------------------------- |
| PUT    | localhost:3000/api/articles/:slug |

Example request body:  
```json
    {
          "article": {
          "title": "Did you train your dragon?"
      }
    }
```
Authentication required – returns the updated Article  

Optional fields: title, description, body  

The slug also gets updated when the title is changed.  


## Delete Article 
| Method | URL                               |
| ------ | --------------------------------- |
| DELETE | localhost:3000/api/articles/:slug |

Authentication required

## Add Comments to an Article 
| Method | URL                                        |
| ------ | ------------------------------------------ |
| POST   | localhost:3000/api/articles/:slug/comments |

Example request body:  
```json
    {
         "comment": {
         "body": "His name was my name too."
     }
    }
```
Authentication required – returns the created Comment  

Required field: body

## Get Comments from an Article 
| Method | URL                                        |
| ------ | ------------------------------------------ |
| GET    | localhost:3000/api/articles/:slug/comments |

Authentication optional – returns multiple comments

## Delete Comment 
| Method | URL                                            |
| ------ | ---------------------------------------------- |
| DELETE | localhost:3000/api/articles/:slug/comments/:id |

Authentication required

## Favourite Article 
| Method | URL                                        |
| ------ | ------------------------------------------ |
| POST   | localhost:3000/api/articles/:slug/favorite |

Authentication required –  returns the Article  

No additional parameters required

## Unfavourite Article 
| Method | URL                                        |
| ------ | ------------------------------------------ |
| DELETE | localhost:3000/api/articles/:slug/favorite |

Authentication required – returns the Article  

No additional parameters required

## Get Tags 
| Method | URL                     |
| ------ | ----------------------- |
| GET    | localhost:3000/api/tags |

No authentication required – returns a List of Tags

## Error Handling  

Errors and Status Codes   

If a request fails any validations, expect a 422 and errors in the following format:  

```json
     {
         "errors":{
          "body": [
          "can't be empty"
        ]
       }
     }
```  

## Other Status Codes:   

  401 for Unauthorised Requests    - When a request requires authentication but is not provided.  

  403 for Forbidden requests    - When a request may be valid, but the user does not have permission to perform the action.  

  404 for Not found requests    - When a resource cannot be found to fulfil the request.

