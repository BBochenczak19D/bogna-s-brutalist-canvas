import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

const PageBreadcrumb = ({ items, light = false }: PageBreadcrumbProps) => {
  return (
    <div className="flex items-center gap-3 text-sm uppercase py-[24px] pb-0 mb-16">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-3">
            {index > 0 && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <path
                  d="M6 12L10 8L6 4"
                  stroke={light ? "rgba(255,255,255,0.3)" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {isLast ? (
              <span className={`underline underline-offset-4 ${light ? "text-white/80" : "text-foreground"}`}>
                {item.label}
              </span>
            ) : item.path ? (
              <Link
                to={item.path}
                className={`transition-colors ${light ? "text-white/30 hover:text-white/50" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white/30" : "text-muted-foreground"}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default PageBreadcrumb;
