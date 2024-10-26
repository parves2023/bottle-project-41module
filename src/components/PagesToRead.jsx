
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const PagesToRead = () => {
  // Example data for read-listed books
  const readBooks = [
    { bookName: 'The Catcher in the Rye', totalPages: 277 },
    { bookName: 'To Kill a Mockingbird', totalPages: 324 },
    { bookName: '1984', totalPages: 328 },
  ];

  const CustomBarShape = (props) => {
    const { fill, x, y, width, height } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={10} // Rounded corners
          ry={10}
        />
      </g>
    );
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Pages to Read</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={readBooks}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" shape={CustomBarShape}>
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#8884d8" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
