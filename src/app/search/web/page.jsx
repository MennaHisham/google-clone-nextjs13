export default async function WebSearchPage(searchParams) {

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchParams.searchTerm}`
  )
  const data = await response.json();

  const results = data.items;

  return (
    <>
    {results && results.map((result)=> <h1>{result.title}</h1>)}
    </>
  )
}
