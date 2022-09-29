import React from 'react'
import HookUState from './Pages/HooksUseState'
import TestLifecycle from './Pages/Lifecycle'

import Timer from './Pages/useEffect'
import UseRedu from './Pages/UseReducer'

const React_Day3 = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3>1 . Difference between Axios and fetch</h3>

      1 . Axios has url in request object.<br />
      Fetch has no url in request object.<br /><br />

      2 . Axios is a stand-alone third party package that can be easily installed.<br />
      Fetch is built into most modern browsers; no installation is required as such.<br /><br />

      3 . Axios enjoys built-in XSRF protection.<br />
      Fetch does not.<br /><br />

      4 . Axios uses the data property.<br />
      Fetch uses the body property.<br /><br />

      5 . Axios’ data contains the object.<br />
      Fetch’s body has to be stringified.<br /><br />

      6 . Axios request is ok when status is 200 and statusText is ‘OK’.<br />
      Fetch request is ok when response object contains the ok property.<br /><br />

      7 . Axios performs automatic transforms of JSON data.<br />
      Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.<br /><br />

      8 . Axios allows cancelling request and request timeout.<br />
      Fetch does not.<br /><br />

      9 . Axios has the ability to intercept HTTP requests.<br />
      Fetch, by default, doesn’t provide a way to intercept requests.<br /><br />

      10 . Axios has built-in support for download progress.<br />
      Fetch does not support upload progress.<br /><br />

      11 . Axios has wide browser support.<br />
      Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).<br /><br />

      12 . Axios “GET” call can have body Content <br />
      Fetch “GET” call cannot have body Content<br /><br />


      <h3> 2 . What is UseState Hook ?(Implementation)</h3>

      The useState hook lets you add state to function components. By calling React.useState inside a function component, you create a single piece of state associated with that component. <br />
      (every hook starts with the word “use”; a call to useState literally lets you “use state” in a function component)

      <div style={{
        margin: '10px',
        width: '20%',
        marginLeft: '20%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'aquamarine',
        color: 'red'
      }}>
        <HookUState />
      </div>


      <h3>3 . What is useEffect Hook ?(Implementation)</h3>
      The useEffect Hook allows you to perform side effects in your components. <br />
      Some examples of side effects are: fetching data, directly updating the DOM, and timers.<br />
      useEffect accepts two arguments. The second argument is optional.<br />
      useEffect(function, dependency)

      <div style={{
        margin: '10px',
        width: '20%',
        marginLeft: '20%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'aquamarine',
        color: 'red'
      }}>
        <Timer />
        <a href='https://github.com/Paresh09pat/InterviewReact/blob/main/src/Pages/useEffect.jsx'> <button>Click Me To See Code !!</button></a>
      </div>


      <h3>4 . What are React Life cycles Explain each one with Example</h3>
      <img style={{ width: '1000px', height: '500px' }} alt='' src='https://miro.medium.com/max/3662/0*YQbu93jW_il8q84V.png' /> <br />

      Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. <br />
      The three phases are: Mounting, Updating, and Unmounting.<br />
      <h3>Mounting</h3>
      Mounting means putting elements into the DOM.<br />

      React has four built-in methods that gets called, in this order, when mounting a component:<br />

      1 . constructor() <br />
      2 . getDerivedStateFromProps()<br />
      3 . render()<br />
      4 . componentDidMount()<br />
      The render() method is required and will always be called, the others are optional and will be called if you define them.<br /><br />

      Constructor <br /><br />
      The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.<br />
      The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).<br /><br />

      render<br /><br />
      The render() method is required, and is the method that actually outputs the HTML to the DOM.<br /><br />

      componentDidMount<br />
      The componentDidMount() method is called after the component is rendered.<br />
      This is where you run statements that requires that the component is already placed in the DOM.<br />

      <h3>Updating</h3>
      The next phase in the lifecycle is when a component is updated.<br />
      A component is updated whenever there is a change in the component's state or props.<br />
      React has five built-in methods that gets called, in this order, when a component is updated:<br />
      1 . getDerivedStateFromProps()<br />
      2 . shouldComponentUpdate()<br />
      3 . render()<br />
      4 . getSnapshotBeforeUpdate()<br />
      5 . componentDidUpdate()<br />
      The render() method is required and will always be called, the others are optional and will be called if you define them.<br />
      The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.<br /><br />

      componentDidUpdate <br />
      The componentDidUpdate method is called after the component is updated in the DOM.<br />
      This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element. <br />

      <h3>Unmounting</h3>
      The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.<br />
      React has only one built-in method that gets called when a component is unmounted . <br />
      1 . componentWillUnmount() <br /><br />
      componentWillUnmount<br />
      The componentWillUnmount method is called when the component is about to be removed from the DOM. <br/>
      <p style={{
        margin: '10px',
        width: '20%',
        marginLeft: '20%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'aquamarine',
        color: 'red'
      }}> <TestLifecycle /> 
      <a href='https://github.com/Paresh09pat/InterviewReact/blob/main/src/Pages/Lifecycle.jsx'> <button>Click Me To See Code !!</button></a>
      </p>
      <h3>5 . What is UseReducer Hook ?(Implementation)</h3>

      The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook <br />
      when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.<br />
      The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.

    <p style={{
        margin: '10px',
        width: '20%',
        marginLeft: '20%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'aquamarine',
        color: 'red'
      }}>   <UseRedu /> </p>



    </div>
  )
}

export default React_Day3