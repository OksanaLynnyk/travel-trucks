import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "./components/Loader/Loader";

import { selectCampers } from "./redux/campers/selectors";
import { getDataCampers } from "./redux/campers/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const DetailsFeatures = lazy(
  () => import("./components/DetailsFeatures/DetailsFeatures"),
);
const DetailsReviews = lazy(
  () => import("./components/DetailsReviews/DetailsReviews"),
);
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(getDataCampers());
    }
  }, [dispatch, campers.length]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<DetailsFeatures />} />
            <Route path="reviews" element={<DetailsReviews />} />
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
