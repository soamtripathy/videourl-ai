export default function App() {
  return (
    <>
      <main className="max-w-xl mx-auto flex gap-4">
        <div>
          <h1 className="text-3xl font-bold underline">
            Generate a video from a URL using power of AI
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            provident, molestias alias libero quas ipsum a, harum earum odit
            voluptates consequatur! Et omnis perspiciatis tempora dolore
            corporis ipsam tempore suscipit.
          </p>
          <form action="">
            <input
              type="
        url"
              placeholder="https://....."
              className="border-black border-2"
            />

            <button type="submit">Create Video</button>
          </form>
        </div>
        <div>
          <div className="bg-gray-200 w-[240px] h-[380px]">a</div>
        </div>
      </main>
    </>
  );
}
