import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCategories, restoreCart } from "./features/shopSlice";
import AppRoutes from "./Routes";
import { useGetAllCategoriesQuery } from "./services/shop";

function App() {
  const dispatch = useDispatch();
  const categoriesData = useGetAllCategoriesQuery();
  useEffect(() => {
    if (categoriesData.data) {
      const allCategories = categoriesData.data.data;
      dispatch(updateCategories({ categories: allCategories }));
    }
    dispatch(restoreCart());
  }, [categoriesData]);

  return <AppRoutes />;
}

export default App;
