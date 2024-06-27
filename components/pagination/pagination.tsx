import Button from '../button/button';

interface PaginationProps {
  handleNext: Function;
  handlePrev: Function;
  limit?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handleNext,
  handlePrev,
  limit,
}) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="mx-2">
        <Button
          onClick={() => handlePrev()}
          text={'Prev'}
          disabled={limit < 2}
        />
      </div>
      <div className="mx-2">
        <Button onClick={() => handleNext()} text={'Next'} />
      </div>
    </div>
  );
};
export default Pagination;
