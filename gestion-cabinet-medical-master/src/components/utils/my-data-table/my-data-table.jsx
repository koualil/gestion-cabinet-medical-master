import React from "react";
import DataTable from "react-data-table-component";

function MyDataTable({ ...props }) {
   const customStyles = {
      header: {
         style: {},
      },
      headRow: {
         style: {
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            borderTopColor: "#eee",
         },
      },
      headCells: {
         style: {
            "&:not(:last-of-type)": {
               borderRightStyle: "solid",
               borderRightWidth: "1px",
               borderRightColor: "#d3d3d3",
            },
            backgroundColor: "#eef",
         },
      },
      head: {
         style: {
            height: "40px",
            display: "flex",
            alignItems: "center",
         },
      },
      cells: {
         style: {
            "&:not(:last-of-type)": {
               borderRightStyle: "solid",
               borderRightWidth: "1px",
               borderRightColor: "#d3d3d3",
            },
            backgroundColor: "white",
         },
      },
   };
   return (
      <div className="shadow-sm">
         <DataTable customStyles={customStyles} {...props} />
      </div>
   );
}

export default MyDataTable;
