import React, { useState } from "react";
import "./../styles/AddStudent.css";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);

  const validateForm = () => {
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
      return "Please enter a valid name (letters and spaces only).";
    }
    if (!department) {
      return "Please enter the department.";
    }
    if (!year || isNaN(year) || year < 1 || year > 5) {
      return "Please enter a valid year (1-5).";
    }
    if (!rollNo) {
      return "Please enter the roll number.";
    }
    if (!cgpa || isNaN(cgpa) || cgpa > 10 || cgpa < 0) {
      return "Please enter a valid CGPA (0-10).";
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      return "Please enter a valid 10-digit phone number.";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!photo) {
      return "Please upload a photo.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
    } else {
      addStudent({ name, department, year, rollNo, cgpa, phone, email, photo });
      setName("");
      setDepartment("");
      setYear("");
      setRollNo("");
      setCgpa("");
      setPhone("");
      setEmail("");
      setPhoto(null);
    }
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="number"
          placeholder="Current Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <input
          type="number"
          step="0.1"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;