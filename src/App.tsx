import { useState } from "react";
import AddNewTask from "./components/AddNewTask";
import List from "./components/List";
import GlobalStyle from "./style/globalStyle";

export type TaskParameters = { task: string; done: boolean };

export default function App() {
  const [tasks, setTasks] = useState([
    { task: "Search about React Testing Library", done: true },
    { task: "Create a POC focusing on the React Testing Library", done: false },
    { task: "Present your research to your peers", done: false },
  ]);

  return (
    <main>
      <GlobalStyle />
      <List tasks={tasks} setTasks={setTasks} />
      <AddNewTask setTasks={setTasks} />
    </main>
  );
}
