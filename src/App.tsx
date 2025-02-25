import { useState } from "react";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
import "./App.css";

function App() {
  interface Task {
    title: string;
    description: string;
    date: string;
    status: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [edit, setEdit] = useState<number>(-1);


  const createTasks = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newTask = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: formData.get("due_date") as string,
      status: formData.get("status") as string,
    };
    setTasks([...tasks, newTask]);
  }


  // Create a function to handle the deleting of tasks
  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Create a function to handle the edit
  const handleEdit = (index: number) => {
    setEdit(index);
  }

  const handleSave = (e: React.FormEvent<HTMLFormElement>, index: number) => {
    e.preventDefault(); 

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData);
    const newTask = {
      title: formData.get("title2") as string,
      description: formData.get("description2") as string,
      date: formData.get("due_date2") as string,
      status: formData.get("status2") as string,
    };

    const list = [...tasks];
    list[index] = newTask;
    setTasks(list);
    setEdit(-1);
  }

  return (
    <div>
      <h1>ManageTasks</h1>
      <div className="container">
        <form onSubmit={createTasks}>
          <h2>Create Tasks</h2>
          <div className="tasksContainer">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="create"
              name="description"
            ></textarea>
            <label htmlFor="due_date">Due date</label>
            <input type="date" name="due_date" />
            <label htmlFor="status">Completion status</label>
            <select id="status" name="status">
              <option disabled selected>Status</option>
              <option value="Not started">Not Started</option>
              <option value="On progress">On Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button type="submit">Add</button>
          </div>
        </form>

        <div className="container">
          <div className="container1">
            <h2>My Tasks</h2>
            <div className="taskContainer">
              {tasks.map((Task, index) => (
                <div key={index} className="displayTasksContainer">
                  {(edit == index) ?
                    (<><form onSubmit={(e) => (handleSave(e, index))}>
                        <label htmlFor="title2">Title</label>
                        <input defaultValue={Task.title} id="title2" name="title2" />
                        <label htmlFor="description2">Description</label>
                        <textarea
                          id="description2"
                          className="create"
                          defaultValue={Task.description}
                          name="description2"
                        ></textarea>
                        <label htmlFor="due_date2">Due date</label>
                        <input type="date" defaultValue={Task.date} id="due_date2" name="due_date2" />
                        <label htmlFor="status2">Completion status</label>
                        <select defaultValue={Task.status} id="status2" name="status2">
                          <option disabled selected>Status</option>
                          <option value="Not started">Not Started</option>
                          <option value="On progress">On Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                        <button id="save" className="space" type="submit"><FaSave  /> Save</button>
                    </form></>)
                    :
                    (<><h3 className="taskTitle">{Task.title}</h3>
                      <p>{Task.description}</p>
                      <p>Date: {Task.date}</p>
                      <p>Completion status: {Task.status}</p>
                      <FaEdit className="space" onClick={() => handleEdit(index)} />{" "}</>)}
                      <FaTrashAlt className="space"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
