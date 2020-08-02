import React from 'react';

const SideBar = ({ items, seletedItems, onChangeItem, propertyKey, displayProperty }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    className={item[propertyKey] === seletedItems[propertyKey] ? "list-group-item active" : "list-group-item"}
                    key={item[propertyKey]}
                    style={{ cursor: 'pointer' }}
                    onClick={() => onChangeItem(item)}
                >
                    {item[displayProperty]}
                </li>
            ))}
        </ul>
    );
}

SideBar.defaultProps = {
    propertyKey: '_id',
    displayProperty: 'name'
}

export default SideBar;