import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
//   const [title, setTitle] = useState("");
//   const [year, setYear] = useState("");
//   const [synopsis, setsynopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target)

    onAddMovie(Object.fromEntries(data));

    e.target.reset()

  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Movie Title:
          <input
            name="title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        </div>
        <div>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            // value={year}
            // onChange={(e) => setYear(e.target.value)}
          />
        </label>
        </div>
        <div>
        <label>
            Synopsis:
            <input
              name="synopsis"
            //   value={synopsis}
            //   onChange={(e) => setsynopsis(e.target.value)}
            />
        </label>
        </div>
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm