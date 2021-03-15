import { SetSelectedImages } from "../services/Apicalls";

const ImageCard = ({ image, initFn }) => {
  const onSelected = async (e) => {
    try {
      let payload = {
        selectedID: image._id,
      };
      let { data } = await SetSelectedImages(payload);
      if (data.success) {
        initFn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <a
      class="bg-white rounded h-full text-grey-darkest no-underline shadow-md"
      href={image.imageURL}
      rel="noreferrer"
      target="_blank"
    >
      <h1 className="text-3xl p-2">
        <label>
          <input
            onChange={(e) => {
              onSelected(e.target.checked);
            }}
            type="checkbox"
            checked={image.isSelected}
          />
          {image.isSelected ? "Selected" : "Not Selected"}
        </label>
      </h1>

      <img
        className="object-fit block rounded-b"
        src={image.imageURL}
        alt="Dynamic images"
      ></img>
    </a>
  );
};

export default ImageCard;
