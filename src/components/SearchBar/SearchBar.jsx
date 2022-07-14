import React from "react";
import { TextField } from "@mui/material";
import SearchBarCss from "./SearchBar.module.css";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className={SearchBarCss.navbar}>
            <div className={SearchBarCss.navbar_left}>
            < MenuIcon  className={SearchBarCss.menuIcon} fontSize="medium"/>
            <img src="../Images/youtubeIcon.png" alt="youtube icon" className={SearchBarCss.ytIcon} />
            </div>
          <div className={SearchBarCss.SearchBarContainer}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                className={SearchBarCss.textField}
                fullwidth="true"
                label="Search..."
                onChange={this.handleChange}
              />
              <MicIcon className={SearchBarCss.searchIcon} />
            </form>
          </div>
         <div className={SearchBarCss.navbar_right}>
         < VideoCallIcon />
         < NotificationsNoneOutlinedIcon />
         <span className={SearchBarCss.navbar_right_A}> A </span>
         </div>
             
        </div>
      </>
    );
  }
}

export default SearchBar;
