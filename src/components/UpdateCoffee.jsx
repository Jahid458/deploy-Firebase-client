import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, Supplier, taste, category, Photo } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const Supplier = form.Supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const Photo = form.Photo.value;

    const updatedCoffee = { name, quantity, Supplier, taste, category, Photo };
    console.log(updatedCoffee);
    //send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated SuceesFully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee:{name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* Form name & Quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              defaultValue={name}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* Form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <input
              type="text"
              name="Supplier"
              defaultValue={Supplier}
              placeholder="Supplier"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="taste"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* Form category and details  */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              defaultValue={category}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Category Details"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* Form photo- url */}
        <div className="mb-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="Photo"
              placeholder="Photo URL"
              defaultValue={Photo}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="UPDATE COFFEE"
          className="btn btn-block bg-primary text-white text-xl"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
