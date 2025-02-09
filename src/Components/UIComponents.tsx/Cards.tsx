type CardProps = {
  label: string;
  value: number;
};

const Cards = ({ label, value }: CardProps) => {
  return (
        <div key={label} className="p-4 bg-gray-200 rounded-lg">
          <p className="font-bold">{label}</p>
          <p>{value}</p>
        </div>
  );
};

export default Cards;