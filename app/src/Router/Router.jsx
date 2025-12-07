import { createBrowserRouter } from "react-router-dom";
import FullCatalogScreen from "../pages/FullCatalogScreen/FullCatalogScreen.jsx";
import MoviesScreen from "../pages/MoviesScreen/MoviesScreen.jsx";
import SeriesScreen from "../pages/SeriesScreen/SeriesScreen.jsx";
import BookScreen from "../pages/BooksScreen/BookScreen.jsx";
import ShortsScreen from "../pages/ShortsScreen/ShortsScreen.jsx";
import TopsScreen from "../pages/TopsScreen/TopsScreen.jsx";
import LayoutMain  from "../pages/Layout.jsx";
import ItemDetailsScreen from "../pages/ItemDetailsScreen/ItemDetailsScreen.jsx";
import HomeScreen from "../pages/HomeScreen/HomeScreen.jsx";

// Derivar el basename en este orden:
// 1. `window.__BASENAME__` definido en el HTML (útil para GH Pages)
// 2. Si es build de producción, usar "/horror-movies"
// 3. Por defecto, cadena vacía
const computedBasename = (typeof window !== 'undefined' && window.__BASENAME__) || (import.meta.env.PROD ? "/horror-movies" : "")

const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <LayoutMain />,
         children: [
            {
               path: "/",
               element: <HomeScreen />
            },
            {
               path: "/fullCatalog",
               element: <FullCatalogScreen />
            },
            {
               path: "/movie",
               element: <MoviesScreen />
            },
            {
               path: "/serie",
               element: <SeriesScreen />
            },
            {
               path: "/book",
               element: <BookScreen />
            },
            {
               path: "/short",
               element: <ShortsScreen />
            },
            {
               path: "/top",
               element: <TopsScreen />
            },
            {
               path: "details/:id",
               element: <ItemDetailsScreen />
            }
         ]
      }
   ],
   {
      basename: import.meta.env.PROD ? "/horror-movies" : ""
   }
)

export default router