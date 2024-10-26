import React from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical, faArrowLeftLong, faLeftRight, faPlus, faEnvelopeOpenText, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

const iconStyle = { fontSize: 11 };

const grayButtonStyle = {
  backgroundColor: "rgba(112,115,147,.058823529411764705)",
  color: "black",
  borderRadius: "20px",
  textTransform: "none",
  fontSize: 11,
  boxShadow: "none",
  paddingY: "4px",
  paddingX: "16px",
  "&:hover": {
    backgroundColor: "rgba(112,115,147,.1)",
    boxShadow: "none",
    "& .MuiSvgIcon-root, & .svg-inline--fa": {
      color: "#5264EA",
    },
  },
};

export function Dashboard() {
	return (
    <Box sx={{ padding: "15px" }}>
      <Typography fontSize={20}>Welcome, Jane</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 1,
        }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            startIcon={
              <FontAwesomeIcon icon={faPaperPlane} style={iconStyle} />
            }
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
            startIcon={
              <FontAwesomeIcon icon={faArrowLeftLong} style={iconStyle} />
            }
            sx={grayButtonStyle}>
            Request
          </Button>
          <Button
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faLeftRight} style={iconStyle} />}
            sx={grayButtonStyle}>
            Transfer
          </Button>
          <Button
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faPlus} style={iconStyle} />}
            sx={grayButtonStyle}>
            Deposit
          </Button>
          <Button
            variant="contained"
            startIcon={
              <FontAwesomeIcon icon={faEnvelopeOpenText} style={iconStyle} />
            }
            sx={grayButtonStyle}>
            Pay Bill
          </Button>
          <Button
            variant="contained"
            startIcon={
              <FontAwesomeIcon icon={faFileInvoice} style={iconStyle} />
            }
            sx={grayButtonStyle}>
            Create Inovice
          </Button>
        </Stack>
        <Button
          variant="text"
          startIcon={
            <FontAwesomeIcon icon={faEllipsisVertical} style={iconStyle} />
          }
          sx={{
            backgroundColor: "transparent",
            color: "black",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: 11,
            boxShadow: "none",
            paddingY: "4px",
            paddingX: "16px",
            "&:hover": {
              ...grayButtonStyle["&:hover"],
            },
          }}>
          Customize
        </Button>
      </Box>
    </Box>
  );
}
