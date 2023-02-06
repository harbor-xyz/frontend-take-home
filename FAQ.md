## How to run project

Run Locally

```
npm run start:client
```

Build project

```
npm run build:client
```

Run Production ready Build

```
npx serve -s build
```

## F.A.Q

**Q1. Why TypeScript over vanilla JavaScript?**

> Vanilla JavaScript is fine to make React applications, but you would not able to find data type errors in development time, and there might be scenarios where you would be assign deifferent data type. So it better to have Typescript in large applications where write one time data typed code would not fail for that data type in long term. Other advatntages like predefined object shapes like interfaces or types, enumeration or tuples.

**Q2. Why rem over px?**

> In most browser default font size is 16px, and if we set it default to body or html explicitly and then apply **_rem_** unit on any element, it will be very reponsive. **_rem_** units are useful for scaling CSS elements in relation to the size of the root element — even if you don’t know what the default font size will be. In large applications where your module can be part of any large module then root module can set some default font size, then it will be related to that font size only, so it will help in responsiveness of the module.

**Q3. Is this archirecture scalable?**

> Yes, I've used the folder structure in a way that your small components can be use for any pages. So we can have any pages, and we can use any components. So I'm using Compound Design Pattern here to make a page, it means multiple small components can build your one page, but your small component is not bounded to your page

**Q4. What we can do further for application performance?**

> There are multiple ways:
>
> 1. Stop Re-rendering compnents even there is no update is happening for that component
> 2. Lazy Loading of components
> 3. Reduce Bundle size with the help of chunking of main bundle
> 4. I've implemented the infinte scroll concept, that will require backend to make response paginated, so that inital response will be fast for first load and then sub-sequently loads response on scroll

**Q5. How we would able to load long list of TestNets?**

> As I mentioned earlier, we can can infinite scroll, and will load data on scroll, but it would require pagination from backend

**Q6. What is in the scope for future?**

> 1. Performance
> 2. Unit Testing of components
> 3. E2E testing or Automation testing with frameworks like Cypress or Playwright
> 4. Enable client side logging, so that you users behavior or client errors will be capture
