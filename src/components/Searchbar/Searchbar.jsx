/* eslint-disable no-unused-vars */
import {Header, Form, Button, Input} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { fetch } from '../../services/ApiServices';

export function Searchbar() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => { 
        e.preventDefault();
        if(search.trim() === '') {
            alert('Please enter a search term');
            return
        }

        setSearch(e.target.value);
        console.log('search', search);
    }

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }
     
    fetch()

    return (
        <Header>
            <Form onSubmit={handleSearch}>
                <Input     
                onChange={handleChange}    
                type="text"
                placeholder="Search weather by city"
                />

                <Button type="submit">
                <FcSearch/>
                </Button>
            </Form>
        </Header>
    )
}