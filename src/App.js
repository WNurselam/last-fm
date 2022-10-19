import "./App.css";
import { Routes, Route } from "react-router-dom";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";
import ArtistList from "./components/ArtisList/ArtistList";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
function App() {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <i
        className="fa-solid fa-circle-half-stroke icon-theme"
        onClick={toggleTheme}
      ></i>

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<ArtistList />} />
          <Route path="/detail/:mbid" element={<ArtistDetail />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
