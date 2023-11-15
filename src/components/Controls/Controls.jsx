import getOptions from 'api/fieldOptions';
import { useState, useEffect } from 'react';

const Controls = ({ setSelectedOption, setLog }) => {
  const [markupOptions, setMarkupOptions] = useState([]);
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = await getOptions();
        const fetchedOptions = options.map(option => (
          <option value={option.field} key={option.id}>
            {option.name}
          </option>
        ));

        if (options.length > 0) {
          setQuantity(options[0].field);
        }

        setMarkupOptions(fetchedOptions);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = evt => {
    setQuantity(evt.target.value);
  };

  const handleClick = () => {
    setSelectedOption(quantity);
    setLog([]);
  };

  return (
    <div className="mx-auto flex justify-center gap-10 w-32 mb-12">
      <select
        className="border-x border-y rounded-md px-6 py-1 border-slate-800"
        onChange={handleChange}
      >
        {markupOptions.length ? markupOptions : <option>Loading...</option>}
      </select>
      <button
        className="bg-blue-500 text-gray-100 px-4 py-1 rounded-md hover:bg-blue-600"
        onClick={handleClick}
      >
        START
      </button>
    </div>
  );
};

export default Controls;
