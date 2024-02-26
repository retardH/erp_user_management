import Breadcrumb from './breadcrumb';

interface Props {
  title: string;
}
function PageHeader({ title }: Props) {
  return (
    <div>
      <h2 className="mb-1 text-lg font-medium">{title}</h2>
      <Breadcrumb />
    </div>
  );
}

export default PageHeader;
