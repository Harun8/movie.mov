import ImageSlider from "./ImageSlider";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center text-white mb-3">
        <h3>Featured movies</h3>
      </div>
      <div className="d-flex justify-content-center">
        <ImageSlider></ImageSlider>
      </div>
    </>
  );
};

export default Header;
