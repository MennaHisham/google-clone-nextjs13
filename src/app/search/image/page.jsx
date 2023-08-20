export const dynamic = "force-dynamic";

import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function WebSearchPage({searchParams}) {
  console.log(searchParams)
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve,10000))

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
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
    {results && <ImageSearchResults results={data} alt="image-search"/>}
    </>
  )
}
