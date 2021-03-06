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
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            textOverflow: "clip",
            whiteSpace: "break-spaces",
            lineHeight: 1.5,
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};

export default DataTable;

const columns = [
  {
    field: "id",
    headerName: "",
    width: 1,
    editable: false,
    sortable: false,
  },
  {
    field: "month",
    headerName: "Aylar",
    width: 90,
    editable: false,
    sortable: false,
    headerAlign: "left",
  },
  {
    field: "wage",
    headerName: "Brüt Ücret",
    type: "number",
    width: 130,
    editable: true,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "sgk",
    headerName: "SSK Primi",
    type: "number",
    width: 100,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "unemployment",
    headerName: "İşsizlik Sigortası",
    type: "number",
    width: 140,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "revenue_tax",
    headerName: "Damga Vergisi",
    type: "number",
    width: 120,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "income_segment",
    headerName: "Gelir Dilimi",
    type: "number",
    width: 100,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "income_tax",
    headerName: "Gelir Vergisi",
    type: "number",
    width: 100,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "net_income",
    headerName: "Net Ücret",
    type: "number",
    width: 100,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "allowance",
    headerName: "Asgari Geçim İndirimi",
    type: "number",
    width: 120,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
  {
    field: "salary",
    headerName: "Maaş",
    type: "number",
    width: 100,
    editable: false,
    sortable: false,
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 1,
    month: "Ocak",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 2,
    month: "Şubat",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 3,
    month: "Mart",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 4,
    month: "Nisan",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 5,
    month: "Mayıs",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 6,
    month: "Haziran",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 7,
    month: "Temmuz",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 8,
    month: "Ağustos",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 9,
    month: "Eylül",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 10,
    month: "Ekim",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 11,
    month: "Kasım",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
  {
    id: 12,
    month: "Aralık",
    wage: "25",
    sgk: "5",
    unemployment: "5",
    revenue_tax: "5",
    income_segment: "5",
    income_tax: "5",
    net_income: "5",
    allowance: "5",
    salary: "5",
  },
];
