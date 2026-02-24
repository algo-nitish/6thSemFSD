import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center mt-16">
        <img
          src="https://via.placeholder.com/200"
          alt="ABES"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />

        <h1 className="text-3xl font-bold mt-6 text-gray-700">ABES College</h1>
      </div>
    </>
  );
}

export default Home;
