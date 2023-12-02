import React from "react";
import Table, { TableProps } from "./table";
import Pagination from "../pagination/pagination";

export default function TableGroup({ data, columns, onClick }: TableProps) {
  return (
    <>
      <Table data={data} columns={columns} />
      <Pagination />
    </>
  );
}
