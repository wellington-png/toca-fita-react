import { useContext } from "react";
import HeaderWrapper  from "./styles";
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

import SearchContext from "../../context/searchContext";
import { Link } from "react-router-dom";



export default function Header() {
    const { search, setSearch } = useContext(SearchContext);


    return (
        <HeaderWrapper>
            <div className="logo">
                <Link to="/"><p>
                    <span>Toca</span> <br />
                    <span>Fita</span>
                </p></Link>
            </div>
            <div className="search">
                <input placeholder="Search among 100.000+ music tracks" type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={
                    () => {
                        // redirecionar para a página de busca
                        window.location.href = `/`;
                        localStorage.setItem('search', search);
                    }
                }> <FaSearch /> </button>
            </div>
            <div className="navbar">
                <button>
                    <HiMenuAlt3 />
                </button>
            </div>
        </HeaderWrapper>
    );
}