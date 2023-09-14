import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className=" w-1/3  ml-6">
            <h2 className=' text-2xl font-semibold text-[#6047EC] bg-gray-200 px-10 py-5 rounded-lg'>Spent time on read : 177 min</h2>
            <div className='bg-gray-200 mt-5 rounded-lg px-5 pb-5'>
                <h2 className=' text-2xl font-semibold pt-5 pl-2 '>Bookmarked Blogs:{bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};
export default Bookmarks;