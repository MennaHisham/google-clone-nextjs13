import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResults({results}) {
  return (
    <div className="w-full px-3 pb-24 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults} results({results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
          <div className="" key={result.link}>
            <div className="">
              <Link href={result.link}>
                {result.formattedUrl}
              </Link>
              <Link href={result.link}>
                {result.title}
              </Link>
            </div>
            <p>{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
    </div>
  )
}
