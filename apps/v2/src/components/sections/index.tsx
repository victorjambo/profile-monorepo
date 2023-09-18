interface IProps {
  idx: string;
  title: string;
}

export function SectionHeader({ idx, title }: IProps): JSX.Element {
  return (
    <div className="section-header-size flex items-end mt-[10px] mb-10 font-semibold leading-[1.1] section-header">
      <span className="section-header-size-2 mr-[10px] font-normal relative bottom-1 text-sky-500 dark:text-green">
        {idx}
      </span>
      <span className="font-sans">{title}</span>
    </div>
  );
}
