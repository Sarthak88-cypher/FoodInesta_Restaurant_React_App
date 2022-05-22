import React from 'react';
import { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        const { itemInfo } = this.props;
        this.state = {
            isFavorite: itemInfo.isFavorite
        }
    }

    handleClickFavorite = () => {
        const { isFavorite } = this.state;
        this.setState({
            isFavorite: !isFavorite
        })
    }

    render() {
        const { itemInfo } = this.props;
        const { isFavorite } = this.state;
        return (
            <div className="itemContainer">
                <div className="leftContainer">
                    <div className="imgContainer">
                        <img src={itemInfo.foodImage} alt="" />
                    </div>
                    <div className="itemDescription">
                        <h3>
                            {itemInfo.itemName}
                        </h3>
                        <p>
                            {itemInfo.description}
                        </p>
                    </div>
                </div>
                <div className="rightContainer">
                    <div>
                        {itemInfo.price} EUR
                </div>
                    <div onClick={this.handleClickFavorite} className={isFavorite ? "isFavorite" : "notFavorite"}></div>
                </div>
            </div>
        )
    }
}

export default MenuItem;