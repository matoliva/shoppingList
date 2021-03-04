import PropTypes from 'prop-types';
import Item  from './Item';

const ListItems = ({ listItems = [], onSelectQuantity }) => {
    return (
        <div>
            {listItems.map((item) =>
                <Item
                    key={item.id}
                    id={item.id}
                    onSelectQuantity={onSelectQuantity}
                    name={item.itemName}
                    quantity={item.quantity}
                    isSelected={item.isSelected}
                />
            )}
        </div>
    )
}

ListItems.propTypes = {
    listItems: PropTypes.array
};

export default ListItems;