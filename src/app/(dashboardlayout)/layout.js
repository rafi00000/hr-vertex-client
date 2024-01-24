import Menuber from "@/Components/SharedComponents/dashboard/menuber";

export default function Layout({ children }) {
    return (
        <div className="md:grid grid-cols-4 justify-start items-start ">
            <Menuber />
            <div className="col-span-3 min-h-screen overflow-y-auto">
                {children}
            </div>
        </div>
    )
}