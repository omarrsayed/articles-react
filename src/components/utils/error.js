import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function Error({ error }) {
  useEffect(() => {
    handleError(error);
  }, [error]);

  function handleError(error) {
    if (error != null) {
      toast.error(error);
    }
  }

  return null;
}

Error.propTypes = {
  error: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    error: state.error,
  };
}

export default connect(mapStateToProps, null)(Error);
