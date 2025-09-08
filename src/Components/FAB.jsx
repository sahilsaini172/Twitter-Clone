import Icon from "./Icon";

export default function FAB({ icon = "add" }) {
  return (
    <div className="fixed bottom-20 right-6 bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xs shadow-white/25 ">
      <Icon icon={icon} style="text-2xl" />
    </div>
  );
}
