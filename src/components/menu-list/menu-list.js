import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCart } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;

        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError());
    }

    render() {
        const { menuItems, loading, error, addedToCart } = this.props;

        if (error) {
            return <Error />;
        }

        if (loading) {
            return <Spinner />;
        }

        const items = menuItems.map(menuItem => (
            <MenuListItem
                key={menuItem.id}
                menuItem={menuItem}
                onAddToCart={() => addedToCart(menuItem.id)}
            />
        ));

        return <View items={items} />;
    }
}

const mapStateToProps = state => ({ menuItems: state.menu, loading: state.loading });

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addedToCart,
    menuError,
};

const View = ({ items }) => {
    return <ul className="menu__list">{items}</ul>;
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
