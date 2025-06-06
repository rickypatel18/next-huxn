const ServerFetch = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await data.json();
  console.log(response);

  return <div>
    <p>{response.title}</p>
    <p>{response.completed ? "yes" : "no"}</p>
  </div>;
};

export default ServerFetch;
