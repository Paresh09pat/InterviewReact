import React from 'react'
import UseReferance from './Pages/UseRef'

const React_Day4 = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3>1 . What is UseMemo Hook ?(Implementation)</h3>

      <h3>2 . What is UseRef Hook ?(Implementation)</h3>
      The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /><br />
      The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property.<br />
      These values are accessed from the current property of the returned object.<br />
      The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

      <UseReferance />
      


      <h3>3 . What is Context api</h3>

      The previous version of Context Api was experimental whereas the new version in React 16+ is more stable and efficient.<br />
      Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. <br />
      It is light in weight and easier to use, to create a context just need to call React.createContext().<br />
      No need to install other dependencies or third-party libraries like redux for state management.<br /><br />

      It has two properties Provider and Consumer. The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed.


      <h3>4 . Difference between callback and useCallback Hook ?</h3>

      <h3>useCallback</h3>
      The useCallback hook is used when you have a component in which the child is rerendering again and again without need.<br />

      Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.<br />
      This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.<br />


      <h3> 5 . What is Props Drilling Concept ? What is State Uplifting ?</h3>
      <h3>Prop drilling</h3>
      Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.
      <h3>State Uplifting</h3>
      As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. <br />
      So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.


      <h3> 6 . Difference between useEffect and useContext ?</h3>
      <h3>useEffect</h3>
      It allows us to implement all of the lifecycle hooks from within a single function API.

      <h3>useContext</h3>
      This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props.




    </div>
  )
}

export default React_Day4