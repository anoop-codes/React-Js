import React from 'react';

const SideBar = ({ genres, selectedGenre, selectGenre }) => {
    return (
        <ul className="list-group">
            {genres.map(genre => (
                <li
                    className={genre._id === selectedGenre._id ? "list-group-item active" : "list-group-item"}
                    key={genre._id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => selectGenre(genre)}
                >
                    {genre.name}
                </li>
            ))}
        </ul>
    );
}

export default SideBar;