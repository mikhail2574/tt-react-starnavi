const FieldRegisterItem = ({ item }) => {
  const { col, row } = item;
  return (
    <p className="px-5 py-2 bg-cyan-100 rounded-md">
      Row: {row}, col: {col}
    </p>
  );
};

export default FieldRegisterItem;
