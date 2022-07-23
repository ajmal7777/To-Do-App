//Packages
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import animationData from "../components/assets/104390-to-do-list.json";
import Lottie from "react-lottie";

function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [items, setItems] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [input, setInput] = useState("");
    const [id, setId] = useState(0);

    useEffect(() => {
        let length = items.length;
        setId(length);
    }, [items.length]);
    let addItems = () => {
        let newItems = {
            id: id + 1,
            name: input,
        };
        setItems([...items, newItems]);
        setInput("");
        setId((prev) => prev + 1);
    };
    let removeItem = (id) => {
        console.log(id);
        let new_items = items.filter((item) => item.id !== id);
        setItems(new_items);
    };

    const completeTask = (id) => {
        let current_task = items.find((item) => item.id === id);
        setCompleted([...completed, current_task]);
        let new_list = items.filter((item) => item.id !== id);
        setItems(new_list);
    };

    const revertTask = (id) => {
        let current_task = completed.find((complete) => complete.id === id);
        setItems([...items, current_task]);
        let new_list = completed.filter((complete) => complete.id !== id);
        setCompleted(new_list);
    };
    const deleteComplated = (id) => {
        let new_list = completed.filter((complete) => complete.id !== id);
        setCompleted(new_list);
    };

    //Completed Box
    const renderCompleted = () =>
        completed.map((complete) => (
            <Done key={complete.id}>
                <BoxDone>
                    <TickSpanDone>
                        <TickDone src={require("../components/assets/tick-green.svg").default} />
                    </TickSpanDone>
                </BoxDone>
                {complete.id},{complete.name}
                <RevertSpanDone onClick={() => revertTask(complete.id)}>
                    <RevertDone src={require("../components/assets/revert.svg").default} />
                </RevertSpanDone>
                <DeleteSpanDone onClick={() => deleteComplated(complete.id)}>
                    <Delete src={require("../components/assets/delete.svg").default} />
                </DeleteSpanDone>
            </Done>
        ));

    return (
        <>
            <FullPage>
                <Picture>
                    <Lottie options={defaultOptions} height={300} width={300} />
                </Picture>
                <SpotLightSection>
                    <HeaderSection>
                        <Heading>Todo List</Heading>
                    </HeaderSection>
                    <Things>
                        <TypeBox placeholder="Type new Task..." value={input} onChange={(e) => setInput(e.target.value)}></TypeBox>
                        <Submit onClick={addItems}>Add New</Submit>
                        <Items>
                            <Task>
                                <SubTittle>Things to be done...</SubTittle>
                                {items.map((item) => (
                                    <Products key={item.id}>
                                        <Box onClick={() => completeTask(item.id)}></Box>
                                        {item.id} {item.name}
                                        <DeleteSpan>
                                            <Delete onClick={() => removeItem(item.id)} src={require("../components/assets/delete.svg").default} />
                                        </DeleteSpan>
                                    </Products>
                                ))}
                            </Task>
                            <CompletedTask>
                                <SubTittleBottom>Completed</SubTittleBottom>
                                <Completed>{renderCompleted()}</Completed>
                            </CompletedTask>
                        </Items>
                    </Things>
                </SpotLightSection>
            </FullPage>
        </>
    );
}

export default App;

const FullPage = styled.div`
    background-color: #ffde22;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
`;
const Picture = styled.div`
    width: 20%;
    margin-top: 130px;
`;
const SpotLightSection = styled.div`
    background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    width: 1050px;
    margin: 0 auto;
    margin-top: 60px;
    padding-top: 30px;
    height: 550px;
    align-items: center;
    border-radius: 50px;
    overflow: auto;
`;
const HeaderSection = styled.header`
    color: blue;
    margin: auto;
    width: 30%;
`;
const Heading = styled.h1`
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 40px;
    margin: 0 auto;
    background: #e2e3ea;
    background: linear-gradient(to right, #03adfc 0%, #f7f7f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const SubTittle = styled.h3`
    color: #ff9100;
    margin-left: 50px;
    font-size: 30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Things = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;
const Items = styled.ul`
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const Task = styled.div`
    width: 49%;
`;
const Products = styled.li`
    padding: 7px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    width: 450px;
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
    border-radius: 4%;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    border: 1px solid;
    transition: all 0.4s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    background-color: #ffde22;
    cursor: pointer;
    text-align: center;
    background-size: 300% 100%;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    border-radius: 25px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    :hover {
        background-color: #ff4e4e;
    }
`;
const Box = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid;
    margin-right: 20px;
    cursor: pointer;
`;
const DeleteSpan = styled.span`
    width: 25px;
    cursor: pointer;
`;
const Delete = styled.img`
    width: 100%;
`;
const TypeBox = styled.input`
    width: 550px;
    height: 40px;
    border: 1px solid;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    background-color: #ffde22;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    background-size: 300% 100%;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
`;
const Submit = styled.button`
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    background-color: #ffde22;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    background-size: 300% 100%;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);

    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    :hover {
        background-color: #000;
        border-color: transparent;
        color: #444;
    }
`;
const SubTittleBottom = styled.h2`
    color: #ff9100;
    margin-left: 50px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    font-size: 30px;
`;
const CompletedTask = styled.div`
    width: 47%;
`;
const Completed = styled.ul``;
const Done = styled.li`
    padding: 7px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    width: 450px;
    font-size: 22px;
    font-weight: 600;
    background-color: #8bf0ba;
    margin-top: 10px;
    border-radius: 4%;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    border: 1px solid;
    transition: all 0.4s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    cursor: pointer;
    text-align: center;
    background-size: 300% 100%;
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    border-radius: 25px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    :hover {
        background-color: #04ff04;
    }
`;

const BoxDone = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #05c592;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`;
const TickSpanDone = styled.span`
    width: 25px;
    cursor: pointer;
`;
const TickDone = styled.img`
    width: 100%;
`;
const DeleteSpanDone = styled.span`
    width: 25px;
    cursor: pointer;
`;

const RevertSpanDone = styled.span`
    width: 25px;
    cursor: pointer;
`;
const RevertDone = styled.img`
    width: 100%;
`;
