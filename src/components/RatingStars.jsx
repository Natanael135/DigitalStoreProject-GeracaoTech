const StarRating = ({ rating, totalStars = 5 }) => {
  const getStarFill = (index) => {
    if (rating >= index + 1) return "100%";
    if (rating > index) return `${(rating - index) * 100}%`;
    return "0%";
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          key={index}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`grad-${index}`}>
              <stop offset={getStarFill(index)} stopColor="#F6AA1C" />
              <stop offset={getStarFill(index)} stopColor="#FFF" />
            </linearGradient>
          </defs>
          <path
            d="M8.33102 1.2306L10.1118 5.65038L14.6708 6.06108C14.987 6.08972 15.1157 6.50343 14.8756 6.72122L11.4176 9.86292L12.4538 14.5367C12.5257 14.8614 12.1901 15.1169 11.9185 14.9443L8.00045 12.4666L4.08244 14.9443C3.81007 15.1162 3.47519 14.8607 3.54705 14.5367L4.58333 9.86292L1.12453 6.72047C0.884502 6.50268 1.01242 6.08896 1.32934 6.06033L5.88837 5.64962L7.66916 1.2306C7.79276 0.923134 8.20742 0.923134 8.33102 1.2306Z"
            fill={`url(#grad-${index})`}
            stroke="#F6AA1C"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;