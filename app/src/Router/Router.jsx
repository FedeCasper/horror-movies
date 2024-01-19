import { createBrowserRouter } from "react-router-dom";
import CompleteCatalogScreen from "../pages/CompleteCatalogScreen/CompleteCatalogScreen.jsx";
import MoviesScreen from "../pages/MoviesScreen/MoviesScreen.jsx";
import SeriesScreen from "../pages/SeriesScreen/SeriesScreen.jsx";
import BookScreen from "../pages/BooksScreen/BookScreen.jsx";
import ShortsScreen from "../pages/ShortsScreen/ShortsScreen.jsx";
import TopsScreen from "../pages/TopsScreen/TopsScreen.jsx";
import LayoutMain  from "../pages/Layout.jsx";

const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <LayoutMain />,
         children: [
            {
               path: "/",
               element: <CompleteCatalogScreen />
            },
            {
               path: "/movies",
               element: <MoviesScreen />
            },
            {
               path: "/series",
               element: <SeriesScreen />
            },
            {
               path: "/books",
               element: <BookScreen />
            },
            {
               path: "/shorts",
               element: <ShortsScreen />
            },
            {
               path: "/tops",
               element: <TopsScreen />
            }
         ]
      }
   ]
)

export default router