import { Link } from "react-router-dom";

interface ArrowLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ArrowLink = ({ to, children, className = "" }: ArrowLinkProps) => {
  return (
    <Link to={to} className={`flex items-center gap-1 group ${className}`}>
      <svg 
        width="21" 
        height="18" 
        viewBox="0 0 21 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path d="M18.3244 3.22742L14.9731 5.41113" stroke="currentColor"/>
        <path d="M13.2971 6.50293L9.94574 8.68665" stroke="currentColor"/>
        <g style={{ mixBlendMode: 'difference' }}>
          <path 
            d="M7.95586 9.29594L8.57495 10.246L2.40683 14.2652L1.78775 13.3151L7.95586 9.29594ZM7.77931 14.6961L6.79905 15.3348L2.59321 8.88014L3.57347 8.24141L7.77931 14.6961" 
            fill="white"
          />
        </g>
      </svg>
      <span className="text-white text-lg font-light uppercase tracking-tight leading-[110%] mix-blend-difference">
        {children}
      </span>
    </Link>
  );
};

export default ArrowLink;
