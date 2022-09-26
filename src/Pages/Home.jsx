import React from 'react'


const Home = () => {
  return (
    <>

      <div style={{ marginLeft: '20px' }}>
        <h3> 1 . What is Virtual DOM</h3>
        Virtual DOM is a virtual representation or a lightweight copy of DOM in memory.<br />
        Virtual DOM and the Real DOM are synced together with the ReactDOM library. This process is called Reconciliation.<br />
        React compares the updated Virtual DOM and pre-updated Virtual DOM to check the updated object or component that is then updated in the Real DOM. This process is called diffing.<br />
        React uses keys to avoid unnecessary re-renders. <br />
        Virtual DOM is faster than the Real DOM.<br />
        Virtual DOM has the same properties as the Real DOM, but it lacks the power to directly change the UI of the screen.<br />
        Everything is done in batches making it easier and quicker to complete.<br />
        <img style={{ width: '500px', height: '300px', margin: '10px' }} alt='' src='https://miro.medium.com/max/1104/1*XY6YFulg1MXfqkE0S0BBKA.png' />


        <h3> 2 . What is SPA</h3>
        An SPA is a web app that loads a single HTML page that is dynamically updated by JavaScript as the user interacts with the app. <br />
        Imagine a simple sign-up form where a user can enter a name and an email address. Once the user fills out and submits the form, a whole page refresh doesn't occur.


        <h3> 3 . What is difference between class and functional component</h3>
        1- A class component requires you to extend from React Component while a functional component does not require that.<br />
        2- A class component requires to create of a render function to return React element, while a functional component accepts props as an argument and returns a React element.<br />
        3- previously only class-based components could have state in component, but this is no longer the case since React hooks arrived to rescue functional components, <br />
        the main difference between these two is how they handle state, state is one of the fundamental element, and it’s important to choose which component you will use since it’s differently handled for two case.<br />
        4- A class components have its Lifecycle Method but in functional component they don't have any lifecycle method.


        <h3> 4 . What does mean by state and its use in react?</h3>
        The state object is where you store property values that belongs to the component. <br />
        When the state object changes, the component re-renders. <br />
        Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive. State can only be used within a class component.<br />
        If you anticipate that a component will need to manage state, it should be created as a class component and not a functional one.


        <h3> 5 . What is Diffing Algorithm </h3>
        So when there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM. <br />
        With the help of this comparison React figures out which components in the UI needs to be updated. This process is called diffing.


        <h3> 6 . What is Reconciliation </h3>
        Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM.


        <h3> 7 . What is JSX and why do we use it instead of js?</h3>
        JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users. <br />
        JSX is popularly used in React, as it makes the job of building an application much easier.
        <br />
        JSX is quicker than regular javascript because it performs optimization while translating the JSX code to Javascript.<br />
        Instead of splitting technologies by putting markup and logic in separate files, but React component contains both.


        <h3> 8 . What is package.json</h3>
        It is a JSON file that lives in the root directory of your project. Your package.json holds important information about the project.
        It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.
        <br />  <br />  <br />
      </div>
    </>
  )
}

export default Home