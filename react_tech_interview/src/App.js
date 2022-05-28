import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Column = styled.div`
  width: 300px;
  margin: 20px;
  justify-content: center;
`

const Card = styled.div`
  width: 200px;
  outline: 5px solid purple;
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
        </form>
      </Column>
      <Column>
        <h2>Todo</h2>
        {task.map((x) => 
         x.swimLane === 0 ? showTask(x) : ''
        )}
      </Column>
      <Column>
        <h2>In Progress</h2>
        <p>Put items here</p>
        {task.map((x) => 
         x.swimLane === 1 ? showTask(x) : ''
         )}
      </Column>
      <Column>
      <h2>Done</h2>
        <p>Put items here</p>
        {task.map((x) => 
         x.swimLane === 2 ? showTask(x) : ''
         )}
      </Column>
    </Container>
  );
}

export default App
