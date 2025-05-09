import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { useRecipes } from "../hooks";

function FilterByDifficulty() {
  const { activeFilters, difficulties, updateFilters } = useRecipes();
  const [difficulty, setDifficulty] = useState(activeFilters.difficulty);

  const handleSelectDifficulty = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
    updateFilters("difficulty", selectedDifficulty);
  };

  return (
    <SelectInput
      onChange={handleSelectDifficulty}
      value={difficulty}
      options={difficulties}
    />
  );
}

export default FilterByDifficulty;
