import React, { useState } from 'react'
import {useState} from "react";

function script() {
const[todoList,setTodoList]=useState([]);  //creating the object with individual id and taskName
const [newTask,setNewTask]=useState("");  //getting the input string/task
  
const handleChange=(event)=>{
    setNewTask(event.target.value);
}

const addTask=()=>{
    const task={
        id: todoList.length === 0 ? 1:todoList[todoList-1].id+1,  //grabing id of prev element then adding 1 to it
        taskName:newTask,
        completed:false
    }
    const newTodoList=[...todoList,task]  //creating a newlist that is made up of the oldlist with the addition of the newtask
    setTodoList(newTodoList)
}

const deleteTask=(id)=>{
    const newTodoList=todoList.filter((task)=>{  //filter takes in a func, traverses through the list to delete the corresponding element
        if(task.id==id){
            return false
        }
        else{
            return true
        }
    })
    setTodoList(newTodoList)
}

const completeTask=(id)=>{
    setTodoList(todoList.map((task)=>{
        if(task.id ===id){  //if id same then that task remains same but the completed prop changes
            return{...task,completed:true}
        }
        else{
            return task
        }
    }))
}
return (
    <div>
        <div className='addTask'>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add task</button>
        </div>

        <div className='list'>
            {todoList.map((task)=>{   //grabbing todolist and mapping thru it because we want to display each element in the list
                return(
                    <div> //this is how a func is passed if it takes a parameter
                        <h2>{task.taskName}</h2>  
                        <button onClick={()=>deleteTask(task.id)}>delete</button>
                        <button onClick={()=>completeTask(task.id)}>completed</button>
                    </div> //use css to change color of completed task
                )
            })}
        </div>
    </div>
  )
}
export default script


//we can also use components for list by passing values of object and func as parameters
/**
 <Task 
 taskName={task.taskName}
 id={task.id}
 completed={task.completed}
 deleteTask={deleteTask}
 completeTask={completeTask}
 />

export const Task=(props)=>{
    return(
        div>
            <h2>{props.taskName}</h2>  
            <button onClick={()=>props.deleteTask(props.id)}>delete</button>
            <button onClick={()=>props.completeTask(props.id)}>completed</button>
        </div> 
    )
}
**/









