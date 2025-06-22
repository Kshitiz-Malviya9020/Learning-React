function Time() {
  return<>
  <h3 className="lead">The current Date is: {new Date().toLocaleDateString("en-IN")}</h3>
  <h3 className="lead">The current time in Bharat is: {new Date().toLocaleTimeString("en-IN")}</h3>
  </>
}
export default Time
