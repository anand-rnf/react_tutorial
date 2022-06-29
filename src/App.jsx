import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategories } from "./features/shopSlice";
import AppRoutes from "./Routes";
import { useGetAllCategoriesQuery } from "./services/shop";

function App() {
  const { categories } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const categoriesData = useGetAllCategoriesQuery();
  console.log(categories);
  useEffect(() => {
    if (categoriesData.data) {
      const allCategories = categoriesData.data.data;
      dispatch(updateCategories({ categories: allCategories }));
    }
  }, [categoriesData]);

  return <AppRoutes />;
}

export default App;
