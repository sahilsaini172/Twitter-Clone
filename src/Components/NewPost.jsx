import Icon from "./Icon";

export default function NewPost({ screenWidth }) {
  return (
    <section className="p-4 sm:py-2 text-primary-500 border-b border-b-neutral-700 flex flex-col gap-4">
      {screenWidth > 499 && (
        <div className="flex gap-4 items-center text-white border-b border-b-neutral-700 py-4">
          <div className="w-10 h-10 flex aspect-square text-xl justify-center items-center rounded-full bg-primary-700">
            S
          </div>
          <input
            type="text"
            placeholder="What's happening?"
            className="text-xl flex-1 h-full focus:outline-0 placeholder:text-neutral-500"
          />
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 sm:px-8">
          <Icon icon="image" />
          <Icon icon="video" />
          <Icon type="brands" icon="react" />
          <Icon icon="icons" />
          <Icon icon="location-pin" />
        </div>
        <button className="text-sm font-bold text-black bg-neutral-500 py-2 px-4 rounded-full">
          Post
        </button>
      </div>
    </section>
  );
}
