import "../App.css";
export default function HomePage() {
  return (
    <>
      <main id="homePageSection">
        <div
          className="flex flex-col items-center justify-items-center text-center"
          id="homePageContainer"
        >
          <h1 className="font-bold  text-[#515151]">
            Welcome
            <br />
            to <br />
            <span id="titleSpan" className="text-[#a3d2a8] text-9xl ">
              RePaged
            </span>
          </h1>
          <h2 className="italic text-2xl text-[#515151] pt-8 font-medium">
            A library of literary reviews
          </h2>
        </div>
      </main>
      <div>
        <p>Our top rated books according to you, our experts:</p>
        {/* //TODO: insert a query, selects book titles and averages for reviews for the top 5 reviewed books. */}
      </div>
    </>
  );
}
