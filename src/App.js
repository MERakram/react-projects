
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./components/old_project/LoginPage";
import AddUsers from "./components/old_project/AddUsers";
import AddDivs from "./components/old_project/AddDivs";
import TaskList from "./components/old_project/TaskListOld";
import List from "./components/old_project/List&Delete";
import Comp from "./components/old_project/LinaList";
import RandomButton from "./components/old_project/randomNumberButton";
import MainTaskList from "./components/task1/MainTaskList";
import MainTaskForm from "./components/task2/MainTaskForm";
import TaskApp from "./components/task3/TaskApp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/random" element={<RandomButton maxNum={10} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/form" element={<AddUsers />} />
                <Route path="/divs" element={<AddDivs />} />
                <Route path="/task" element={<TaskList />} />
                <Route path="/list" element={<List />} />
                <Route path="/linalist" element={<Comp />} />
                <Route path="/main" element={<MainTaskList />} />
                <Route path="/main2" element={<MainTaskForm />} />
                <Route path="/task2" element={<TaskApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
