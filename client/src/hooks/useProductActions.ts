import { useSelector, useDispatch } from "react-redux";


export const useResetFilters = () => {
    const dispatch = useDispatch();
  
    const resetFilters = (): void => {
      // Default data
      const defaultCategories = "all";
      const defaultPage = 1;
      const defaultSort = "relevance";
  
      // Save default data -> Redux state
    //   dispatch(setTagCategories(defaultCategories));
    //   dispatch(setActiveIndex(defaultSort));
    //   dispatch(setCurrentPage(defaultPage));
  
      const defaultFilters = `categories=${defaultCategories}&page=${defaultPage}&sort=${defaultSort}`;
      localStorage.setItem("shopFilters", defaultFilters);
    };
  
    return { resetFilters };
  };