export const TableSkeleton = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="h-[37px] w-[300px] rounded-md bg-base-700/10"></div>
        <div className="h-[37px] w-[100px] rounded-md bg-base-700/10"></div>
      </div>
      <div className="h-[400px] w-full rounded-md bg-base-700/10"></div>
      <div className="mt-4 flex items-center justify-end">
        <div className="h-[38px] w-[140px] rounded-md bg-base-700/10"></div>
      </div>
    </div>
  );
};

export const UserFormSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="h-[280px] w-full animate-pulse rounded-md bg-base-700/10"></div>
      <div className="h-[280px] w-full animate-pulse rounded-md bg-base-700/10"></div>
    </div>
  );
};

export const RoleFormSkeleton = () => {
  return (
    <div className="h-[396px] w-full animate-pulse rounded-md bg-base-700/10"></div>
  );
};
