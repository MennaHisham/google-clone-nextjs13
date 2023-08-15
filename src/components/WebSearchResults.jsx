export default function WebSearchResults({results}) {
  return (
    <div className="w-full px-3 pb-24 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults} results({results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  )
}
