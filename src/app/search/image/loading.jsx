export default function loading() {
  return (
    <div className="flex flex-col max-w-6xl pt-10 mx-2 sm:space-x-4 sm:flex-row lg:pl-52 pb-42">
      <div className="animate-pulse">
        <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="hidden sm:inline-flex sm:space-x-4">
      <div className="animate-pulse">
        <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse">
        <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="w-48 h-2 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="w-44 h-2 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      </div>
    </div>
  )
}
