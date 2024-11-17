import React from 'react';

const Destination = () => {
    return (
        <div className="hero  min-h-screen ">
  <div className="hero-content flex flex-col lg:flex-row gap-5 p-10">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Cox's bazar</h1>
      <p className="py-6">
      Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Origin</span>
          </label>
          <input type="text" placeholder="Origin" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input type="text" placeholder="Destination" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-buttonColor font-bold text-black">Start book !</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Destination;