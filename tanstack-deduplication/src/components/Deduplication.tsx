import { useQuery } from "@tanstack/react-query";

const getRandomNumber = () => {
  return Promise.resolve(Math.random());
};

const Deduplication = () => {
  const { data } = useQuery({
    queryKey: ["ranomNumber"],
    queryFn: getRandomNumber,
  });
  return <div>Random Number is : {data}</div>;
};

export default Deduplication;
