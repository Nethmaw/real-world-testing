# **Software Requirements Specification: Conduit**

## **Table of Contents:**

1. [Introduction]  

    1. Purpose  

    1. Project Scope  

    1. Intended Audience and Reading Suggestions

    1. Architecture Diagram  

2. Overall Description  

    1. Product Perspective  

    1. Product Features  

         1. Non-Registered User Features  

         1. Registered User Features  

         1. Unified Platform Characteristics  

3. System Features  

    1. Functional Requirements  

        1. API  

        1. User Interface  

            1. User Registration  

            1. User Login  

            1. User Interactions  

    1. Non-Functional Requirements

        1. Security Requirements

        1. Performance Requirements  

        1. Compatibility Requirements

        1. Usability Requirements

            1. General Requirements  

            1. UX Design  

4. Bugs

## **1. Introduction**

## **1.1 Purpose**

This document aims to establish an online platform where registered users can compose articles on various topics to be viewed by registered and non-registered users.

## **1.2 Project Scope**

The project entails building a dynamic website where registered users can create, submit, and showcase articles on diverse topics. Registered and non-registered users can easily browse and view articles, fostering a broad user base. The platform will emphasise user interactivity, featuring comments, likes, and social sharing options to encourage engagement and discussion.

Ensuring a secure and rewarding user experience, the platform will feature robust user profiles, privacy safeguards, and compelling content moderation. The website will be exclusively accessible through web browsers, limiting its availability to desktop and laptop devices rather than mobile phones. The project will prioritise accessibility and compliance with regulations, ultimately creating a versatile and engaging content-sharing platform.

## **1.3 Intended Audience and Reading Suggestion**  

The intended audience would include a broad spectrum of individuals interested in diverse topics, ranging from content creators, enthusiasts, and knowledge seekers to casual readers.

The reading suggestions for a diverse audience encompass a wide array of subjects. Recommendations might include informative articles, creative pieces, and engaging content spanning various interests such as technology, arts, science, lifestyle, and more. This guarantees an enticing experience for every individual across our diverse user base.

## **1.4 Architecture Diagram**  

![Figure 1](/architectureDiagram.png)

Figure 1. Architecture Diagram illustrating the flow of client requests through a load balancer, reaching the UI layer, then being processed by web and application servers.

In this architecture diagram, users interact with a website to create and publish articles. The process begins with the user (client) accessing the website's interface. Their requests are directed to a load balancer, which evenly distributes traffic across multiple servers to ensure reliability and scalability. The user interface (UI) component handles the presentation layer, providing the interface for users to input and submit articles.

Behind the scenes, a combination of web servers and application servers processes these requests: the web server serves static content like HTML and CSS, while the application server executes dynamic logic such as article submission and database interactions. Together, these components form a robust system for users to create and publish articles on the website seamlessly.

## **2. Overall Description**  

## **2.1 Product Perspective**  

The Conduit Article Website is a comprehensive platform tailored for registered and non-registered users, providing an inclusive space for content exploration and contribution.

## **2.2 Product Features**  

## 2.2.1 Non-Registered User Features

- Global Feed Access:  

Immediate exposure to a diverse array of published articles.

- Tag-Based Article Filtering:

Enhanced browsing experience through relevant tag filters aligning with user interests.

## 2.2.2 Registered User Features

- Personalised Feed:  

Access to favourite articles and publications from followed authors under the “Your Feed” section, tailoring the content consumption journey.

- Article Contribution:  

     i. Ability to publish articles under the "New Articles" section, fostering user engagement.

     ii. Inclusion of relevant tags during article creation for optimised discoverability.

- User Control and Personalisation:  

    i. Settings Section: Effortless management and update of personal details for a tailored and secure user experience.

    ii. Profile Section: A centralised hub showcasing both authored and favourited articles, empowering users to shape their digital identity.

## 2.2.3 Unified Platform Characteristics

- Inclusivity:

A platform designed for both registered and non-registered users, ensuring an inclusive content-sharing environment.

- Community Engagement:  

    i. Features encouraging user interaction, such as liking, commenting, and sharing articles.

    ii. Notifications to keep registered users informed about interactions with their articles.

## **3. System Features**

## **3.1 Functional Requirements**

Functional requirements are specifications that describe the functions and features the 'Conduit' website must have to meet its intended purpose and the needs of its users. These requirements outline the specific behaviours and capabilities the website must possess to perform its functions effectively. Overall, these requirements describe what the website is supposed to do and how it can be used by the users accessing it.

## 3.1.1 API

The API provides functionality for creating, retrieving, updating and deleting articles and comments. It also supports user authentication, profile management and interaction between users.

