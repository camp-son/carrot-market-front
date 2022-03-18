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
      <div className="rounded-3xl bg-white p-6 shadow-lg"></div>
      <div className="rounded-3xl bg-white p-6 shadow-lg"></div>
    </div>
  );
};

export default Home;
