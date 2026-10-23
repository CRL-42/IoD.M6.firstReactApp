// Exercise 2.
import { useState } from "react";
import SingleCat from "./SingleCat";
import SortButton from "./SortButton";
import AddCatForm from "./AddCatForm";

function BigCats() {
  const cats = [
    { 
      id: 1, 
      name: "Cheetah", 
      latinName: "Acinonyx jubatus",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/500px-Male_cheetah_facing_left_in_South_Africa.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    { 
      id: 2, 
      name: "Cougar", 
      latinName: "Puma concolor",
      imgUrl:"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/500px-Mountain_Lion_in_Glacier_National_Park.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    { 
      id: 3, 
      name: "Jaguar", 
      latinName: "Panthera onca",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
    },
    { 
      id: 4, 
      name: "Leopard", 
      latinName: "Panthera pardus",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/500px-African_leopard_male_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" 
    },
    { 
      id: 5, 
      name: "Lion", 
      latinName: "Panthera leo",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" 
    },
    { 
      id: 6, 
      name: "Snow leopard", 
      latinName: "Panthera uncia",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/500px-Irbis4.JPG?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" 
    },
    { 
      id: 7, 
      name: "Tiger", 
      latinName: "Panthera tigris",
      imgUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/960px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" 
    },
  ];

  const [currentCats, setCurrentCats] = useState(cats);
  const [filterCats, setFilterCats] = useState("All");

  
  // Exercise 4.
  const handleReverse = () => {
    let newCats = [...currentCats];
    newCats.reverse();
    setCurrentCats(newCats);
  }

  const handleSortName = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCats(newCats);
  }
  
  const handleFilterPanthera = () => {
    setFilterCats('Panthera')
  }
  
  const handleFilterAll = () => {
    setFilterCats('All');
  }
  // Exercise 4 end.
  
  // Exercise 5.
  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1;
    setCurrentCats([...currentCats, newCat])
  }
  
  const handleRemoveCat = (id) => {
  let newCats = currentCats.filter(cat => cat.id != id);
  setCurrentCats(newCats)
  }
  // Exercise 5 end.
  
  // Exercise 4.
  const displayedCats =currentCats.filter(cat => {
    if (filterCats === "All")
      return true;
    else
      return cat.latinName.includes(filterCats);
  })
  // Exercise 4 end.

  const catList = displayedCats.map(cat => (
      <SingleCat
        key={cat.id}
        id={cat.id}
        name={cat.name}
        latinName={cat.latinName}
        imgUrl={cat.imgUrl}
        onRemoveCat={handleRemoveCat}
      />
    )
  )
  
  return (
    <div className="BigCats componentBox">
        <h2>Exercise 2 & 5</h2>
        <ul>
            {catList}
        </ul>
        {/* Exercise 4. */}
        <h2>Exercise 4</h2>
        <div>
          <SortButton label='Reverse Order' onClick={handleReverse} />
          <SortButton label='Sort Alphabetically' onClick={handleSortName} />
          <SortButton label='Display Panthera' onClick={handleFilterPanthera} />
          <SortButton label='Display All' onClick={handleFilterAll} />
          {/* Exercise 5 */}
          <AddCatForm onAddCat={handleAddCat} />
          {/* Exercise 5 end. */}
        </div>
        {/* Exercise 4 end. */}
    </div>
  );
}

export default BigCats;
// Exercise 2 end.