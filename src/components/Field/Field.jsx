const Field = ({ size, id, row, col, setLog }) => {
  const fieldSize = {
    width: `${size}%`,
  };

  function handleMouseOver(evt) {
    if (!evt.target.classList.contains('cell')) {
      return;
    }
    if (evt.target.classList.contains('active')) {
      evt.target.classList.remove('active');
      const { id } = evt.target;
      setLog(prevLog => prevLog.filter(item => item.id !== id));
    } else {
      evt.target.classList.add('active');
      const { id } = evt.target;
      const newLog = {
        id,
        row: row + 1,
        col: col + 1,
      };
      setLog(prevState => [...prevState, newLog]);
    }
  }

  return (
    <div
      id={id}
      className="cell border-x border-y aspect-square"
      style={fieldSize}
      onMouseOver={handleMouseOver}
    ></div>
  );
};

export default Field;
