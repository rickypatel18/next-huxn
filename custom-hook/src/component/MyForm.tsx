import { useForm } from "../hooks/useForm";

const MyForm = () => {
  const { values, handleChange, handleSubmit, submitted } = useForm({
    name: "",
    email: "",
  });

  const onSubmit = () => {
    console.log(values);
  };

  return (
    <div>
      {submitted ? (
        <h2>Thanks for submitting</h2>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="enter name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                value={values.email}
                placeholder="enter email"
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default MyForm;
