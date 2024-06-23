import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

/* old way ...
import { connect } from "react-redux";

function formatCurrency(value) {
  console.log("formatCurrency balance", value);
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  console.log("BalanceDisplay balance", balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  console.log("mapStateToProps balance", state.account.balance);
  return {
    balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
*/
