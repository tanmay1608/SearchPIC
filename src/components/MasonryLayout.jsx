const MasonryLayout = ({ state }) => {
  return (
    <div
      className={` ${state.orientation} w-[1400px] mx-auto my-5  columns-4 gap-x-5 break-inside-avoid`}
    >
      {state.images.map((image, index) => (
        <div className="w-full mb-4" key={index}>
          <img
            className="max-w-full rounded-2xl"
            src={image.links.download}
            loading="lazy"
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
