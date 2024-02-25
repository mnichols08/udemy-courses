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

### Project Instructions
#### Initial setup
    1. Create a new next app. `npx create-next-app@latest`
    2. This creates a new folder named whatever we called the project name.
    3. cd into this folder and start up the development server by running `npm run dev`
    4. We should now have a default next app running in the browser.
#### Clean your Slate
    1. **The `src/app` folder is a super special folder** - The files and folders you place in here determine what routes exist in your app.
        a. Files specifically called `page.tsx` placed in here (or in nested folders) define a route the user can visit. There will be a lot of `page.tsx` files.
        b. These file must have a 'export default' of a React component
        c. The name of the component does not make a big difference.
    2. Inside of this folder there is a file called page.tsx;
        a. Remove the JSX coming from page.tsx return statement;
        b. Replace it with a `<div>Home Page</div>`
        c. Remove the import statements on the top lines
    3. - To determine how we access a page, we use the folder that the `page.tsx` file is located
        a. Folder can be as deep as we need. 



