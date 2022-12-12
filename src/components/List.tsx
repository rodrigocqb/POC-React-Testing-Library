import styled from "styled-components";
import { TaskParameters } from "../App";
import Task from "./Task";

export default function List({
  tasks,
  setTasks,
}: {
  tasks: TaskParameters[];
  setTasks: React.Dispatch<React.SetStateAction<TaskParameters[]>>;
}) {
  return (
    <Container>
      {tasks.map((value, index) => (
        <Task
          task={value.task}
          done={value.done}
          setTasks={setTasks}
          key={index}
          index={index}
        />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
