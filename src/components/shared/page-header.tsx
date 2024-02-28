import Breadcrumb from './breadcrumb';

interface Props {
  title: string;
}
function PageHeader({ title }: Props) {
  return (
    <div>
      <h2 className="text-base font-medium md:text-lg">{title}</h2>
      <Breadcrumb />
    </div>
  );
}

export default PageHeader;
