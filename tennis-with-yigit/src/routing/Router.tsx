import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./Paths";
import MainLayout from "../components/layout/MainLayout";
import PageLoading from "../components/Loading/PageLoading";

const Home = lazy(() => import("../pages/Home/Home"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const About = lazy(() => import("../pages/About/About"));
const Booking = lazy(() => import("../pages/Booking/Booking"));

const withSuspense = (Component: React.ElementType) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

export default createBrowserRouter([
  {
    path: Paths.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: Paths.ABOUT, element: withSuspense(About) },
      { path: Paths.BOOKING, element: withSuspense(Booking) },
      { path: Paths.CONTACT, element: withSuspense(Contact) },
    ],
  },
]);
