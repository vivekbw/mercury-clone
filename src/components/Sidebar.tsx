import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faBookOpen, faList, faArrowRightArrowLeft, faCreditCard, faChartLine,
  faBuildingColumns, faEnvelopeOpenText, faFileInvoiceDollar, faMoneyBillTransfer, faThumbTack
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        height: '100vh',
        position: 'fixed',
        left: 10,
        top: 0,
		paddingRight: "10px",
        overflowY: 'auto',
      }}
    >
      <List sx={{ padding: '4px' }}>
        {sidebarItems.map((item, index) => (
          <React.Fragment key={item.text}>
            {index === 7 && (
              <Typography
                variant="overline"
                sx={{ paddingLeft: 2, paddingTop: 2, display: 'block' }}
              >
                Workflows
              </Typography>
            )}
            <ListItem disablePadding sx={{ my: '2px' }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                disableRipple
                sx={{
                  borderRadius: '10px',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: '36px' }}>
                  <FontAwesomeIcon icon={item.icon} style={{ fontSize: '13px' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ fontSize: '13px' }} 
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
