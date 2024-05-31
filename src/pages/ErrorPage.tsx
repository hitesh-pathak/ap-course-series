import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const errorMessage =
    (error as { statusText: string })?.statusText ||
    (error as Error).message ||
    'Unknown error';

  return (
    <div id="error-page">
      <h1>Error !</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
