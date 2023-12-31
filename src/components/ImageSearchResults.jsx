import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
import Image from "next/image";

export default function ImageSearchResults({results}){
    return (
        <div className="pb-24 mt-4">
            <div className="grid grid-cols-1 px-3 space-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.items.map((result) => (
                    <div key={result.link} className='mb-8'>
                        <div className="group">
                            <Link href={result.image.contextLink}>
                                <Image src={result.link} alt={result.title} className="object-contain w-full transition-shadow h-60 group-hover:shadow-xl"/>
                            </Link>
                            <Link href={result.image.contextLink}>
                                <h2 className="text-xl truncate group-hover:underline">{result.title}</h2>
                            </Link>
                            <Link href={result.image.contextLink}>
                                <p className="text-gray-600 group-hover:underline">{result.displayLink}</p>
                            </Link>
                        </div>    
                    </div>
                ))}
            </div>
            <div className="ml-16">
            <PaginationButtons/>
            </div>
        </div>
    )
}