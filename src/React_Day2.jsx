import { Link } from 'react-router-dom'
import React from 'react'
import Homepage from './Pages/ConRan'

const React_Day2 = () => {
    return (
        <div style={{ marginLeft: '20px' }}>

            <h3> 1 . What is the Difference between react and react native? Which one is library or framework?</h3>

            <h3>ReactJS</h3>
            1. React is used for creating websites, web apps, SPAs etc. <br />
            2. React is a Javascript library used for creating UI hierarchy.<br />
            3. It is responsible for rendering of UI components, It is considered as V part Of MVC framework.<br />
            4. React’s virtual DOM is faster than the conventional full refresh model, since the virtual DOM refreshes only parts of the page, Thus decreasing the page refresh time.<br />
            5. React uses components as basic unit of UI which can be reused this saves coding time.<br />
            6. Simple and easy to learn.

            <h3>React Native</h3>
            1. React Native is a framework that is used to create cross-platform Native apps. It means you can create native apps and the same app will run on Android and ios. <br />
            2. React native have all the benefits of ReactJS<br />
            3. React native allows developers to create native apps in web-style approach.<br />
            4. Front end developer can become mobile developer easily.<br />

            <h3> 2 . What is the package name you are using for routing </h3>
            React contains three different packages for routing. These are:<br />
            1. react-router: It provides the core routing components and functions for the React Router applications.<br />
            2. react-router-native: It is used for mobile applications.<br />
            3. react-router-dom: It is used for web applications design.<br />


            <h3> 3 . Routing Implementation</h3>
            The process of directing a user to different pages based on their action or request is known as routing.  <br />
            In ReactJS the process of routing is used for developing Single Page Web Applications, mainly to define multiple routes in the application.
            <h4> Note : We can see the Navbar at the Top they shows us an implementation of Routing </h4> <br />


            <h3>4 . How do you pass data from parent to child</h3>
            Using Class Component <br />
            <Link to='/passdata'> <button>Click To See Example Of Data Pass</button> </Link>


            <h3>5 . What is lazy loading in react ?</h3>
            Lazy loading (also called on-demand loading) is an optimization technique for the online content, be it a website or a web app. <br />
            Instead of loading the entire web page and rendering it to the user in one go as in bulk loading, the concept of lazy loading assists in loading only the required section <br />
            and delays the remaining, until it is needed by the user.<br /><br />

            Advantages of Lazy loading :<br />

            1 . On-demand loading reduces time consumption and memory usage thereby optimizing content delivery. As only a fraction of the web page, which is required, is loaded first thus, <br />
            the time taken is less and the loading of rest of the section is delayed which saves storage. All of this enhances the user’s experience as the requested content is fed in no time.<br />
            2 . Unnecessary code execution is avoided.<br />
            3 . Optimal usage of time and space resources makes it a cost-effective approach from the point of view of business persons. (website owners)<br /><br />

            Disadvantages of Lazy loading : <br />

            1 . Firstly, the extra lines of code, to be added to the existing ones, to implement lazy load makes the code a bit complicated.<br />
            2 . Secondly, lazy loading may affect the website’s ranking on search engines sometimes, due to improper indexing of the unloaded content.<br />

            <h3>6 . Difference b/w Stateful and stateless Component</h3>


            <h3>7 . How do you switch one component to another, Conditional Rendering</h3>
            <div style={{
                margin:'10px',
                width:'20%',
                marginLeft:'20%',
                textAlign:'center',
                padding:'10px',
                backgroundColor:'aquamarine',
                color:'red'
            }}>
                <Homepage />
            </div>







        </div>
    )
}

export default React_Day2