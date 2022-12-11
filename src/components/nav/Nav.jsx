
import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from "../searchbar/SearchBar";
import styles from './Nav.module.css';

export default function Nav({onSearch}){
    return(
        <div className= {styles.nav}>
            <Link to='/home'>Home</Link>
            <br/>
            <Link to='/about'>About</Link>
            <SearchBar onSearch= {onSearch} />
        </div>
        

    )

}