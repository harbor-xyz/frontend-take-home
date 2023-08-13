Hi! This PR implements the frontend design as requested in this [take home assignment](https://github.com/harbor-xyz/frontend-take-home).

### Approach
I have developed this app using React. This is a single page application created using Component-driven architecture that emphasises building applications from small, reusable components. I have [broken down](https://github.com/JW-Vinayak/frontend-take-home-vinayak/commit/8c28950a1728605d46892d8f86b9d405433386d1) the user interface into individual, modular components that can be easily composed and reused across different parts of the application. This makes the app development faster, simpler, scalable and easy to manage. People can build on top of this easily.

**Techniques used**
- BEM methodology for keeping the css modular and easy to maintain. Helps in component reuse.
- Media queries to make the app layout adapt to any screen size
- Custom made component library that has reusable components
- JSDoc supported comments to generate documentation from code 
- Profiled the app with react profiler to make sure components don't re-render without a valid trigger
- Used error boundaries to make sure error in one section of the app doesn't crash the entire app, it still remains usable in other sections
- Cached the API response to make sure we are not making redundant request
- Routes to navigate to different views in case new views are added in future
- Type checking to catch type errors during development

###  Trade-offs

I did not use Redux in this app as 
- I wanted to keep this app simple
- This app can do without Redux and works well with just props and state.
- There are not many components that need access to same data from different locations in the app.

I did not use Context API in this app as
- In this app, there is no prop drilling as such. I'm passing props max 2 level deep.
- since the filter and sort status can change frequently, context API would have lead to frequent re-renders
- Making components reusable would be tougher with the use of context API as they are dependent on consuming the context provider.

Other architectures like PWA, Micro Frontends don't make sense here as we neither want to provide any native-like functionality nor is this a huge application.

### Testing
Here is a preview of the app. This is out of general habit of attaching the preview so that reviewer gets more context.

![Harbor assignment app screenshot](https://user-images.githubusercontent.com/5630856/220905284-0ad1b837-ad9a-4357-93ea-5e595b1bfa2c.png)

In case you want to see video preview

https://user-images.githubusercontent.com/5630856/220902208-a6503337-b458-46bb-8b3d-f64bd09c6417.mp4



I have written unit tests for majority of the component. Unit tests are a great way to identify if we have tripped something by mistake with new changes.

![unit tests for harbor assignment app](https://user-images.githubusercontent.com/5630856/220902698-4c6d065e-5f3c-4353-ac78-c2860ca218ed.png)


Here is the test coverage report. We should proactively check and improve our test coverage to increase the chances of finding bugs early.

![test coverage for harbor assignment app](https://user-images.githubusercontent.com/5630856/220903447-e4cfe0fe-0bb7-4325-9775-8178ed764f52.png)

### Steps to run the application

To run the API server 
- Checkout the branch (from this [location](https://github.com/JW-Vinayak/frontend-take-home-vinayak))
- install node_modules
- run `yarn start:server`

To run the assignment
- cd into user-interface folder
- install node_modules
- run `npm start` (app should open at url `http://localhost:3001/`)


### Note
- I have made changes to the API endpoint to [use cors](https://github.com/JW-Vinayak/frontend-take-home-vinayak/commit/b268285274c7a9ebc60239e1a52a7ea1268c3734) so that it allows request from the UI app
- Took liberty to make changes to json data that API server sends so that I can demonstrate testnet cards with various statuses and details.
- Assumed that the testnet count in the sidebar doesn't change and always shows the total count irrespective of the status and sort selections as the filtered testnet count is already shown in the main view.

### Few more things I generally implement but couldn't do here due to limited time
- Story book, a great way to document your components and example of how to use them. Comes in handy for new members joining the team as they already get to know what is available and what they need to build.
- E2E tests, apart from having good unit test coverage, we should also have good e2e test coverage. Comes in handy in CI/CD pipeline to catch regressions before they land in production and wreck havoc.
- Use virtualised list provided by react to render the testnet cards in case we get a huge number of testnets in API. Without virtualised list the page would take longer to load (increased TTI) and would have hiccups while scrolling. Alternatively, we can design the system to receive and handle paginated results.
- Make sure that the app is fully A11y compliant.
- Write CSS in a way that handles theme well in case we decide to have themes in the app in future.

All and any feedback is welcome!
