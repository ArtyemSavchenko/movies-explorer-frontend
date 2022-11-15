import './LikeBtn.css';

const LikeBtn = ({ extraClass = '', children, isLiked, ...restProps }) => {
  return (
    <button
      className={`like-btn ${extraClass}${isLiked ? 'like-btn_is-liked' : ''}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default LikeBtn;
