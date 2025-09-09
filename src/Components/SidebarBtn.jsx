export default function SidebarBtn({ onClick, screenWidth }) {
  return (
    <div
      onClick={onClick}
      className={`${
        screenWidth < 499 ? "hidden" : ""
      } w-10 h-10 flex aspect-square justify-center items-center rounded-full bg-primary-700 text-lg`}
    >
      S
    </div>
  );
}
