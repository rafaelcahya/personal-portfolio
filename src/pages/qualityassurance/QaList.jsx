import { useState } from "react";

export default function QAList({ articles }) {
    const [filter, setFilter] = useState("all");

    const sortedArticles = [...articles].sort(
        (a, b) =>
            new Date(b.fields?.createdDate ?? "") -
            new Date(a.fields?.createdDate ?? "")
    );

    const filteredArticles =
        filter === "all"
            ? sortedArticles
            : sortedArticles.filter((article) => {
                  const type = article.fields.type;
                  if (Array.isArray(type)) {
                      return type
                          .map((t) => t.toLowerCase())
                          .includes(filter.toLowerCase());
                  }
                  if (typeof type === "string") {
                      return type.toLowerCase() === filter.toLowerCase();
                  }
                  return false;
              });

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div data-aos="fade" className="flex flex-col gap-10 md:gap-20 py-44 px-5 sm:px-10 lg:px-20 2xl:px-40">
            <header className="flex flex-col gap-2 items-start md:items-center text-start md:text-center">
                <p className="text-zinc-500 text-[1rem] sm:text-[1.2rem] tracking-[0.015rem]">
                    My Projects
                </p>
                <h1 className="font-medium text-zinc-900 text-[1.5rem] sm:text-[2.5rem] leading-8 sm:leading-[3.2rem] tracking-[0.015rem] w-full lg:w-1/2">
                    Ensure every feature works flawlessly with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">
                        robust testing
                    </span>
                </h1>
            </header>

            <div className="flex gap-4 justify-center items-center">
                {["all", "manual", "automation"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-full text-sm border cursor-pointer duration-200 ${
                            filter === type
                                ? "bg-blue-500 text-white border-blue-500"
                                : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100"
                        }`}
                    >
                        {capitalize(type)}
                    </button>
                ))}
            </div>

            <section className="flex flex-col mx-auto gap-5">
                {filteredArticles.map((article, i) => (
                    <div key={i}>
                        <a
                            href={`/qualityassurance/${article.fields.slug}`}
                            className="group flex flex-col gap-2 w-full md:w-[600px] duration-200 outline-none border-b border-zinc-200 pb-5"
                        >
                            <div className="flex flex-wrap gap-x-3 gap-y-2 text-[12px]">
                                {(article.fields.tags || [])
                                    .slice(0, 2)
                                    .map((tag, i) => (
                                        <p
                                            key={i}
                                            className="uppercase text-zinc-500 tracking-wider"
                                        >
                                            {tag}
                                        </p>
                                    ))}
                            </div>
                            <p className="group-hover:text-violet-500 text-[1.25rem] font-medium text-zinc-900 w-full duration-200">
                                {article.fields.title}
                            </p>
                            <p className="text-[1rem] text-zinc-500 leading-6 w-full line-clamp-3">
                                {article.fields.outline}
                            </p>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
}
