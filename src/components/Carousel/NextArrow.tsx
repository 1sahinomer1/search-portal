const NextArrow = ({ className, style, onClick }: any) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
