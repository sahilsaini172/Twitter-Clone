import Icon from "../../Components/Icon";
import TrendingTopic from "../../Components/TrendingTopic";

export default function SearchTrendingFeed() {
  return (
    <main className="flex flex-col gap-4 mb-64 p-4">
      <TrendingHeader />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
    </main>
  );
}

function TrendingHeader() {
  return (
    <header className="flex flex-col  text-neutral-500">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">The Great BMW Fest</h2>
        <Icon icon="ellipsis" />
      </div>
      <p>Drive home a BMW's amazing range witg more power.</p>
    </header>
  );
}
