import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";

import Header from "../../../../CommonComponents/Header";
import * as UserAction from "../../../../Actions/User";
import "./User.scss";
import { INPROGRESS, COMPLETE } from "../../../../Constants";
import FooterMenu from "../../../../CommonComponents/FooterMenu";
import { InputAdornment, MenuItem, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";

const User = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const [users, setUsers] = useState([]);
  const [timeOut, setTimeOut] = useState(null);
  const [search, setSearch] = useState({
    search: "",
  });

  const gameReducer = useSelector((state) => ({
    userDetail: state.gameReducer.userDetail,
    users: state.gameReducer.users,
  }));

  useEffect(() => {
    props.actions.userAction.getUsers();
  }, []);

  useEffect(() => {
    if (gameReducer.userDetail) {
      setName(gameReducer.userDetail.name);
    }
  }, [gameReducer.userDetail]);

  useEffect(() => {
    if (gameReducer.users.length > 0) {
      setUsers([...gameReducer.users]);
    }
  }, [gameReducer.users]);

  const handleChange = (event) => {
    clearTimeout(timeOut);
    const field = event.target.name;
    const commonData = { ...search };
    commonData[field] = event.target.value;
    setTimeOut(
      setTimeout(() => {
        dispatch({ type: INPROGRESS });
        if (commonData.search !== "") {
          const filterUsers = gameReducer.users.filter((data) =>
            data.user.name
              .toLowerCase()
              .includes(commonData.search.toLowerCase())
          );
          setUsers([...filterUsers]);
        } else {
          setUsers([...gameReducer.users]);
        }
        dispatch({ type: COMPLETE });
      }, 1000)
    );
    return setSearch(commonData);
  };

  const redirect = (url) => {
    navigate(url);
  };

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="agent_layout">
      <Header name={"Player"} />
      <div className="agent_body">
        <div className="sub_header">
          <span className="sub_header_text">Agent</span>
          <span className="sub_header_text">{name}</span>
        </div>

        <div className="search_box">
          <TextField
            variant="outlined"
            size="small"
            type="text"
            name="search"
            className="search_box_inner"
            placeholder="Search"
            value={search.search}
            onChange={handleChange1}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="filter_box">
          <div>
            <FilterListIcon />
            <span className="filter_text">Sort By</span>
          </div>

          <TextField
            id="outlined-select-currency-native"
            select
            style={{ width: "50%" }}
            size="small"
            // value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            <option>Balance</option>
            <option>Balance</option>
            <option>Balance</option>
          </TextField>
        </div>
        <div className="table_div">
          <div className="table_header">
            <span className="table_header_text">User Name</span>
            <span className="table_header_text">Label</span>
            <span className="table_header_text">Balance</span>
          </div>
          <div className="table_body">
            {users.map((singleUser, index) => (
              <div
                className="table_body_list"
                key={index}
                onClick={() => redirect(`UserDetail/${singleUser.user.name}`)}
              >
                <span className="body_list">{singleUser.user.name}</span>
                <span className="body_list">
                  {singleUser.user.labels.length > 0
                    ? singleUser.user.labels[0]
                    : ""}
                </span>
                <span className="body_list">{singleUser.balance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterMenu />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    userAction: bindActionCreators(UserAction, dispatch),
  },
});

export default connect(null, mapDispatchToProps)(User);
