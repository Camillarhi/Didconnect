/**
 * A reuseable Table component
 * 
 * A sample data which can be passed as the props is seen below:
 * 
 *   const data = [
        { key: 1, id: 1, name: "John Doe", age: 30 },
        { key: 2, id: 2, name: "Jane Smith", age: 25 },
     ];

    const columns = [
         { column: "id", key: "id" },
         { column: "name", key: "name" },
         { column: "age", key: "age" },
    ];

 */

export type TableProps = {
  data: any[];
  columns: any[];
  onClick?: () => void;
};

export default function Table({ data, columns, onClick }: TableProps) {
  return (
    <div className=" w-[90vw] h-full max-w-[90vw] md:w-full md:max-w-full max-h-full overflow-auto">
      <table className=" w-full table-auto">
        <thead className="whitespace-nowrap sticky top-0 z-20 bg-[#191A2F] text-[#DBDCDE] font-medium uppercase">
          <tr>
            {columns.map(({ column, key }) => (
              <th key={key} className=" pt-6 pb-[1.3125rem] text-center ">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row?.key}
              className={" border h-[3.25rem] border-[#272849]"}
              onClick={onClick}
            >
              {columns.map(({ column, key }) => (
                <td
                  key={key}
                  className="font-normal px-6 py-[1.125rem] text-center"
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
