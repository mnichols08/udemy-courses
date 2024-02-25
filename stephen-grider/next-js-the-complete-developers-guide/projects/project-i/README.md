# Project i

This may look really simple and straightforward but there are hidden complexities.

| Page             | Description                                |
| ---------------- | ------------------------------------------ |
| Landing Page     | Nav Bar, Links to other pages, image       |
| Performance Page | Different text, different image            |
| Reliability Page | The same as above                          |
| Scale Page       | Yet again another different image and text |

Right way we start to notice some difficult challenges. Some are more straightforward than others

| Problem                                                                             | Solution                                                                |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Need a place to write some code!                                                    | Generate a new Next project by running `npx create-next-app@latest`     |
| Need to show different content on the screen based on the path the user is visiting | Use Next's file-based routing system                                    |
| Need to link between different pages                                                | Use Next's built in Link component to navigate between different routes |
| The images we want to show are really large                                         | Use next's built-in Image component to optimize image loading           |
| Seems like we have a lot of duplicate code...                                       | Investigate Strategies for code-reuse                                   |
