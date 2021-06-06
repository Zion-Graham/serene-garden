import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="px-10">
      <div className="flex flex-col h-screen ">
        <Navbar></Navbar>
        <div
          className="flex flex-col flex-1 mb-10 p-5 bg-cover bg-center 
          rounded-3xl space-y-5 content-between"
          style={{ backgroundImage: "url(/plant.jpg)" }}
        >
          <div className="flex-1"></div>
          <p className="text-5xl font-bold w-1/2">Your Dream Garden Awaits</p>
          <button className="w-1/6 bg-green-600 text-white text-xl font-bold px-8 py-2 rounded-full">
            Shop Now
          </button>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}
