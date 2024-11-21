# **Student Management App** 📚

A responsive and dynamic **Student Management System** built with **React.js**. This application allows users to manage student records, add/remove students, mark favorites, search, and download student profiles as PDF.

---

## **Features** ✨

- **Add Student**: Form validation to ensure valid name, email, CGPA (max 10), and phone number (10 digits).
- **Search Students**: Search by name, roll number, or department.
- **Manage Favorites**: Add students to favorites, view them in a dedicated section, and remove them as needed.
- **Download Profile**: Download individual student details (with photo) as a PDF.
- **Remove Student**: Easily delete a student from the list.
- **Responsive Design**: Fully optimized for all screen sizes (desktop, tablet, and mobile).
- **Alert Messages**: Real-time notifications for actions (e.g., adding to favorites, deleting entries).

---

## **Project Structure** 📁

```plaintext
student-management-app/
├── public/
│   ├── index.html       # Main HTML file
│   └── favicon.ico      # App icon
├── src/
│   ├── components/
│   │   ├── AddStudent.js        # Add Student component
│   │   ├── StudentList.js       # Student List component
│   │   ├── Favourites.js        # Favourites component
│   │   ├── StudentCard.js       # Individual Student Card component
│   │   ├── SearchBar.js         # Search bar for student filtering
│   │   └── utilities.js         # Utility functions for validation, alerts, etc.
│   ├── styles/
│   │   ├── App.css              # Global styles
│   │   ├── AddStudent.css       # Styles for Add Student page
│   │   ├── StudentList.css      # Styles for Student List page
│   │   ├── Favourites.css       # Styles for Favorites page
│   │   └── StudentCard.css      # Styles for Student Cards
│   ├── App.js                   # Main React component
│   ├── index.js                 # Entry point for React app
│   └── data/
│       └── sampleData.js        # Sample student data (optional)
├── .gitignore
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation
└── yarn.lock / package-lock.json # Dependency lock file
```

Installation and Setup 🚀
Follow the steps below to run the project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/student-management-app.git
   cd student-management-app
2.Install dependencies
   ```bash
   npm install
   ```
3.Start the development server
   ```bash
   npm start
   ```
4.Open the app

  ## **How to Use** 🛠️

### **1. Add Student**
- Navigate to the **"Add Student"** tab.
- Fill out the form with valid details:
  - **Name**: Required.
  - **Email**: Must be valid.
  - **Phone**: 10 digits only.
  - **CGPA**: Maximum value of 10.
- Click **Submit** to add the student.  
  - If successful, you'll receive an alert.

---

### **2. View Student List**
- Navigate to the **"Student List"** tab.
- View all students with their details and available options:
  - **Add to Favorites**
  - **Download Profile** (as PDF)
  - **Remove Student**

---

### **3. Favorites Section**
- Navigate to the **"Favorites"** tab.
- View all students marked as favorites.
- Remove a student from favorites using the **"Remove from Favorites"** button.

---

### **4. Search Functionality**
- Use the **search bar** in the **"Student List"** tab to filter students by:
  - **Name**
  - **Roll Number**
  - **Department**

---

## **Core Technologies** 🖥️

- **Frontend**: React.js
- **Styling**: CSS3 with media queries for responsiveness
- **PDF Generation**: `jspdf` library
