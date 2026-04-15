import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function MyApp(){
    return(
        <div>
            <h1>custom chai</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const AnotherUser = " Chai aur code"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    AnotherUser
)


const anotherElement = (
    <a href ="https://google.com" target="_blank"> Visit Google </a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(

    reactElement
)
