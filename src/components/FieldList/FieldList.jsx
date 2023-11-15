import Field from 'components/Field/Field';

const FieldList = ({ log, setLog, selectedOption }) => {
  const fieldCount = selectedOption;
  if (fieldCount === '') {
    return <p>Please, select your mode.</p>;
  }
  const containerSize = {
    width: fieldCount < 5 ? 200 : fieldCount < 10 ? 600 : '70%',
  };
  let fieldSize = 100 / fieldCount;
  let renderedFields = [];
  let key = 0;
  for (let i = 0; i < fieldCount; i++) {
    for (let j = 0; j < fieldCount; j++) {
      renderedFields.push(
        <Field
          key={`${selectedOption}-${i}-${j}`}
          size={fieldSize}
          row={i}
          col={j}
          id={key}
          log={log}
          setLog={setLog}
        />
      );
      key++;
    }
  }
  return (
    <div style={containerSize} className="flex flex-wrap h-full">
      {renderedFields}
    </div>
  );
};

export default FieldList;
