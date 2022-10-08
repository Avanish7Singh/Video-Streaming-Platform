import React from 'react';
import { categories } from "../Utilities/constants";
import { Stack } from '@mui/material';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack direction="row" sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" }, flexDirection: { sx: "row", md: "column" }
        }}>
            {
                categories.map((category) => (
                    <button
                        onClick={() => setSelectedCategory(category.name)}
                        style={{ background: category.name === selectedCategory && "#FC1503", color: "white" }}
                        className='category-btn'
                    >
                        <span
                            style={{ marginRight: "15px", color: category.name === selectedCategory ? "white" : "red" }}
                        >{category.icon}</span>
                        <span
                            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
                        >{category.name}</span>
                    </button>


                ))
            }
        </Stack>
    )
}

export default Sidebar