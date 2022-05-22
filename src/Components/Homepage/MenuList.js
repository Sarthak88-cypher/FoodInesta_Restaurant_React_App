import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ menuItems }) => {
    return (
        <div>
            { menuItems.map(item => <MenuItem itemInfo={item} key={item.itemName} /> ) }
        </div>
    )
}

export default MenuList;