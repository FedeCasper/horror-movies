import { createHashRouter } from "react-router-dom";
import FullCatalogScreen from "../pages/FullCatalogScreen/FullCatalogScreen.jsx";
import MoviesScreen from "../pages/MoviesScreen/MoviesScreen.jsx";
import SeriesScreen from "../pages/SeriesScreen/SeriesScreen.jsx";
import BookScreen from "../pages/BooksScreen/BookScreen.jsx";
import ShortsScreen from "../pages/ShortsScreen/ShortsScreen.jsx";
import TopsScreen from "../pages/TopsScreen/TopsScreen.jsx";
import LayoutMain  from "../pages/Layout.jsx";
import ItemDetailsScreen from "../pages/ItemDetailsScreen/ItemDetailsScreen.jsx";
import HomeScreen from "../pages/HomeScreen/HomeScreen.jsx";

const routes = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/", element: <HomeScreen /> },
      { path: "fullCatalog", element: <FullCatalogScreen /> },
      { path: "movie", element: <MoviesScreen /> },
      { path: "serie", element: <SeriesScreen /> },
      { path: "book", element: <BookScreen /> },
      { path: "short", element: <ShortsScreen /> },
      { path: "top", element: <TopsScreen /> },
      { path: "details/:id", element: <ItemDetailsScreen /> },
      // Catch-all route para errores
      { path: "*", element: <HomeScreen /> }
    ],
  },
];

// Usar HashRouter (rutas con #) - funciona perfectamente en GitHub Pages
const router = createHashRouter(routes);

export default router;