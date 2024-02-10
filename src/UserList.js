import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import './UserList.css';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { NameFilter, CnicFilter } from 'ag-grid-react';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const columnDefs = [
    { headerName: 'Id', field: 'id', width: 80 },
    { headerName: 'Name', field: 'name', width: 200, filter: 'NameFilter' },
    { headerName: 'Customer CNIC', field: 'cnic', width: 150, filter: 'CnicFilter' },
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
      <h1 className='h1-question-list'>Users List</h1>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={users}
        pagination={true}
        paginationPageSize={20}
        frameworkComponents={{
          NameFilter: NameFilter,
          CnicFilter: CnicFilter,
        }}
      />
    </div>
  );
};

export default UserList;
