import './App.css';
import styled from 'styled-components'
import React, { useState,useEffect } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [completed, setCompleted] = useState([])
    const [input, setInput] = useState("");
    const [id,setId]=useState(0);
    
    useEffect(()=>{
        let length=items.length;
        setId(length)
    },[])
    let addItems = () => {
        let newItems={
            id:id+1,
            name:input
        }
        setItems([...items, newItems]);
        setInput("");
        setId((prev)=>prev+1)
    };
    let removeItem = (id)=>{
        console.log(id);
        let new_items =items.filter((item) => item.id !==id);
        setItems(new_items)
    }

    const completeTask = (id) =>{
        let current_task = items.find((item)=>item.id === id);
        setCompleted([...completed,current_task])
        let new_list = items.filter((item)=>item.id !== id)
        setItems(new_list)
    }

    const revertTask = (id) => {
        let current_task = completed.find((complete) => complete.id === id);
        setItems([...items,current_task])
        let new_list = completed.filter((complete) => complete.id !== id);
        setCompleted(new_list)
    }
    const deleteComplated = (id) => {
        let new_list = completed.filter((complete) => complete.id !== id);
        setCompleted(new_list)
    }

    const renderCompleted = () => (
        
        completed.map((complete)=>(
            
            <Done key={complete.id}>
                <BoxDone>
                    <TickSpanDone>
                        <TickDone src={require("../src/components/assets/tick-green.svg").default} />
                    </TickSpanDone>
                </BoxDone>{complete.id},{complete.name}
                <RevertSpanDone onClick={() => revertTask(complete.id)}>
                    <RevertDone src={require("../src/components/assets/revert.svg").default} />
                </RevertSpanDone>
                <DeleteSpanDone onClick={() => deleteComplated(complete.id)}>
                    <Delete src={require("../src/components/assets/delete.svg").default} />
                </DeleteSpanDone>
            </Done>
        ))
        
    )

    return (
        <>
            <SpotLightSection>
                <HeaderSection>
                    <Heading>Todo List</Heading>
                </HeaderSection>
                <SubTittle>Things to be done</SubTittle>
                <Things>
                    <Items>
                        {items.map((item) => (
                            <Products key={item.id}>
                                <Box onClick={()=> completeTask(item.id)}></Box>{item.id} {item.name}
                                <DeleteSpan >
                                    <Delete onClick={()=> removeItem(item.id)} src={require("../src/components/assets/delete.svg").default} />
                                </DeleteSpan>
                            </Products>
                        ))}
                        <TypeBox placeholder='Type new Task...' value={input} onChange={(e) =>setInput(e.target.value)}></TypeBox>
                        <Submit onClick={addItems}>Add New</Submit>
                    </Items>
                </Things>
                <SubTittleBottom>Completed</SubTittleBottom>
                <CompletedTask>
                    <Completed>
                       {renderCompleted()}
                    </Completed>
                </CompletedTask>
            </SpotLightSection>
        </>
    );
}

export default App;

const SpotLightSection = styled.div`
  background-color:#D3D3D0;
  width: 850px;
  height: 100vh;
  margin: auto;
  `
const HeaderSection = styled.header`
  color: blue;
  width:30%;
  margin: auto;
  `
const Heading = styled.h1`
  color: black;
  font-size :40px ;
`
const SubTittle = styled.h3`
  color: darkblue;
  margin-left: 50px;
  font-size: 30px;
`
const Things = styled.div`
`
const Items = styled.ul`
`
const Products = styled.li`
    padding: 7px;
    display: flex;
    justify-content: space-between;
    width: 450px;
    font-size: 22px;
    font-weight: 600;
    `
const Box = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid ;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;

    
    
    `
const DeleteSpan = styled.span`
    width: 25px;
    cursor: pointer;

`
const Delete = styled.img`
width: 100%;
`
const TypeBox = styled.input`
width: 300px;
height: 40px;
`
const Plus = styled.img`
`
const Submit = styled.button`
background-color: darkblue;
color: #fff;
width: 130px;
height: 40px;
border-radius: 0 8px 8px 0;
`
const SubTittleBottom = styled.h2`
  color: darkblue;
  margin-left: 50px;
  font-size: 30px;
`
const CompletedTask = styled.div`
`
const Completed = styled.ul`
`
const Done = styled.li`
    padding: 7px;
    display: flex;
    justify-content: space-between;
    width: 450px;
    font-size: 22px;
    font-weight: 600;
    `

const BoxDone = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #05c592;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
    `
const TickSpanDone = styled.span`
width: 25px;
cursor: pointer;

`
const TickDone = styled.img`
width: 100%;
`
const DeleteSpanDone = styled.span`
width: 25px;
cursor: pointer;

`
const DeleteDone = styled.img`
width: 100%;

`
const RevertSpanDone = styled.span`
width: 25px;
cursor: pointer;
`
const RevertDone = styled.img`
width: 100%;
`
