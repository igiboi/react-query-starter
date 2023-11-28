import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: 2000,
      // stateTime: 0,
      enabled: false,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading..</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
