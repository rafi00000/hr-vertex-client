export default function Loading() {
    return <div className="flex items-center justify-center space-x-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    </div>
}