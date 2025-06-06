"use client";

import { ChangeEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as actions from "@/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MovieProps
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>

          <CardContent>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-40 object-cover rounded"
            />

            <p className="mt-2">{data.description}</p>

            {/* delete button */}
            <form action={actions.deleteMovie} className="mt-4">
              <Input type="hidden" name="movieId" value={data.id} />
              <Button className="bg-red-500 py-2 px-4">Delete</Button>
            </form>
          </CardContent>
        </CardHeader>
      </Card>

      {/* edit dialog */}
      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-2 bg-amber-400">
            Edit
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Movie</DialogTitle>
          </DialogHeader>

          <form
            action={actions.updateMovie}
            onSubmit={() => setOpenDialog(false)}
            className="space-y-4 pt-4"
          >
            <div>
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                type="text"
                name="titleU"
                value={updatedMovie.title}
                onChange={(e) => handleUpdateMovie(e, "title")}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="descriptionU"
                value={updatedMovie.description}
                onChange={(e) => handleUpdateMovie(e, "description")}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="image">Image Url</label>
              <Input
                id="image"
                type="text"
                name="imageU"
                value={updatedMovie.image}
                onChange={(e) => handleUpdateMovie(e, "image")}
              />
            </div>

            <Input type="hidden" name="movieId" value={data.id} />
            <Button type="submit" onClick={() => setOpenDialog(false)}>
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowMovie;
