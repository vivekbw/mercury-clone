import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { Dashboard } from './views/Dashboard';
import { Tasks } from './views/Tasks';
import { Transactions } from './views/Transactions';
import { Payments } from './views/Payments';
import { Cards } from './views/Cards';
import { Capital } from './views/Capital';
import { Accounts } from './views/Accounts';
import { BillPay } from './views/BillPay';
import { Invoicing } from './views/Invoicing';
import { Reimbursements } from './views/Reimbursements';
import { Accounting } from './views/Accounting';
import Sidebar from './components/Sidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);

const theme = createTheme({
  typography: {
    fontFamily: [
      'ArcadiaText-Variable',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1, marginLeft: '240px', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/capital" element={<Capital />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/bill-pay" element={<BillPay />} />
              <Route path="/invoicing" element={<Invoicing />} />
              <Route path="/reimbursements" element={<Reimbursements />} />
              <Route path="/accounting" element={<Accounting />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
