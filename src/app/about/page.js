import { HiUserGroup } from "react-icons/hi";

// import img1 from "../../../public/elegant-businessman-office_155003-9641 (1).avif"





const AboutPage = () => {

    return (
        <div className="mt-4 md:mx-10 ">

            <div className="mask-parallelogram bg-red-700  w-full px-10 md:px-56 h-8 lg:h-16"  ></div>

            <div className="mt-3 md:mt-5 w-full  md:flex gap-5 lg:p-20 ">

                <div className=" ml-10 lg:w-[60%] mx-auto  lg:ml-14 pt-9">
                    <div className="flex gap-2 items-center">
                        <HiUserGroup size={28}></HiUserGroup>
                        <p className="font-extrabold text-2xl text-teal-500">About Company</p>
                    </div>
                    <p className=" text-xs md:text-base font-medium pt-4 md:pt-8 pr-4 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, nemo veritatis omnis temporibus, est voluptates vero accusantium modi officia culpa porro laboriosam ab necessitatibus repellendus impedit autem perspiciatis ullam pariatur sapiente velit illum officiis. Eum, perspiciatis iure. Delectus facere minus maiores laboriosam aliquam nam ad, sunt inventore laborum perspiciatis quia blanditiis dicta quibusdam! Tenetur impedit asperiores odio quaerat perferendis, enim a accusantium quo magnam dolorum velit molestias explicabo deserunt vel quasi consequatur iusto sequi qui ad quia sit incidunt pariatur nam? Laudantium tenetur mollitia maxime ullam laborum voluptatem amet quos. Officia quis soluta provident? Rerum accusantium neque minima amet aliquid.</p>
                </div>

                <div className="mt-8 w-[85%]  lg:w-[50%] mx-auto  md:ml-32">
                    <div className="avatar w-f  lg:w-[85%]">
                        <div className=" mask mask-hexagon">
                            <img src="https://i.ibb.co/XkcBKtm/blog-header.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mask-parallelogram bg-red-700  w-full mt-8 px-10 md:px-56 h-8 lg:h-16"  ></div>

            <div className=" mt-12 md:mt-16">
                <h1 className=" ml-10 text-xl md:text-center  md:text-3xl font-semibold text-teal-400">Why HRVERTEX?</h1>
                <p className=" text-xs pt-3 md:pt-5 w-[80%] mx-auto md:text-sm"> <span className="text-lg text-red-500">S</span>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>

            <div className=" mt-10 mb-10">
                <h1 className="font-semibold text-3xl text-center">Peoples</h1>

                <div className=" md:flex w-[50%] md:w-[80%] mx-auto pt-10">
                    <img className="w-[300px] mx-auto border p-2" src='https://i.ibb.co/zR39ctJ/elegant-businessman-office-155003-9641.jpg' alt="" />
                    <img className=" md:w-[300px] mx-auto border p-2" src='https://i.ibb.co/7t2zYJY/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-sm.jpg' alt="" />

                    <img className="md:w-[300px] mx-auto border p-2" src='https://i.ibb.co/zR39ctJ/elegant-businessman-office-155003-9641.jpg' alt="" />

                </div>
            </div>
        </div>
    );
};

export default AboutPage;