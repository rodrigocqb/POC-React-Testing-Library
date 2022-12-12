import { IoCheckbox, IoTrash } from "react-icons/io5";
import styled from "styled-components";
import { TaskParameters } from "../App";

export default function Task({
  task,
  done,
  setTasks,
  index,
}: TaskParameters & {
  setTasks: React.Dispatch<React.SetStateAction<TaskParameters[]>>;
  index: number;
}) {
  function updateTask() {
    setTasks((old) => {
      const newArray = [...old];
      newArray[index] = { task, done: !done };
      return newArray;
    });
  }

  function deleteTask() {
    setTasks((old) => {
      const newArray = [...old];
      newArray.splice(index, 1);
      return newArray;
    });
  }

  return (
    <TaskContainer done={done}>
      <IoCheckbox />
      <p>{task}</p>
      <button onClick={updateTask}>{done ? "Uncheck" : "Check"}</button>
      <TrashWrapper onClick={deleteTask}>
        <IoTrash />
      </TrashWrapper>
    </TaskContainer>
  );
}

const TaskContainer = styled.li<{ done: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 5px;

  svg {
    color: ${({ done }) => (done ? "#90EE90" : "#D3D3D3")};
  }
`;

const TrashWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  svg {
    color: #ffffff;
  }
`;
