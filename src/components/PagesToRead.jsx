import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const PagesToRead = ({ allBooks }) => {
  const totalPages = allBooks.reduce((acc, book) => acc + book.totalPages, 0);

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
          rx={10} 
          ry={10}
        />
      </g>
    );
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Total Pages to Read: {totalPages}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={allBooks}
          margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
          barCategoryGap="10%"
        >
          <XAxis
            dataKey="bookName"
            angle={0}
            textAnchor="middle"
            interval={0}
            height={60}
          />
          <YAxis label={{ value: 'Pages', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="totalPages" shape={CustomBarShape} barSize={40}>
            {allBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#8884d8" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
