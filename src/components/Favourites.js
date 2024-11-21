import React from "react";
import StudentCard from "./StudentCard";
import "./../styles/Favourites.css";

const Favourites = ({ favourites, removeFromFavourites }) => {
  return (
    <div className="favourites">
      <h2>Favourite Students</h2>
      <div className="cards-container">
        {favourites.length === 0 ? (
          <p>No favourite students. Add some from the student list.</p>
        ) : (
          favourites.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              removeFromFavourites={removeFromFavourites}
              isFavourite={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;