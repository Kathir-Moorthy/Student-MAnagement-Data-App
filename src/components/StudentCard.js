import React from "react";
import jsPDF from "jspdf";
import "./../styles/StudentCard.css";

const StudentCard = ({ student, addToFavourites, removeStudent, removeFromFavourites, isFavourite }) => {
  const downloadProfile = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Student Profile", 10, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${student.name}`, 10, 40);
    doc.text(`Department: ${student.department}`, 10, 50);
    doc.text(`Current Year: ${student.year}`, 10, 60);
    doc.text(`Roll No: ${student.rollNo}`, 10, 70);
    doc.text(`CGPA: ${student.cgpa}`, 10, 80);
    doc.text(`Phone: ${student.phone}`, 10, 90);
    doc.text(`Email: ${student.email}`, 10, 100);
    if (student.photo) {
      doc.addImage(student.photo, "JPEG", 10, 110, 50, 50);
    }
    doc.save(`${student.name}_profile.pdf`);
  };

  return (
    <div className="student-card">
      <img src={student.photo} alt={`${student.name}'s photo`} />
      <p><span>Name:</span> {student.name}</p>
      <p><span>Department:</span> {student.department}</p>
      <p><span>Current Year:</span> {student.year}</p>
      <p><span>Roll No:</span> {student.rollNo}</p>
      <p><span>CGPA:</span> {student.cgpa}</p>
      <p><span>Phone:</span> {student.phone}</p>
      <p><span>Email:</span> {student.email}</p>
      <div className="card-buttons">
        {!isFavourite && (
          <>
            <button onClick={() => addToFavourites(student.id)}>Add to Favourites</button>
            <button onClick={downloadProfile}>Download Profile</button>
            <button onClick={() => removeStudent(student.id)}>Remove Student</button>
          </>
        )}
        {isFavourite && (
          <button onClick={() => removeFromFavourites(student.id)}>Remove from Favourites</button>
        )}
      </div>
    </div>
  );
};

export default StudentCard;