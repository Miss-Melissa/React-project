import { Route, Routes } from "react-router-dom";
import AllMeetupsPages from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <>
    <MainNavigation />
    <main>
        <Routes>
          <Route path="/" element={<AllMeetupsPages />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        </main>
        </>
  );
}

export default App;
