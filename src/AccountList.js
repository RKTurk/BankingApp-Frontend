import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import './UserList.css';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { UserIdFilter, BalanceFilter, AccountIdFilter } from 'ag-grid-react';


const UserList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  const columnDefs = [
    { headerName: 'Id', field: 'id', width: 80 },
    { headerName: 'User Id', field: 'userId', width: 100, filter: 'UserIdFilter' },
    { headerName: 'Account Id', field: 'accountId', width: 150, filter: 'AccountIdFilter' },
    { headerName: 'Balance', field: 'balance', width: 150, filter: 'BalanceFilter' },
    {
      headerName: 'Actions',
      width: 120,
      cellRenderer: (params) => (
        <button className='button-question-list'>Delete</button>
      ),
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '600px', margin: '0 auto' }}>
      <h1 className='h1-question-list'>Accounts List</h1>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={accounts}
        pagination={true}
        paginationPageSize={20}
        frameworkComponents={{
          UserIdFilter: UserIdFilter,
          AccountIdFilter:AccountIdFilter,
          BalanceFilter: BalanceFilter,
        }}
      />
    </div>
  );
};

export default UserList;
