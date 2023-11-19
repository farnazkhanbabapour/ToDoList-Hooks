import React, { useEffect } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'

export default function App() {
    
    useEffect(()=>{
        console.log("App.js => Mount")
    }, [])

    

    return (
        <div>
            <TodoList></TodoList>
        </div>
    )
}
