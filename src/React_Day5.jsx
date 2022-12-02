
import React from 'react'

const React_Day5 = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3> 1 . High Order Component in react js ?</h3>
      A higher-order component (HOC) is an advanced technique in React for reusing component logic. <br />
      A higher-order component is a function that takes a component and returns a new component.


      <h3> 2 . Do you know about SEO (Search Engine Optimization)? Is it true that react js supports SEO support</h3>
      SEO stands for search engine optimization, which is a set of practices designed to improve the appearance and positioning of web pages in organic search results.<br />
      Because organic search is the most prominent way for people to discover and access online content, a good SEO strategy is essential for improving the quality and quantity of traffic to your website.<br /><br />

      React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website.
      However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.


      <h3> 3 . clean up in useEffect</h3>
      clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.<br />
      Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up (arrange something in a neat and ordered way) our code before our component unmounts. <br />
      When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.<br /><br />

      The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens.<br />
      The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.


      <h3> 4 . What is the use of useCallback and useMemo</h3>
      <h3>useCallback</h3>
      1 . The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies.<br />
      useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. <br />
      2 . The useCallback always return a memoized function.
      <h3>useMemo</h3>
      1 . React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. <br />
      You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.<br />
      2 . The useMemo always return a memoized value

      <h3> 5 . Why do we need keys in react less</h3>
      The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM.<br />
      To use keys, simply add the prop inside an element such as
      <ul>
        <li>
          . Unique IDs are the best value to assign to keys. (or) "Key" prop is used to look pretty, and there is no benefit whatsoever. <br />
          "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm.<br />
          It is one of the attributes in HTML. It is NOT commonly used in an array.
        </li>
      </ul>


      <h3> 6 . Do you know about redux</h3>
      React-redux being a state management tool makes it easier to pass these states from one component to another <br />
      irrespective of their position in the component tree and hence prevents the complexity of the application. <br /><br />

      When a react application holds various components in need of state from other components it becomes difficult to realize<br />
      where the state should reside among these components to make it easier to maintain.<br />
      React-redux provides a store which makes the state inside components easier to maintain.<br />
      Along with stores, react-redux introduces actions and reducers which work simultaneously with stores to make the state more predictable.
      <br /><br /><br />




    </div>
  )
}

export default React_Day5