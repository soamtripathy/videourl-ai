export default function App() {
  return (
    <>
      <main className="max-w-xl mx-auto flex px-4 gap-8">
        <div className="py-8  flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase mb-4">
            <span className="text-5xl "> URL to Video</span> <br />
            <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-500 bg-clip-text text-transparent">
              {" "}
              using power of AI
            </span>
          </h1>

          <form action="" className="  grid gap-2 ">
            <input
              type="
        url"
              placeholder="https://....."
              className="bg-transparent text-white border-2 rounded-full px-4 py-2 grow"
            />

            <button
              type="submit"
              className=" bg-emerald-500 text-white px-4 py-2 rounded-full uppercase "
            >
              Create&nbsp;Video
            </button>
          </form>
        </div>
        <div className="py-4">
          <div className="bg-gray-200 w-[240px] h-[380px] text-gray-500 rounded-2xl p-8">
            Video Here
          </div>
        </div>
      </main>
    </>
  );
}