## Endpoints

## Authentication Header

You can read the authentication header from the headers of the request.

Authorization: `Token <token string>`

## Registration

| Method | URL                       |
|--------|---------------------------|
| POST   | localhost:3000/api/users/ |  

Example request body:  

    {
        "user":{
        "username": "Jacob",
        "email": "jake@jake.jake",
        "password": "jakejake"
      }
    }
Required fields:  email, username, password  

No authentication required – returns a User

## Authentication

| Method | URL                       |
|--------|---------------------------|
| POST   | localhost:3000/api/users/login |  

Example request body:  

    {
        "user":{
        "email": "jake@jake.jake",
        "password": "jakejake"
      }
    }
Required fields:  email, password  

No authentication required – returns a User

## Get Current User

| Method | URL                       |
|--------|---------------------------|
| GET    | localhost:3000/api/user/ |  

Authentication required – returns a User that's the current user

## Update User

| Method | URL                       |
|--------|---------------------------|
| PUT    | localhost:3000/api/user/ |

Example request body:

    {
        "user":{
        "email": "jake@jake.jake",
        "bio": "I like to skateboard",
        "image": "https://i.stack.imgur.com/xHWG8.jpg"
      }
    }

Accepted fields: email, username, password, image, bio  

Authentication required – returns the User

## Get Profile

| Method | URL                       |
|--------|---------------------------|
| GET  | localhost:3000/api/profiles/:username |

Authentication optional –  returns a  Profile

## Follow user

| Method | URL                       |
|--------|---------------------------|
| POST  | localhost:3000/api/profiles/:username/follow |

Authentication required – returns a  Profile  

No additional parameters required

## Unfollow user

| Method | URL                       |
|--------|---------------------------|
| DELETE | localhost:3000/api/profiles/:username/follow |

Authentication required – returns a  Profile  

No additional parameters required

## List Articles

| Method | URL                       |
|--------|---------------------------|
| GET  | localhost:3000/api/articles |

Returns most recent articles globally by default  

Fields: Tag, author or favourited query parameter to filter results

## Query Parameters

Filter by tag:  

?tag=AngularJS  

Filter by author:  

?author=jake  

Favourited by user:  

?favorited=jake  

Authentication optional – will return multiple articles, ordered by the most recent first

## Feed Articles

| Method | URL                       |
|--------|---------------------------|
| GET  | localhost:3000/api/articles/feed |

Authentication required – will return multiple articles created by followed users, ordered by the most recent first.

## Get Article

| Method | URL                       |
|--------|---------------------------|
| GET  | localhost:3000/api/articles/:slug |

No authentication required – will return single article

## Create Article

| Method | URL                       |
|--------|---------------------------|
| POST | localhost:3000/api/articles/ |

Example request body:  

      {
          "article": {
          "title": "How to train your dragon",
          "description": "Ever wonder how?",
          "body": "You have to believe",
          "tagList": ["reactjs", "angularjs", "dragons"]
        }
      }

Authentication required – will return an Article  

Required fields: title, description, body  

Optional fields: tagList as an array of Strings

## Update Article

| Method | URL                       |
|--------|---------------------------|
| PUT | localhost:3000/api/articles/:slug |

Example request body:  

    {
          "article": {
          "title": "Did you train your dragon?"
      }
    }

Authentication required – returns the updated Article  

Optional fields: title, description, body  

The slug also gets updated when the title is changed.  

## Delete Article

| Method | URL                       |
|--------|---------------------------|
| DELETE  | localhost:3000/api/articles/:slug |

Authentication required

## Add Comments to an Article

| Method | URL                       |
|--------|---------------------------|
| POST  | localhost:3000/api/articles/:slug/comments |

Example request body:  

    {
         "comment": {
         "body": "His name was my name too."
     }
    }

Authentication required – returns the created Comment  

Required field: body

## Get Comments from an Article

| Method | URL                       |
|--------|---------------------------|
| GET  |localhost:3000/api/articles/:slug/comments |

Authentication optional – returns multiple comments

## Delete Comment

| Method | URL                       |
|--------|---------------------------|
| DELETE  | localhost:3000/api/articles/:slug/comments/:id |  

Authentication required

## Favourite Article

| Method | URL                       |
|--------|---------------------------|
| POST  |localhost:3000/api/articles/:slug/favorite |

Authentication required –  returns the Article  

No additional parameters required

## Unfavourite Article

| Method | URL                       |
|--------|---------------------------|
| DELETE  | localhost:3000/api/articles/:slug/favorite |

Authentication required – returns the Article  

No additional parameters required

## Get Tags

