interface Props {
  title: string;
}
function PageHeader({ title }: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <h2 className="text-base font-medium md:text-lg">{title}</h2>
        {/* <Breadcrumb /> */}
      </div>
    </div>
  );
}

export default PageHeader;
