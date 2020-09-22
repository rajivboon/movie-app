import React from 'react';

// functional component - arrow function
// const About = () => {
//     const message = 'Hello world'
//     return (
//         <h1>Hello About Page - {message} </h1>
//     )
// }

const About = () => {
    const message = 'surya is a good boy'
    return React.createElement('h1', null, 'who is good boy {$message} ' )
}

// const About = () => (
//     <h1>Hello About Page</h1>
// )

export default About