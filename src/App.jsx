import AppRoutes from "./Routes";
import { useGetAllCategoriesQuery } from "./services/shop";

function App() {
  const categoriesData = useGetAllCategoriesQuery();
  if (categoriesData.data) {
    console.log(categoriesData.data);
  }
  if (categoriesData.isLoading) {
    console.log("Loading categories");
  }

  return <AppRoutes />;
}

export default App;
