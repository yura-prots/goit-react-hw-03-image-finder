import { MoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <MoreBtn type="button" onClick={onClick}>
      Load More
    </MoreBtn>
  );
};

export default Button;
