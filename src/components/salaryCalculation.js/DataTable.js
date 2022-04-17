import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const DataTable = ({ prevStep }) => {
  return (
    <div style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}>
      <DataGrid
        hideFooter={true}
        showCellRightBorder
        showColumnRightBorder
        autoHeight
        disableColumnMenu={true}
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default DataTable;

const columns = [
  {
    field: "name",
    headerName: "Aylar",
    width: 90,
    editable: false,
    sortable: false,
  },
  { field: "age", headerName: "Brüt Ücret", editable: true },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    editable: true,
  },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "dateTime",
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Ocak",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 2,
    name: "Şubat",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 3,
    name: "Mart",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 4,
    name: "Nisan",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 5,
    name: "Mayıs",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 6,
    name: "Haziran",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 7,
    name: "Temmuz",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 8,
    name: "Ağustos",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 9,
    name: "Eylül",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 10,
    name: "Ekim",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 11,
    name: "Kasım",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
  {
    id: 12,
    name: "Aralık",
    age: "25",
    dateCreated: "11/01/2019",
    lastLogin: "25/01/2019",
  },
];
