import Icon from "../../Components/Icon";
import TrendingTopic from "../../Components/TrendingTopic";
import News from "../../Components/News";

export default function SearchForYouFeed() {
  return (
    <main className="flex flex-col gap-4 mb-16">
      <Header />
      <TodayNewsSection />
      <TrendingTopicsSec />
      <WhoToFollow />
      <BusinessNews />
    </main>
  );
}

function Header() {
  return (
    <header className="relative w-full grid items-end border border-black">
      <video
        src="../vid1.mp4"
        typeof="video/mp4"
        autoPlay
        muted
        loop
        className="top-0 left-0 w-full aspect-5/2 object-cover"
      >
        Your Browser does not support this video tag.
      </video>
      <div className="absolute flex flex-col p-4 justify-end">
        <h2 className="text-2xl font-bold">The Great BMW Fest</h2>
        <p className="text-sm font-medium">
          Drive home a BMW's amazing range witg more power
        </p>
      </div>
    </header>
  );
}

function TodayNewsSection() {
  return (
    <section className="flex flex-col p-4">
      <header className="text-xl font-bold">Today's News</header>
      <News />
      <News />
      <News />
    </section>
  );
}

function TrendingTopicsSec() {
  return (
    <section className="flex flex-col p-4 border-y border-y-neutral-500 text-sm text-neutral-500 gap-6">
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
      <TrendingTopic />
    </section>
  );
}

function WhoToFollow() {
  return (
    <section className="flex flex-col p-4 gap-6">
      <header className="text-xl font-bold">Who to follow</header>
      <FollowProfile />
      <FollowProfile />
      <FollowProfile />
    </section>
  );
}

function FollowProfile() {
  return (
    <main className="flex gap-2 ">
      <img
        src="../img/img1.png"
        className="object-cover w-12 h-12 aspect-square rounded-full"
      />
      <div className="flex flex-col w-full">
        <header className="flex flex-1 justify-between items-center">
          <div className="flex  flex-col justify-between">
            <h3 className="font-medium">Iman Gadzhi</h3>
            <p className="font-light text-neutral-500">@GadzhiIman</p>
          </div>
          <button className="bg-white text-sm text-neutral-900 px-4 py-2 rounded-full font-semibold">
            Follow
          </button>
        </header>
        <p className="mt-1">
          Co-Owner: <span className="text-primary-500">@whopio</span> Owner:{" "}
          <span className="text-primary-500">Consulting.com</span>
        </p>
      </div>
    </main>
  );
}

function BusinessNews() {
  return (
    <section className="flex flex-col p-4 border-t border-t-neutral-500 gap-6">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Business News</h2>
        <div className="flex items-center gap-4">
          <Icon icon="arrow-right" />
          <Icon icon="ellipsis" style="text-neutral-500" />
        </div>
      </header>
      <BusinessNewsItem />
      <BusinessNewsItem />
      <BusinessNewsItem />
    </section>
  );
}

function BusinessNewsItem() {
  return (
    <main className="flex gap-2 border-b border-b-neutral-500">
      <img
        src="../img/img1.png"
        className="object-cover w-12 h-12 aspect-square rounded-full"
      />
      <div className="flex flex-col w-full">
        <header className="flex flex-1 justify-between items-center">
          <div className="flex justify-between gap-2">
            <h3 className="font-medium">Iman Gadzhi</h3>
            <p className="font-light text-neutral-500">
              @GadzhiIman &#183; 23h
            </p>
          </div>
          <Icon icon="ellipsis" style="text-neutral-500" />
        </header>
        <p className="mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, ullam! Iusto qui necessitatibus aliquid porro
          architecto cumque asperiores, quo explicabo eveniet harum suscipit
          praesentium dignissimos ex odio debitis aperiam quas.
        </p>
        <img
          src="../img/img4.jpeg"
          className="aspect-video rounded-2xl mt-4 object-cover "
        />
        <div className="flex justify-between my-4 text-neutral-500 text-sm mr-4">
          <div className="flex gap-1 items-center">
            <Icon icon="message" />
            <p>70</p>
          </div>
          <div className="flex gap-1 items-center">
            <Icon icon="rotate" />
            <p>165</p>
          </div>
          <div className="flex gap-1 items-center">
            <Icon icon="heart" />
            <p>54</p>
          </div>
          <div className="flex gap-1 items-center">
            <Icon icon="chart-simple" />
            <p>127k</p>
          </div>
          <div className="flex gap-1 items-center">
            <Icon icon="bookmark" />
          </div>
          <div className="flex gap-1 items-center">
            <Icon icon="share" />
          </div>
        </div>
      </div>
    </main>
  );
}
