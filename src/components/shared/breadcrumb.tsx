import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import { cn } from '@/utils/helpers';

function Breadcrumb() {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter((c) => c !== '');
  return (
    <div className="flex items-center gap-2">
      {crumbs.map((c, index) => {
        const href = crumbs.slice(0, index + 1).join('/');
        return (
          <Fragment key={c}>
            <NavLink
              replace
              to={`/${href}`}
              className={cn(
                'text-sm capitalize text-base-500 hover:text-base-600',
                `/${href}` === pathname && 'font-medium text-base-700',
              )}
            >
              {c}
            </NavLink>
            {index !== crumbs.length - 1 && (
              <span className="text-sm text-base-500">/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
