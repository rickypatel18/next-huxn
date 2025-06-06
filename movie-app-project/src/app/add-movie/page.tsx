import { createMovie } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddMovie = () => {
  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">ADD a New Movie</h1>
      <form action={createMovie}>
        <label htmlFor="title">Title</label>
        <Input name="title" required />
        <label className="mt-3" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-full p-2 border rounded"
          name="description"
          required
        />
        <label className="mt-3" htmlFor="imageurl" >
          Image Url
        </label>
        <Input name="imageurl" required />

        <Button className="mt-5" type="submit">
          Add Movie
        </Button>
      </form>
    </div>
  );
};

export default AddMovie;
