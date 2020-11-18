import React from 'react'
import "../style/Filter.css"


export default function Filter({ onSearchChange }) {
    return (
        <div className="filter">
            <input type="text" placeholder="&#xf002;  Filter" onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    )
}
