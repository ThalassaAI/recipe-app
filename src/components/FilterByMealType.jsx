import React, { useState } from "react";
import { useRecipes } from "../hooks";
import SelectInput from "./SelectInput";

function FilterByMealType() {
  const { activeFilters, mealTypes, updateFilters } = useRecipes();
  const [mealType, setMealType] = useState(activeFilters.mealType);

  const handleSelectDifficulty = (e) => {
    const selectedMealType = e.target.value;
    setMealType(selectedMealType);
    updateFilters("mealType", selectedMealType);
  };

  return (
    <SelectInput
      defaultOptionText="Sort by meal type"
      onChange={handleSelectDifficulty}
      value={mealType}
      options={mealTypes}
    />
  );
}

export default FilterByMealType;
