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

## Create Next App

| Question                     | Default | Purpose                                                                                                                                                                                            |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Name                 | my-app  | Name of the project. A new folder will be created with this name and your project will be placed in there.                                                                                         |
| Use Typescript?              | Yes     | Add Typescript support to the project. Highly recommended                                                                                                                                          |
| Use ESLint?                  | Yes     | Adds ESLint for automatic code-quality checks. Highly recommended                                                                                                                                  |
| Use TailwindCSS?             | Yes     | Adds TailWindCSS support to provide some default styling                                                                                                                                           |
| Use 'src/' directory         | No      | Places all of your Typescript code inside of a folder called 'src'. Highly recommended - makes it easier to organize code in your project. \*This needs to be enabled by switching from no to yes! |
| Use the App Router?          | Yes     | You might not see this question. Enables the use of the latest featuers of Next                                                                                                                    |
| Change default import Alias? | No      | Allows you to impot files using absolute imports rather than relative imports                                                                                                                      |
