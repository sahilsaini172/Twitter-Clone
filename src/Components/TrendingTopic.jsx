import Icon from "./Icon";
export default function TrendingTopic() {
  return (
    <main className="flex flex-col">
      <header className="flex justify-between items-center text-neutral-500">
        <p>Politics &#183; Trending</p>
        <Icon icon="ellipsis" />
      </header>
      <h3 className="text-white font-bold">#Zelensky</h3>
      <p className="text-sm text-neutral-500">1,226 posts</p>
    </main>
  );
}
