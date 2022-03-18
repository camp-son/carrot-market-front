import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="grid w-1/3 gap-10 bg-slate-400 py-20 px-10">
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="text-lg font-semibold">Select Item</div>
        <div className="mt-1 flex justify-between">
          <div className="text-gray-400">Grey Chair</div>
          <div className="font-semibold">$170</div>
        </div>
        <div className="mt-1 flex justify-between">
          <div className="text-gray-400">Tooly Table</div>
          <div className="font-semibold">$800</div>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <div className="font-semibold">Total</div>
          <div className="font-semibold">$970</div>
        </div>
        <div className="text-md mx-auto mt-3 w-2/3 rounded-lg bg-blue-400 py-2.5 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="flex justify-between bg-blue-600 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-6 flex flex-col rounded-3xl bg-white p-6">
          <div className="relative -top-14 flex items-end justify-between">
            <div className="relative -bottom-5 flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-blue-100" />
            <div className="relative -bottom-5 flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="-mt-10 flex flex-col text-center">
            <div className="text-lg font-semibold">Tony Molloy</div>
            <div className="text-sm text-gray-400">New York, USA</div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <button>⬅</button>
          <div className="space-x-3">
            <span>🌠4.9</span>
            <span className="rounded-xl p-3 shadow-xl">💖</span>
          </div>
        </div>
        <div className="mb-3 h-72 bg-gray-400" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Swoon Lounge</span>
          <span className="text-xs text-gray-400">Chair</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <input type="radio" name="color" />
            <input type="radio" name="color" />
            <input type="radio" name="color" />
          </div>
          <div className="space-x-4">
            <button className="aspect-square w-10 rounded-lg bg-blue-100 text-xl">
              -
            </button>
            <span className="text-2xl font-semibold">1</span>
            <button className="aspect-square w-10 rounded-lg bg-blue-100 text-xl">
              +
            </button>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-3xl">$450</span>
          <button className="rounded-xl bg-blue-500 py-2 px-9 font-normal text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
