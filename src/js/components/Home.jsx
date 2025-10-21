import React, { useState } from "react";

// TareasApp.jsx (versión Bootstrap)
// Esta versión no usa Tailwind, solo clases de Bootstrap.
// Compatible con el proyecto de 4Geeks Academy.

export default function TareasApp() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleKeyDown(e) {
    if (e.key === "Enter" && taskText.trim() !== "") {
      const newTask = { id: Date.now(), text: taskText.trim() };
      setTasks((prev) => [newTask, ...prev]);
      setTaskText("");
    }
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h1 className="display-4 text-muted mb-4">Tareas</h1>

      <div className="card shadow-sm w-75">
        {/* Input */}
        <div className="card-header p-3">
          <input
            type="text"
            className="form-control form-control-lg border-0"
            placeholder="Nueva tarea"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Nueva tarea"
          />
        </div>

        {/* Lista de tareas */}
        <ul className="list-group list-group-flush">
          {tasks.length === 0 ? (
            <li className="list-group-item text-muted">No hay tareas, añadir tarea.</li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span className="fs-5">{task.text}</span>

                {/* Botón eliminar visible al hover (Bootstrap no tiene group-hover, así que usamos CSS inline) */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-danger btn-sm"
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                  aria-label={`Eliminar ${task.text}`}
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Pie */}
        <div className="card-footer text-muted small">
          {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
        </div>
      </div>
    </div>
  );
}
