import React, { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import Favourites from "./components/Favourites";
import "./styles/App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [currentTab, setCurrentTab] = useState("add");

  const addStudent = (student) => {
    if (students.some((s) => s.rollNo === student.rollNo)) {
      alert(`Duplicate Entry: A student with Roll No ${student.rollNo} already exists.`);
      return;
    }
    setStudents([...students, { id: Date.now(), ...student }]);
    alert("Student details entered successfully!");
  };

  const addToFavourites = (id) => {
    const student = students.find((s) => s.id === id);
    if (favourites.some((s) => s.id === id)) {
      alert(`${student.name} is already in your favourites.`);
    } else {
      setFavourites([...favourites, student]);
      alert(`${student.name} added to favourites.`);
    }
  };

  const removeStudent = (id) => {
    const student = students.find((s) => s.id === id);
    setStudents(students.filter((s) => s.id !== id));
    alert(`${student.name} deleted from student list.`);
  };

  const removeFromFavourites = (id) => {
    const student = favourites.find((s) => s.id === id);
    setFavourites(favourites.filter((s) => s.id !== id));
    alert(`${student.name} removed from favourite students.`);
  };

  return (
    <div className="app">
      <header>
        <h1>Kathir's Student Management App</h1>
        <div className="tabs">
          <button onClick={() => setCurrentTab("add")}>Add Student</button>
          <button onClick={() => setCurrentTab("list")}>Student List</button>
          <button onClick={() => setCurrentTab("favourites")}>
            Favourites
          </button>
        </div>
      </header>
      <main>
        {currentTab === "add" && <AddStudent addStudent={addStudent} />}
        {currentTab === "list" && (
          <StudentList
            students={students}
            addToFavourites={addToFavourites}
            removeStudent={removeStudent}
          />
        )}
        {currentTab === "favourites" && (
          <Favourites
            favourites={favourites}
            removeFromFavourites={removeFromFavourites}
          />
        )}
      </main>
    </div>
  );
};

export default App;