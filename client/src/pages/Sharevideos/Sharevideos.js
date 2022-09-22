import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Sharevideos = () => {
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let showError;
  const onSubmit = async (data) => {
    console.log(data);
    fetch("http://localhost:7000/api/v1/share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast("Item Added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="flex justify-center items-center w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Movie Name</span>
            </label>
            <input
              type="text"
              placeholder="Movie Name"
              class="input input-bordered"
              {...register("movieName", {
                required: {
                  value: true,
                  message: "movieName is required",
                },
              })}
            />
            <label class="label">
              {errors.movieName?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.movieName.message}
                </span>
              )}
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Movie Image URL</span>
            </label>
            <input
              type="text"
              placeholder="image"
              class="input input-bordered"
              {...register("image", {
                required: {
                  value: true,
                  message: "image is required",
                },
              })}
            />
            <label class="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Movie Release Date</span>
            </label>
            <input
              type="date"
              placeholder="movieReleaseDate"
              class="input input-bordered"
              {...register("movieReleaseDate", {
                required: {
                  value: true,
                  message: "movieReleaseDate is required",
                },
              })}
            />
            <label class="label">
              {errors.movieReleaseDate?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.movieReleaseDate.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Imdb Rating</span>
            </label>
            <input
              type="text"
              placeholder="imdbRating"
              class="input input-bordered"
              {...register("imdbRating", {
                required: {
                  value: true,
                  message: "imdbRating is required",
                },
              })}
            />
            <label class="label">
              {errors.imdbRating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.imdbRating.message}
                </span>
              )}
            </label>
            <p>{showError}</p>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sharevideos;
