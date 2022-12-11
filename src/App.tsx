import AddNewToDo from "./components/AddNewToDo";
import List from "./components/List";
import GlobalStyle from "./style/globalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <List />
      <AddNewToDo />
    </>
  );
}
