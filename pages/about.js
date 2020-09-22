import React from 'react';

// functional component - arrow function
// WHEN TO USE:
// 1. For smaller loadComponents
// 2. reusable components 
// 3. presentional loadComponents, patialy RTCIceGatherer, we can use HOOKS and specify state 
// const About = () => {
//     const message = 'Hello world'
//     return (
//         <h1>Hello About Page - {message} </h1>
//     )
// }

class About extends React.Component {

    render() {
        return (
            <h1> Hello I am class component</h1>
        )
    }
}

export default About