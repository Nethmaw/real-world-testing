---
sidebar_position: 8
---
# Settings

- The Settings Page should display the title “Your Settings” along with the following fields: URL of the profile picture, username, bio, email, and new password, Update Settings and an option to Logout. Additionally, the page includes navigation header items like Conduit, Home, New Article, Settings, Profile, and a footer containing Thinkster and Conduit link.
  
    ### 1.  Registered Users
  
        If a registered user clicks on Settings, the page should display the title along with pre-filled user information in the following fields: URL of the profile picture, username and  email.  Appropriate error messages should be displayed when trying to update the fields.

  
            | Fields                            | Error Message                                         |
            | :-------------------------------- | :---------------------------------------------------- |
            | Username is empty                 | Username: String must contain at least 1 character(s) |
            | Already existing username / email | User already exists                                   |
            | BIO is empty                      | Bio: String must contain at least 1 character(s)      |
            | Email is empty                    | Email: Invalid email                                  |
            
 
        Once the user starts entering in the password field, an eye icon should appear. Clicking on it should make the password visible. After clicking the “Update Settings” button, the changes are updated and the user should not be able to login with old credentials. Also, the user should be able to log out of their account by pressing the ‘Or click here to log out.’ button.


    ### 2. Unregistered Users
  
         This option should not be available for unregistered users.