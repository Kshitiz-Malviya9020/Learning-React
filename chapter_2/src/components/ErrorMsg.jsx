const ErrorMsg = ({items}) => {
  return <>
    {items.length === 0 ? <h3 className="text-center">There no Food Items to display</h3> : null
    }
  </>;
};
export default ErrorMsg;
