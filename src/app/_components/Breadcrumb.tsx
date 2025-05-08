export type Breadcrumb = {
  title: string;
  url: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumb = ({ breadcrumbs }: Props) => (
  <nav id="breadcrumb" className="cmp-breadcrumb">
    <div className="cmp-breadcrumb__container">
      <ol className="cmp-breadcrumb__list flex gap-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="cmp-breadcrumb__list-item">
            <a href={breadcrumb.url} className="cmp-breadcrumb__list-item-link hover:underline font-bold text-pink-600">
              <span>{breadcrumb.title}</span>
            </a>
            {index < breadcrumbs.length - 1 && (
              <span className="cmp-breadcrumb__separator pl-2 font-bold text-pink-600">&gt;</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);
