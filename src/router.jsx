import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from './pages/default';
import Home from './pages/home';
import AlbumDetails from './pages/albumDetails';

import SearchContext from './context/searchContext';


export default function Router() {
  const [search, setSearch] = useState(
    localStorage.getItem('search') || ''
  );

  return (
    <SearchContext.Provider value={ { search, setSearch } }>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route path="/" index element={<Home />} />
            <Route path="/album/" element={<AlbumDetails />} />
          </Route>
          
        </Routes>
    </BrowserRouter>
    </SearchContext.Provider>
  )
}