| Method | URL                       |
|--------|---------------------------|
| GET  | localhost:3000/api/tags |

No authentication required – returns a List of Tags

## Error Handling  

Errors and Status Codes

If a request fails any validations, expect a 422 and errors in the following format:  

     {
         "errors":{
          "body": [
          "can't be empty"
        ]
       }
     }

## Other Status Codes

**401 for Unauthorised Requests**  - When a request requires authentication but is not provided.  

**403 for Forbidden requests**  - When a request may be valid, but the user does not have permission to perform the action.  

**404 for Not found requests**  - When a resource cannot be found to fulfil the request.

## 3.1.2 User Interface

## 3.1.2.1 User Registration

• The website SHOULD provide user registration functionality for new users.

### Unregistered users

• SHOULD be shown a navigation bar containing the following buttons: ‘Conduit’, ‘Home’, ‘Sign In’ and ‘Sign Up’.

• SHOULD be able to navigate to the home page by clicking on the ‘Home’ button (within the navigation bar) or the brand button ‘Conduit’ (found within both the navigat\ion bar and footer).

• SHOULD be able to view article posts on separate pages by using the page counter.

• SHOULD be redirected to the ‘Thinkster’ website by clicking on the ‘Thinkster’ link within the footer.

• SHOULD be shown in the 'Global Feed' section.

• SHOULD be able to view a registered user's profile page by clicking on their username within the ‘Global Feed’ section.

• SHOULD be able to read an entire article by clicking on the 'Read more…’ link.

• SHOULD have access to the ‘Popular Tags’ column and can filter articles by clicking on one of the tags.

• SHOULD be shown the username, email and password fields when navigating to the ‘Sign Up’ page.

• SHOULD be able to register on the ‘Sign Up’ page and be logged into their new account, granted that they provide:  

        - A username that doesn’t already exist.  

        - A valid email address consists of an email prefix and an email domain. The prefix appears to the left of the @ symbol. The domain appears to the right of the @ symbol.   

        - A password consisting of at least 8 characters.

• SHOULD NOT be able to ‘like’ articles by clicking on the ‘heart’ icons. Doing so should redirect unregistered users to the ‘Sign Up’ page.

• SHOULD NOT be able to follow/unfollow a registered user.

• SHOULD NOT be able to comment on an article.

### Registered users

• SHOULD be shown a navigation bar containing the following buttons: ‘Conduit’, ‘Home’, ‘New Article’, ‘Settings’ and ‘\<profile username>’.

• SHOULD be able to navigate to the home page by clicking on the 'Home' button (within the navigation bar) or the brand button 'Conduit' (found within both the navigation bar and footer).

• SHOULD be able to view article posts on separate pages by using the page counter.

• SHOULD be redirected to the 'Thinkster' website by clicking on the 'Thinkster' link within the footer.

• SHOULD be shown the ‘Your Feed’ and ‘Global Feed’ sections.

• SHOULD be able to view a registered user's profile page by clicking on their username.

• SHOULD be able to read an entire article by clicking on the 'Read more…' link.

• SHOULD have access to the 'Popular Tags' column, and can filter articles by clicking on one of the tags.

• SHOULD be able to ‘like’ articles by clicking on the ‘heart’ icons.

• SHOULD be able to follow/unfollow a registered user.

• SHOULD be able to publish a new article.

• SHOULD be able to edit and delete their own articles.

• SHOULD be able to comment on an article.

• SHOULD be able to update their profile settings.

• SHOULD be able to log out of their account.

• SHOULD NOT be able to edit or delete the articles of other users.

## 3.1.2.2 User Login

• SHOULD be shown the username and password fields once on the ‘Sign In’ page.

• SHOULD log a user into the system once they have provided valid credentials.

• SHOULD display an error message if the user provides an invalid email address, a password that is not at least 8 characters long or a password that does not match one held by a registered user.

## 3.1.2.3 User Interactions

• Home Page:  

- Your Feed:  

SHOULD display the articles of the users that the current registered user is following.  

- Global Feed:  

SHOULD display all the articles which have been published on the website.  

- Popular Tags:  

        - Clicking on a tag within the ‘Popular Tags’ column SHOULD cause another section called ‘#<selected tag>’ to appear next to the ‘Global Feed’.  

        - Only articles with the selected tag SHOULD be displayed within the ‘#<selected tag>’ column.  

        - A user SHOULD NOT be able to select multiple tags simultaneously.  
  
- Liking:  

        - The registered user SHOULD be able to ‘like’ an article by clicking on the love heart adjacent to it, thus causing said article to be added to the ‘Favourited Articles’.  

