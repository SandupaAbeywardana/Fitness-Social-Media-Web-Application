import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

import { useNavigate } from "react-router";

const UserDropdown = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);

    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleProfileClick = () => {
    // console.log('profile clicked')
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        src={user.userImage}
        alt="UserImage"
        onClick={handleClick}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          cursor: "pointer",
          userDrag: "none",
          WebkitUserDrag: "none",
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
        }}
        onDragStart={(e) => e.preventDefault()}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-icon",
        }}
        sx={{
          mt: 3,
          "& .MuiMenu-paper": {
            minWidth: 200,
            p: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            my: 1,
            mx: 2,
          }}
        >
          <Avatar
            src={user.userImage}
            alt="UserImage"
            width={45}
            height={45}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              userDrag: "none",
              WebkitUserDrag: "none",
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          />
          <Box sx={{ mx: 2, my: 1 }}>
            <Typography variant="body1">{user.userName}</Typography>
          </Box>
        </Box>
        <Divider sx={{ mx: 2, my: 1 }} />
        <MenuItem onClick={handleProfileClick}>
          <Icon icon="gg:profile" className="appbar-icon" fontSize={22} />
          &ensp;Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Icon
            icon="ic:baseline-logout"
            className="appbar-icon"
            fontSize={22}
          />
          &ensp;Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserDropdown;
