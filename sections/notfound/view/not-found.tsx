import Button from '@/components/button/button';
import Typography from '@/components/typography';

const NotFoundComponent: React.FC = () => {
  return (
    <div className=" flex flex-col w-full justify-center text-center  h-full align-middle">
      <div className="mb-4 ">
        <Typography variant="h1">Opps!</Typography>
      </div>
      <div className="">
        <Typography variant="h2">
          Sorry, the page or book you're looking for doesn't exist.
        </Typography>
        <Typography variant="h4">
          Go back to the home page to find what you're looking for or change the
          search criteria.
        </Typography>
        <div className="mt-4">
          <Button text="Go home" onClick={() => window.location.replace('/')} />
        </div>
      </div>
    </div>
  );
};
export default NotFoundComponent;
