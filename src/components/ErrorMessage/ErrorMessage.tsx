interface ErrorProps {
  error: string;
}
const ErrorMessage: React.FC<ErrorProps> = ({ error }) => {
  return <p>Something went wrong {error}</p>;
};

export default ErrorMessage;
