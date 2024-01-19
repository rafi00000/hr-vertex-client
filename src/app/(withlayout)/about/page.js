import Image from "next/image";
import { HiUserGroup } from "react-icons/hi";
const AboutPage = () => {

    return (
        <>
            <div className="bg-[url('https://i.ibb.co/N1VHksh/Black-And-Red-Modern-Business-Human-Resource-Management-Presentation.png')] bg-opacity-10 ">
                <div className="mx-auto md:py-36 py-44 container md:grid grid-cols-2 gap-4 items-center justify-between">
                    <div>
                        <div className="flex gap-2 items-center text-teal-500">
                            <HiUserGroup size={28}></HiUserGroup>
                            <p className="font-extrabold text-2xl ">About Company</p>
                        </div>
                        <p className=" text-xs md:text-base font-medium max-w-[600px] pt-3 text-teal-500 opacity-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, nemo veritatis omnis temporibus, est voluptates vero accusantium modi officia culpa porro laboriosam ab necessitatibus repellendus impedit autem perspiciatis ullam pariatur sapiente velit illum officiis. Eum, perspiciatis iure. Delectus facere minus maiores laboriosam aliquam nam ad, sunt inventore laborum perspiciatis quia blanditiis dicta quibusdam! Tenetur impedit asperiores odio quaerat perferendis, enim a accusantium quo magnam dolorum velit molestias explicabo deserunt vel quasi consequatur iusto sequi qui ad quia sit </p>
                    </div>
                    <Image className="w-full h-full" src='https://i.ibb.co/XkcBKtm/blog-header.jpg' height={500} width={500} alt="img"/>
                </div>
            </div>

            <div className="mask-parallelogram bg-red-700  w-full mt-8 px-10 md:px-56 h-8 lg:h-16"  ></div>

            <div className=" mt-12 md:mt-16">
                <h1 className=" ml-10 text-xl md:text-center  md:text-3xl font-semibold text-teal-400">Why HRVERTEX?</h1>
                <p className=" text-xs pt-3 md:pt-5 w-[80%] mx-auto md:text-sm"> <span className="text-lg text-red-500">S</span>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>

            <div className=" mt-10 mb-10">
                <h1 className="font-semibold text-3xl text-center text-teal-400 ">Peoples</h1>

                <div className="container sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-auto pt-10 gap-2 items-center justify-center">
                    <Image height={500} width={500}  className="shadow-2xl w-full border mx-auto block" src='https://i.ibb.co/zR39ctJ/elegant-businessman-office-155003-9641.jpg' alt="" />
                    <Image height={500} width={500}  className=" shadow-2xl w-full border block mx-auto" src='https://i.ibb.co/7t2zYJY/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg' alt="" />

                    <Image height={500} width={500}  className="shadow-2xl w-full border block mx-auto" src='https://i.ibb.co/zR39ctJ/elegant-businessman-office-155003-9641.jpg' alt="" />

                </div>
            </div>
            <div className="mask-parallelogram bg-red-700  w-full mt-8 px-10 md:px-56 h-8 lg:h-16 mb-3"  ></div>
        </>
    );
};

export default AboutPage;