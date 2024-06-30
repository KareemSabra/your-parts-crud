import React, { useEffect } from 'react';
import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { Book } from '@/interfaces';
import { Form, FormikErrors, FormikProps, withFormik } from 'formik';
import Typography from '@/components/typography/typography';

interface OtherProps {
  message: string;
  error?: string;
  success?: string;
  setBookState: Function;
}

const InnerForm: React.FC<OtherProps & FormikProps<Book>> = (props) => {
  const {
    touched,
    errors,
    isSubmitting,
    message,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
  } = props;

  useEffect(() => {
    props.setBookState(values);
  }, [values]);

  return (
    <Form onSubmit={handleSubmit}>
      {/* <h1>{message}</h1> */}
      <div className="p-4 rounded-lg border-2 border-blue-900 md:min-w-[450px] dark:bg-slate-950 bg-gray-200">
        <Input
          type="text"
          name="title"
          label="Title *"
          testID="title-input"
          onChange={handleChange}
          value={values.title}
          error={touched.title && errors.title ? errors.title : ''}
          onBlur={handleBlur}
        />

        <Input
          type="text"
          name="author"
          label="Author *"
          testID="author-input"
          onChange={handleChange}
          value={values.author}
          error={touched.author && errors.author ? errors.author : ''}
          onBlur={handleBlur}
        />

        <Input
          type="text"
          name="imgURL"
          label="Image URL"
          testID="imgURL-input"
          onChange={handleChange}
          value={values.imgURL}
          error={touched.imgURL && errors.imgURL ? errors.imgURL : ''}
          onBlur={handleBlur}
        />
        <div className="flex flex-row justify-center w-full mt-2">
          <Button
            type="submit"
            disabled={
              isSubmitting ||
              !!errors.author ||
              !!errors.title ||
              !!errors.imgURL ||
              props?.success
            }
            testid="submit-button"
            text={values.ISBN ? 'Edit Book' : 'Add Book'}
            isSubmitting={isSubmitting}
          />
        </div>
        <div className="flex flex-row justify-center w-full mt-1">
          {props.error && (
            <Typography variant="error">{props.error}</Typography>
          )}
        </div>
        <div className="flex flex-row justify-center w-full mt-1">
          {props.success && (
            <Typography variant="success">{props.success}</Typography>
          )}
        </div>
      </div>
    </Form>
  );
};

interface MyFormProps {
  book: Book;
  message: string;
  error?: string;
  success?: string;
  setBookState: Function;
  submitBook: Function;
}

const MyForm = withFormik<MyFormProps, Book>({
  mapPropsToValues: (props) => ({
    author: props.book?.author || '',
    title: props.book?.title || '',
    imgURL: props.book?.imgURL || '',
    ISBN: props.book?.ISBN || 0,
  }),

  validate: (values) => {
    const errors: FormikErrors<Book> = {};
    if (!values.author) {
      errors.author = 'Book author is required.';
    }
    if (!values.title) {
      errors.title = 'Book title is required.';
    }

    return errors;
  },

  handleSubmit: async (values, { props, setSubmitting }) => {
    // Perform the submit action
    // await new Promise((r) => setTimeout(r, 2000));
    await props?.submitBook(values);
    setSubmitting(false);
  },
})(InnerForm);

interface AddEditBookProps {
  book?: Book;
  error?: string;
  success?: string;
  setBookState: Function;
  submitBook?: Function;
}

const AddEditBookForm: React.FC<AddEditBookProps> = ({
  book,
  setBookState,
  submitBook,
  error,
  success,
}) => (
  <div>
    <MyForm
      book={book}
      error={error}
      success={success}
      message="Add or Edit Book"
      setBookState={setBookState}
      submitBook={submitBook}
    />
  </div>
);

export default AddEditBookForm;
