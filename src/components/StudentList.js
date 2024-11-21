import React, { useState } from "react";
import StudentCard from "./StudentCard";
import "./../styles/StudentList.css";

const StudentList = ({ students, addToFavourites, removeStudent }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search by Name, Roll No, or Department"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="cards-container">
        {filteredStudents.length === 0 ? (
          <p>No students match your search criteria.</p>
        ) : (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              addToFavourites={addToFavourites}
              removeStudent={removeStudent}
              isFavourite={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;