import Button from '../button/button';
import Typography from '../typography';

interface PaginationProps {
  handleNext: Function;
  handlePrev: Function;
  limit?: number;
  count?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handleNext,
  handlePrev,
  limit,
  count,
}) => {
  //function to calculate the number of pages if each page is 8
  const totalPages = Math.ceil(count / 8);

  return (
    <div className="flex justify-center mt-4 mb-2">
      <div className="mx-2">
        <Button
          onClick={() => handlePrev()}
          text={'Prev'}
          disabled={limit < 2}
        />
      </div>
      <div className="mx-2 flex align-middle pt-2">
        <Typography variant="p">
          {limit} / {totalPages}
        </Typography>
      </div>
      <div className="mx-2">
        <Button
          onClick={() => handleNext()}
          text={'Next'}
          disabled={limit >= totalPages}
        />
      </div>
    </div>
  );
};
export default Pagination;
