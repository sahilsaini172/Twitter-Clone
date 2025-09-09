export default function News() {
  return (
    <main className="flex gap-2 py-4 items-center">
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-bold leading-5 line-clamp-2">
          Here is a news for you from 2025. Hope you like it and read it.
        </h3>
        <div className="flex text-sm text-neutral-500 font-light items-center gap-2 mt-2">
          <div className="flex -space-x-2">
            <img
              src="../img/img2.jpeg"
              className="inline-block h-6 w-6 rounded-full ring ring-black object-cover"
            />
            <img
              src="../img/img3.jpeg"
              className="inline-block h-6 w-6 rounded-full ring ring-black object-cover"
            />
            <img
              src="../img/img4.jpeg"
              className="inline-block h-6 w-6 rounded-full ring ring-black object-cover"
            />
          </div>
          <p>6 hours ago &#183; Entertainment &#183; 183k posts</p>
        </div>
      </div>
      <img
        src="../img/img1.png"
        className="object-top object-cover aspect-square rounded-2xl w-18 h-18"
      />
    </main>
  );
}
