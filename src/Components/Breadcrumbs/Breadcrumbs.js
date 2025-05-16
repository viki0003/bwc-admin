import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";
import ChevronRight from "../../Assets/Icons/ChevronRight";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      {location.pathname === "/" ? (
        <span className="breadcrumb-current">Dashboard</span>
      ) : (
        <>
          {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;
            return (
              <span key={routeTo}>
                {index !== 0 && (
                  <span className="breadcrumb-separator">
                    <ChevronRight />
                  </span>
                )}
                {isLast ? (
                  <span className="breadcrumb-current">
                    {decodeURIComponent(name)}
                  </span>
                ) : (
                  <Link to={routeTo}>{decodeURIComponent(name)}</Link>
                )}
              </span>
            );
          })}
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
