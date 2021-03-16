import { SetSelectedImages } from "../services/Apicalls";

const ImageCard = ({ image, initFn, isSlected }) => {
  const onSelected = async (e) => {
    try {
      let payload = {
        selectedId: image._id,
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
  

      <img
        className="object-fit block rounded-b"
        src={image.imageURL}
        alt="Dynamic images"
      ></img>

      <div className="px-6 py-4">
        {!isSlected ? <div className="font-bold text-purple-500 text-xl mb-2">
          <input
            onChange={(e) => {
              onSelected(e.target.checked);
            }}
            type="checkbox"
            checked={image.isSelected}
          />
          {image.isSelected ? "Selected" : "Not Selected"}
        </div>
          : null}
        <ul>
          <li>
            <strong>Views: </strong>
            1000k (Dummy data)
          </li>
          <li>
            <strong>Downloads: </strong>
            200k
          </li>
          <li>
            <strong>Likes: </strong>
            300k
          </li>
        </ul>
      </div>
    </a>
  );
};

export default ImageCard;
