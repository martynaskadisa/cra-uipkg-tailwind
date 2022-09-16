import Listing from "@martynas/listing";

function App() {
  return (
    <div className="bg-slate-700 min-h-screen flex flex-col items-center justify-center">
      <Listing
        title="Headphones for sale"
        cta="View listing"
        price="$390.00"
        onCtaClick={() => alert("Click!")}
      />
    </div>
  );
}

export default App;
