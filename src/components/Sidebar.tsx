import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Menu, MenuItem, Divider, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faBookOpen, faList, faArrowRightArrowLeft, faCreditCard, faChartLine,
  faBuildingColumns, faEnvelopeOpenText, faFileInvoiceDollar, faMoneyBillTransfer, faThumbTack,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChevronsUpDownIcon from './ChevronsUpDownIcon';
import mercuryLogo from '../assets/mercury_dark.png';

const sidebarItems = [
  { text: "Home", icon: faHome, path: "/" },
  { text: "Tasks", icon: faThumbTack, path: "/tasks" },
  { text: "Transactions", icon: faList, path: "/transactions" },
  { text: "Payments", icon: faArrowRightArrowLeft, path: "/payments" },
  { text: "Cards", icon: faCreditCard, path: "/cards" },
  { text: "Capital", icon: faChartLine, path: "/capital" },
  { text: "Accounts", icon: faBuildingColumns, path: "/accounts" },
  { text: "Bill Pay", icon: faEnvelopeOpenText, path: "/bill-pay" },
  { text: "Invoicing", icon: faFileInvoiceDollar, path: "/invoicing" },
  {
    text: "Reimbursements",
    icon: faMoneyBillTransfer,
    path: "/reimbursements",
  },
  { text: "Accounting", icon: faBookOpen, path: "/accounting" },
];

const settingsItems = [
  { text: "Settings", path: "/settings" },
  { text: "Documents & Data", path: "/documents" },
  { text: "Referrals", path: "/settings/referrals" },
];



const Sidebar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: {
          xs: 200,
          sm: 240,
        },
        flexShrink: 0,
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        height: "100vh",
        position: "fixed",
        left: 10,
        top: 0,
        paddingRight: "10px",
        overflowY: "auto",
      }}>
      <List sx={{ paddingX: "4px" }}>
        <ListItem disablePadding sx={{ my: "2px" }}>
          <Button
            onClick={handleClick}
            disableRipple
            sx={{
              width: "221px",
              height: "36px",
              justifyContent: "space-between",
              textTransform: "none",
              color: "black",
              borderRadius: "10px",
              padding: "4px 8px 4px 4px",
              "&.Mui-selected": {
                backgroundColor: "#F3F4F6",
              },
              "&:hover": {
                backgroundColor: "#F3F4F6",
              },
            }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={mercuryLogo}
                alt="Mercury Logo"
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  marginRight: "8px",
                }}
              />
              <Typography>Mercury Demo</Typography>
            </Box>
            <ChevronsUpDownIcon />
          </Button>
        </ListItem>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "221px",
              marginLeft: "4px",
              marginTop: "2px",
              borderRadius: "10px",
              boxShadow:
                "0px 5px 5px -3px rgba(0,0,0,0.1), 0px 4px 2px -1px rgba(0,0,0,0.14), 0px 4px 4px 0px rgba(0,0,0,0.12)",
            },
          }}>
          {settingsItems.map((item) => (
            <MenuItem
              key={item.text}
              component={Link}
              to={item.path}
              onClick={handleClose}
              sx={{
                height: "36px",
                fontSize: "13px",
                marginTop: "2px",
                borderRadius: "5px",
                marginX: "4px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}>
              {item.text}
            </MenuItem>
          ))}
          <Divider sx={{ my: "4px" }} />
          <MenuItem
            component={Link}
            to="/logout"
            onClick={handleClose}
            sx={{
              height: "36px",
              fontSize: "13px",
              borderRadius: "5px",
              marginX: "4px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}>
            Log out
          </MenuItem>
        </Menu>
        <Divider sx={{ mb: 3, mt: 2 }} />
        {sidebarItems.map((item, index) => (
          <React.Fragment key={item.text}>
            {index === 7 && (
              <Typography
                variant="overline"
                sx={{ paddingLeft: 2, paddingTop: 2, display: "block" }}>
                Workflows
              </Typography>
            )}
            <ListItem disablePadding sx={{ my: "2px" }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                disableRipple
                sx={{
                  borderRadius: "10px",
                  width: "192px",
                  height: "36px",
                  "&.Mui-selected": {
                    backgroundColor: "#F3F4F6",
                    "& .MuiListItemText-primary": {
                      fontWeight: "bold",
                      color: "black",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "#5264EA",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#F3F4F6",
                  },
                }}>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ fontSize: "13px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: "13px" }}
                />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
