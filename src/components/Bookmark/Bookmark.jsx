
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-white m-2 rounded-lg'>
            <h3 className='p-5 text-lg font-semibold'>{bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
};

export default Bookmark;