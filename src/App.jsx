function App() {
  return (
    <div className="min-h-screen bg-yellow-500 flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl text-base-content text-blue-900">
          <a
            href="https://alanrutan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            alanrutan.com
          </a>
        </p>
        <div className="mt-12">
          <button
            className="btn btn-md btn-outline bg-blue-900 text-yellow-400 px-8 hover:scale-110 hover:shadow-lg transition cursor-pointer"
            onClick={() => window.open("https://ronirutan.com", "_blank")}
          >
            Need a website?
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
