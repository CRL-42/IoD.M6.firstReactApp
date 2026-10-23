// Exercise 5.
import { useState } from "react";

function AddCatForm({onAddCat}) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, imgUrl})
    }

    return (
      <div className="AddCatForm componentBox">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Cat Name:
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Cat Latin Name:
              <input
                name="latinName"
                value={latinName}
                onChange={(e) => setLatinName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Cat Image:
              <input
                name="imgUrl"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </label>
          </div>
          <button>Add Cat</button>
        </form>
      </div>
    );
}

export default AddCatForm
// Exercise 5 end.