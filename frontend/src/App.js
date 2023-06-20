import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/get_tasks");
      const data = await response.json();

      console.log(data);
      setTasks(data);
    }

    fetchData();
  }, []);

  const renderedTasks = tasks.map((task) => {
    return <li key={task.id}>{task.uzdevums}</li>;
  });

  return <ul>{renderedTasks}</ul>;
}

export default App;
