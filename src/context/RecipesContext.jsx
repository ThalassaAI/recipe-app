import {
  useCallback,
  useEffect,
  useState,
  useMemo,
  createContext,
} from "react";
import receipesData from "../data/recipes.json";

const RecipesContext = createContext({
  recipes: [],
  loading: true,
  error: null,
  getRecipeById: () => {},
  mealTypes: [],
  difficulties: [],
  filteredRecipes: [],
  updateFilters: () => {},
  activeFilters: {
    mealType: "",
    difficulty: "",
  },
});

export default RecipesContext;

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mealTypes, setMealTypes] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    mealType: "",
    difficulty: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setError(null);
        setRecipes(receipesData.recipes);

        const allMealTypes = receipesData.recipes.reduce((acc, recipe) => {
          if (recipe.mealType && Array.isArray(recipe.mealType)) {
            recipe.mealType.forEach((type) => {
              acc.add(type.trim());
            });
            return acc;
          }
        }, new Set());

        setMealTypes(["all", ...Array.from(allMealTypes).sort()]);

        const allDifficulties = new Set(
          receipesData.recipes.map((recipe) => recipe.difficulty)
        );
        setDifficulties(["all", ...Array.from(allDifficulties).sort()]);
      } catch (error) {
        setError(error.message || "Failed to fetch recipes");
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const getRecipeById = useCallback(
    (id) => {
      return recipes.find((recipe) => recipe.id === +id);
    },
    [recipes]
  );

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const mealTypeMatch =
        activeFilters.mealType === "" ||
        activeFilters.mealType === "all" ||
        recipe.mealType.includes(activeFilters.mealType);
      const difficultyMatch =
        activeFilters.difficulty === "" ||
        activeFilters.difficulty === "all" ||
        recipe.difficulty === activeFilters.difficulty;
      return mealTypeMatch && difficultyMatch;
    });
  }, [recipes, activeFilters]);

  const updateFilters = useCallback((filterName, value) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  }, []);

  const contextValue = useMemo(() => {
    return {
      recipes,
      loading,
      error,
      getRecipeById,
      mealTypes,
      difficulties,
      filteredRecipes,
      activeFilters,
      updateFilters,
    };
  }, [
    recipes,
    loading,
    error,
    getRecipeById,
    mealTypes,
    filteredRecipes,
    updateFilters,
    activeFilters,
    difficulties,
  ]);

  return (
    <RecipesContext.Provider value={contextValue}>
      {children}
    </RecipesContext.Provider>
  );
};
