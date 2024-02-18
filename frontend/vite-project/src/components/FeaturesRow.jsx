const FeaturesRow = () => {
  return (
    <section className="bg-gray-50 my-5 py-5">
      <h2 className="font-bold text-4xl text-center pb-5 ">
        ¿Por qué ProjectAhead?
      </h2>
      <section
        id="feature-row"
        className="flex justify-center gap-x-5 bg-gray-50 my-10"
      >
        <div className="flex flex-col w-60 gap-y-2 ">
          <div className="w-60 h-32 bg-gray-300 rounded">Image</div>
          <h3 className="font-bold">First feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            totam!
          </p>
        </div>
        <div className="flex flex-col w-60 gap-y-2">
          <div className="w-60 h-32 bg-gray-300 rounded">Image</div>
          <h3 className="font-bold">Second feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            totam!
          </p>
        </div>
        <div className="flex flex-col w-60 gap-y-2">
          <div className="w-60 h-32 bg-gray-300 rounded">Image</div>
          <h3 className="font-bold">Second feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            totam!
          </p>
        </div>
      </section>
    </section>
  );
};

export default FeaturesRow;
