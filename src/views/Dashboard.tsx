import React from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";

export function Dashboard() {
	return (
    <Box sx={{ padding: "20px" }}>
      <Typography fontSize={20}>Welcome, Jane</Typography>
      <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
        <Button
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faPaperPlane}/>}
          sx={{
            backgroundColor: "#5264EA",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            color: "white",
            paddingY: "4px",
            paddingX: "16px",
          }}>
          Send
        </Button>
        <Button
          variant="contained"
          startIcon={<KeyboardReturnRoundedIcon />}
          sx={{
            backgroundColor: "rgba(112,115,147,.058823529411764705)",
            color: "black",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            boxShadow: "none",
          }}>
          Request
        </Button>
        <Button
          variant="contained"
          startIcon={<SyncAltRoundedIcon />}
          sx={{
            backgroundColor: "rgba(112,115,147,.058823529411764705)",
            color: "black",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            boxShadow: "none",
          }}>
          Transfer
        </Button>
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          sx={{
            backgroundColor: "rgba(112,115,147,.058823529411764705)",
            color: "black",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            boxShadow: "none",
          }}>
          Deposit
        </Button>
        <Button
          variant="contained"
          startIcon={<ReceiptLongRoundedIcon />}
          sx={{
            backgroundColor: "rgba(112,115,147,.058823529411764705)",
            color: "black",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            boxShadow: "none",
          }}>
          Pay Bill
        </Button>
        <Button
          variant="contained"
          startIcon={<RequestQuoteOutlinedIcon />}
          sx={{
            backgroundColor: "rgba(112,115,147,.058823529411764705)",
            color: "black",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            boxShadow: "none",
          }}>
          Create Inovice
        </Button>
      </Stack>
    </Box>
  );
}
