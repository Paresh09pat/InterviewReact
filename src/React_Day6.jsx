import React from 'react'

const React_Day6 = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3> 1 . What is an event in react?</h3>
      An event is an action that could be triggered as a result of the user action or system generated event.  <br />
      For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.


      <h3> 2 . What is memory leak and how to overcome?</h3>
      According to Wikipedia, a memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in a way that memory that is no longer needed is not released.<br />
      A memory leak may also happen when an object is stored in memory but cannot be accessed by the running code.<br /><br />

      Simply put, a memory leak is said to occur whenever inaccessible or unreferenced data exists in memory.<br />
      Nowadays, many modern programming languages have techniques for clearing out data that is no longer needed, garbage collection, <br />
      but it turns out there are other not-so-popular errors that can expose your React app to memory leaks and, to a great extent, reduce the performance of your app.<br /><br />
      1 . Using Boolean Flag <br />
      2 . Using AbortController <br />
      3 . Using use-state-if-mounted Hook <br />


      <h3> 3 . Do you prefer function-based or class component and why ?</h3>
      There are different reasons why functional components are better than class components for Reactjs development, and here are the most prominent ones:<br />

      1 . It is a simple JS function that simply returns HTML UI<br />
      2 . Accept properties in function and return HTML<br />
      3 . Functional gives the solution with or without using states<br />
      4 . No render method used<br />
      5 . Defined using arrow functions but can be created with the regular function keyword<br />
      On the other hand, the class component has quite a complex UI logic. Also, it must have a render() method returning HTML.<br />


      <h3> 4 . Explain reducer as pure function in redux</h3>
      Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations.<br />
      Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.


      <h3> 5 .Why do we use redux thunk?</h3>
      Redux Thunk is a Thunk middleware for Redux. It allows you to write asynchronous logic that interacts with the store. <br />
      This awesome middleware allows you to write action creators that return a function instead of an action.


      <h3> 6 . What do you know about NPM (Node Package Manager) ?</h3>
      Repository – npm is a widely used repository for publishing open-source Node projects, where developers can share their source code with other npm users.
      Angular, React, and jQuery are some of the packages you can download from an npm repository.<br /><br />
      Command-line interface (CLI) – developers run the npm CLI from a terminal or a command-line tool to install or uninstall packages and manage versions or dependencies.<br />
      Registry – any package or module you install using the npm CLI is downloaded from the npm public registry, the JavaScript software database.<br />
      <br /><br /><br /><br /><br />


    </div>
  )
}

export default React_Day6