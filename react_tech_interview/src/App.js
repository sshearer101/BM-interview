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
  const [activeStep, setActiveStep] = useState(0)

  const exampleTask = {
    id: uuid(),
    title: 'Name of Task',
    description: 'Things I need to complete'
  }

  const newTask = (e) => {
    e.preventDefault();
    console.log('Create Task')
    details.swimLane = "toDo"
    setTask([...task, details])
  }

  const showTask = (item) => {
    return (
    <Card key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <br></br>
        <button >{'<'}</button>
        <button onClick={() => handleClick(item)}> {'>'}</button>
        <br></br>
        <button onClick={() => deleteTask()}>Delete</button>
      </Card>
    )
  }

  const deleteTask = () => {
    console.log('Delete Task')
    // Delete a task here
  }

  function handleClick(item){
    if (item.swimLane === "toDo"){
      item.swimLane = "inProgress"
    }
    else if(item.swimLane === "inProgress"){
      item.swimLane = "done"
    } 
    else if (item.swimLane === "done"){
      item.swimLane = "toDo"
    }
    console.log(item)
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
        />
        <br></br>
        <label for="description">Description:</label>
        <br></br>
        <input 
          type="text" id="description" name="description" 
          onChange={(e) => setDetails({...details, description: e.target.value})}
        />
        <br></br>
        <input type="submit" value="Submit" onClick={(e) => newTask(e)}/>
        </form>
      </Column>
      <Column>
        <h2>Todo</h2>

        {task.map((x) => 
         x.swimLane === "toDo" ? showTask(x) : ''
        )}
      </Column>
      <Column>
        <h2>In Progress</h2>
        <p>Put items here</p>
        {task.map((x) => 
         x.swimLane === "inProgress" ? showTask(x) : ''
         )}
      </Column>
      <Column>
      <h2>Done</h2>
        <p>Put items here</p>
        {task.map((x) => 
         x.swimLane === "done" ? showTask(x) : ''
         )}
      </Column>
    </Container>
  );
}

export default App
