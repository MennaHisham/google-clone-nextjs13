import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

export default async function WebSearchPage({searchParams}) {

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  )

  if(!response.ok){
    throw new Error('Something went wrong');
  }
  const data = await response.json();

  const results = data.items;

  if(!results) {
    return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="mb-4 text-3xl">No results found</h1>
      <p className="text-lg">
        Try searching for somthing else or go back to the homepage{" "}
        <Link href="/" className="text-blue-500">Home</Link>
      </p>
    </div>
    )
  }
  return (
    <>
    {results && <WebSearchResults results={data}/>}
    </>
  )
}
