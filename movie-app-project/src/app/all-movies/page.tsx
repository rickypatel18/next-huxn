import ShowMovie from "@/components/custom-component/ShowMovie";
import { db } from "@/utils/prisma";

const AllMovies = async () => {
  const movies = await db.movie.findMany();

  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">All Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {movies.length > 0 ? (
          movies.map((m) => <ShowMovie key={m.id} data={m} />)
        ) : (
          <p>No movies added yet</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
