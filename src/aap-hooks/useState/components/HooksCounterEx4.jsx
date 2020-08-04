import React from 'react';
import { useState } from 'react';

const HooksCounterEx4 = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        setItems([...items, { id: items.length + 1, value: 'anoop' }])
    }

    return (
        <>
            <button className="btn btn-sm btn-primary" onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    );
}

export default HooksCounterEx4;