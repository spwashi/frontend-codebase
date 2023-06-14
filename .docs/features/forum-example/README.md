## Forum Example Software Specifications

Specs for a simple forum.

### User Profiles
- Each user profile should have the following information:
    - Name
    - Username
    - Profile Image
- Users should have a unique route based on their username

### Posts
- Users should be able to view a list of posts, which consist of a list of cards with titles and descriptions.
- Additionally, users should be able to view individual posts with the following details:
    - Title
    - Description
    - Body
    - Comments
- Posts should have a unique route based on the post's slug.

### Comments
- Users should be able to view comment threads, which consist of branches.
- Each comment should include the following information:
    - User
    - Body
    - Parent comment (if applicable)
    - Option to load more comments
- Users should also be able to view individual comments using a permalink, which includes a slug and an ID.

### Sessions
- Users should have the ability to perform the following actions related to sessions:
    - Login
    - Check session status
    - Logout (triggered by a button)
