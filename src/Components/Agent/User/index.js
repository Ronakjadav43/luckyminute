import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as UserAction from "../../../Actions/User";

const HomeUser = (props) => {
  const { userName } = useParams();

  useEffect(() => {
    if (userName) {
      props.actions.userAction.getUsers(userName);
    }
  }, []);

  return <Outlet />;
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(HomeUser);