- Viewing the profile of other users:

        - Once the registered user has clicked on another username, they SHOULD be redirected to the latter’s profile page.
 
        - The latter user’s profile page SHOULD display all articles published by said user.

- Viewing the entire article of another user:

        - Once the registered user has clicked on the ‘Read more…’ link of a particular article, they SHOULD be redirected to a page that fully displays the article.

- Following another user:

        - Prerequisite (choose either option 1 or option 2):

            i. Option 1: Navigate to another user's profile by clicking on their username.

            ii. Option 2: Navigate to the article page of another user by clicking on its ‘Read more…’ link.

- The registered user SHOULD be able to follow the other user by clicking the '+ Follow \<other username>' button next to the other user's profile picture.

- The articles of any followed users SHOULD be displayed within the ‘Your Feed’ section.

- Unfollowing another user SHOULD cause their articles to disappear from the ‘Your Feed’ section.

- Commenting:

- Once a registered user has clicked on the ‘Read more…’ link of an article, they SHOULD be shown the comment field.

- The registered user SHOULD be able to write a comment and post it.

- The registered user’s comment SHOULD appear below the comment field.

- The registered user SHOULD be able to delete their own comment.

- The registered user SHOULD NOT be able to delete other users' comments.

• Article Creation:

- Once the registered user clicks the 'New Article' button, the following fields SHOULD appear: article title, description, body and tags.

- The registered user SHOULD be able to publish an article once they have provided valid input data to the article title, description, and body. Tags are NOT mandatory.

- An error message SHOULD display if the input within the article title, description or body is not at least 1 character(s) long.

- To include a tag, the user SHOULD write it in the textbox and then press ‘Enter’.

- The published article SHOULD appear within the 'Global Feed' and the 'My Articles' section of their user profile.

- If the tag added to the published article is unique, it SHOULD appear at the end of the ‘Popular Tags’ column.

• Settings:  

- Once the registered user has clicked on the ‘Settings’ button, the following fields SHOULD appear: the URL of the profile picture, username, bio, email, and new password.

- An error message SHOULD display if the username or email fields don’t contain at least one character(s).

- The registered user SHOULD be able to update the URL of their profile picture, resulting in the new image icon displaying accordingly.

- The registered user SHOULD be able to update their username, with the change appearing within the ‘\<profile username>’ navigation button.

- The registered user SHOULD be able to update their bio.

- The registered user SHOULD be able to update their email.

- The registered user SHOULD be able to update their password.

- The registered user SHOULD be able to log out of their account by pressing the ‘Or click here to log out.’ button.

- The registered user SHOULD be able to log in with the updated email and password.

- The registered user SHOULD NOT be able to log in with old credentials.

• User Profile:  

- The registered user SHOULD be able to see the articles that they have posted under the ‘My Articles’ section.

- The registered user SHOULD be able to see the articles of other users which they have favourited within the ‘Favourited Articles’ section.

- The registered user SHOULD be able to navigate to the Settings page by clicking the 'Edit Profile Settings' button.

- The registered user SHOULD be able to favourite their own article (s).

- Once the registered user has clicked on one of their own articles, they SHOULD be able to do the following:

- Click the 'Edit Article' button and edit their article (except tags).

- Comment on their own article.

- Delete their own comment.

- Delete their article by clicking on the ‘Delete Article’ button.

## 3.2 Non-Functional Requirements

Non-functional requirements are critical specifications that focus on the overall performance, security, and user experience of the 'Conduit' website. This includes aspects beyond specific functionalities and establishing security, performance, compatibility, and usability standards.

## 3.2.1 Security Requirements

User authentication should be implemented securely to ensure user credentials are protected.

## 3.2.2 Performance Requirements

 Out of scope

## 3.2.3 Compatibility Requirements

The website should be compatible with browsers like Safari, Microsoft Edge, Mozilla Firefox, etc. Users should be able to access and use the application seamlessly across different browsers.

## 3.2.4 Usability Requirements

## 3.2.4.1 General Requirements

- The system must meet general usability standards like straightforward navigation, responsive design, and consistent user interface elements to ensure an intuitive and efficient user experience.

## 3.2.4.2 UX Design

- The system must be user-friendly and focus on delivering a positive user experience. Consideration should be given to layout, colour schemes and interactive elements to enhance overall usability.

## 4. Bugs

The following bugs will be addressed during the development and testing phases:

1. By default, non-registered users are automatically following all registered users.

2. Once tags are created, registered users cannot edit them.

3. The page number format becomes incorrect when navigating beyond pages and returning to the previous page. Specifically, an ellipsis (...) is displayed between the pages where a number should be, which should not occur.
