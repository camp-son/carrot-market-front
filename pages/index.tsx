import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-1/3 bg-blue-50 p-10">
      <div className="rounded-3xl bg-white px-4 py-5 shadow-lg">
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
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
