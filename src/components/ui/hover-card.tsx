interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}
function HoverCard({ icon, children }: Props) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center">
      <div className="rounded-md bg-base-200/60 p-3 text-base-600">{icon}</div>
      <div className="pointer-events-none absolute bottom-auto left-auto right-0 top-full z-50 flex min-w-[120px] translate-y-8 transform flex-col items-center rounded-md bg-white p-2 opacity-0 shadow-md duration-200 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

export default HoverCard;
