import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Error!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default ErrorPage;
