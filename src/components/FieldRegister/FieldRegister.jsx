import FieldRegisterItem from 'components/FieldRegisterItem/FieldRegisterItem';

const FieldRegister = ({ log }) => {
  return (
    <div>
      <h3 className=" text-2xl mb-8">Hover squares</h3>
      <div className="flex flex-col gap-2">
        {log.map((item, index) => (
          <FieldRegisterItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FieldRegister;
