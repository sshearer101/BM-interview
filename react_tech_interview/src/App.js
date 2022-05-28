import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Column = styled.div`
  width: 300px;
  margin: 20px;
  justify-content: center;
  text-align: center
  
`

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 50px;

`

function App() {

  const [details, setDetails] = useState({title: '', description: ''})
  const [task, setTask] = useState([])
  const [saveItem, setSaveItem] = useState([])

  const exampleTask = {
    id: uuid(),
    title: 'Name of Task',
    description: 'Things I need to complete'
  }

  const newTask = (e) => {
    e.preventDefault();
    console.log('Create Task')
    details.swimLane = 0
    setTask([...task, details])
  }

  const showTask = (item) => {
    return (
    <Card key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <br></br>
        <button onClick={() => handleLeftClick(item)}> {'<'}</button>

        <button onClick={() => handleRightClick(item)}> {'>'}</button>
        <br></br>
        <button onClick={() => deleteTask(item)}>Delete</button>
      </Card>
    )
  }

  function deleteTask(item){
    console.log('Delete Task')
    setTask(task.filter((x) => x !== item))
   
  }

  function handleRightClick(item){
    if(item.swimLane < 2){
      item.swimLane = item.swimLane + 1
    } else{
      item.swimLane = 0
    }
    setSaveItem([...saveItem, item])
  }

   function handleLeftClick(item){
    if(item.swimLane > 0){
      item.swimLane = item.swimLane - 1
    } else{
      item.swimLane = 2
    }
    setSaveItem([...saveItem, item])
  }


  return (
    <Container>
      <Column>
      <h1>KANBAN BOARD</h1>
        <form >
        <div className="inner-form">
        <label for="titlen">Title:</label>
        <br></br>
        <input 
          type="text" id="title" name="title" 
          onChange={(e) => setDetails({...details, title: e.target.value})}
          placeholder="Input title"
        />
        <br></br>
        <label for="description">Description:</label>
        <br></br>
        <input 
          type="text" id="description" name="description" 
          onChange={(e) => setDetails({...details, description: e.target.value})}
          placeholder="Input description"
        />
        <br></br>
        <input type="submit" value="Submit" onClick={(e) => newTask(e)}/>
        </div>
        </form>
      </Column>
      <Column>
        <h2>To-Do</h2>
        <p>Put items here</p>
        {task.map((x) => 
         <div className="todo">
        {x.swimLane === 0 ? showTask(x) : ''}
        </div>
        )}
      </Column>
      <Column>
        <h2>In Progress</h2>
        <p>Put items here</p>

        {task.map((x) => 
         <div className="in-progress">
        {x.swimLane === 1 ? showTask(x) : ''}
        </div>
        )}
      </Column>
      <Column>
      <h2>Done</h2>
        <p>Put items here</p>
        
        {task.map((x) => 
         <div className="done">
        {x.swimLane === 2 ? showTask(x) : ''}
        </div>
        )}
      </Column>
    </Container>
  );
}

export default App
