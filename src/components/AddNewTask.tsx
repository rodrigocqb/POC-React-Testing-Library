import { useState } from "react";
import styled from "styled-components";
import { TaskParameters } from "../App";

export default function AddNewTask({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<TaskParameters[]>>;
}) {
  const [newTask, setNewTask] = useState({ task: "", done: false });
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        setTasks((old) => {
          return [...old, newTask];
        });
        setNewTask((old) => {
          return { ...old, task: "" };
        });
      }}
    >
      <input
        value={newTask.task}
        placeholder="Add new task"
        type="text"
        onChange={(e) => {
          setNewTask((old) => {
            return { ...old, task: e.target.value };
          });
        }}
        required
      ></input>
      <button type="submit">Create</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  column-gap: 5px;
`;
