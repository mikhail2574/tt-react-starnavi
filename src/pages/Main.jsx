import React, { useState } from 'react';
import Controls from 'components/Controls/Controls';
import FieldList from 'components/FieldList/FieldList';
import FieldRegister from 'components/FieldRegister/FieldRegister';

const Main = () => {
  const [log, setLog] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <div className="w-8/12 min-w-min mx-auto mt-10">
      <Controls setSelectedOption={setSelectedOption} setLog={setLog} />
      <div className="flex justify-between">
        <FieldList log={log} setLog={setLog} selectedOption={selectedOption} />
        <FieldRegister log={log} setLog={setLog} />
      </div>
    </div>
  );
};

export default Main;
