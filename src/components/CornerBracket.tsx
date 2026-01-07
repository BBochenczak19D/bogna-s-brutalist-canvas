interface CornerBracketProps {
  className?: string;
}

const CornerBracket = ({ className = "" }: CornerBracketProps) => {
  return (
    <svg 
      width="22" 
      height="23" 
      viewBox="0 0 22 23" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[21.6px] h-[22.12px] flex-shrink-0 ${className}`}
    >
      <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor"/>
      <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor"/>
    </svg>
  );
};

export default CornerBracket;
