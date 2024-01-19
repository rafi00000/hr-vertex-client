import Footer from "@/Components/SharedComponents/Footer";
import Navber from "@/Components/SharedComponents/Navber";
import TopHeader from "@/Components/SharedComponents/TopHeader";

export default function Layout({ children }) {
    return (
        <>
            <div className='top-0 left-0 absolute z-50 w-full'>
                <TopHeader />
                <Navber />
            </div>
            {children}
            <Footer />
        </>
    )
}