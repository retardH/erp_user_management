import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from '@tanstack/react-table';
import { useState } from 'react';
import TableFilter from '@/components/shared/table-filter';
import Table from '@/components/ui/table';
import TablePagination from '@/components/shared/table-pagination';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
}

function UsersDataTable<TData, TValue>({
  columns,
  data,
  isLoading,
}: Props<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });
  return (
    <div>
      {!isLoading ? (
        <>
          {/* Table Data Filtering */}
          <div className="mb-4">
            <TableFilter table={table} filterKey="username" name="User" />
          </div>
          {/* Core Table Data Rows */}
          <Table table={table} />
          {/* Table Data Pagination */}
          <TablePagination table={table} />
        </>
      ) : (
        <h4>Data Loading...</h4>
      )}
    </div>
  );
}

export default UsersDataTable;
