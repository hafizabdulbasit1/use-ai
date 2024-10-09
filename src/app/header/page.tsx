// import Link from "next/link"
// import Image from "next/image"
// export default function Head() {
//     return (
//         // heafer
//         <div>
//             <nav className="bg-[#727217]   py-2 flex justify-between text-white ">

//                 <span className=" flex  py-2 mx-4 hover:bg-yellow-500 hover:text-white rounded-2xl bg-gray-400  px-2 font-bold text-2xl">
//                     <h1 className=" text-3xl">ABD</h1>

//                 </span>

//                 <ul className=" flex text-white font-bold  px-96 py-1 space-x-2 ">

//                     <li className=" hover:bg-yellow-500  rounded-full px-4 py-2"><Link href="/">home</Link></li>
//                     <li className=" hover:bg-yellow-500 rounded-full px-4 py-2 "><Link href="about">about</Link></li>
//                     <li className=" hover:bg-yellow-500 rounded-full px-4 py-2 "><Link href="gallery">gallery</Link></li>
//                     <li className=" hover:bg-yellow-500 rounded-full px-4 py-2 "><Link href="contact-us">contact us</Link></li>
//                 </ul>
//             </nav>
//             {/* main page  */}

//             <main className="bg-slate-300 py-40 pl-24 flex">
//                 {/* heading and text */}
//                 <div>
//                     <h1 className="text-white font-boldhello text-7xl "> This is main page</h1>
//                     <p className="text-gray font-bold py-5 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia odit <br />laudantium accusamus eveniet fugit asperiores cumque quis minima assumenda consequuntur iste modi iusto amet adipisci, blanditiis excepturi, quas saepe?</p>


//                     {/* button */}
//                     <div className="button text-2xl">
//                         <button className=" size- rounded-2xl bg-gray-500  text-white  hover:bg-yellow-500 hover:text-black px-3 py-2 mx-2 ">clik this</button>
//                         <button className="size- rounded-2xl bg-gray-500 text-white hover:bg-yellow-500 hover:text-black px-3 py-2 mx-2">for more</button>
//                     </div>
//                 </div>


//                 {/* image */}
//                 <div className="flex-4 py-6 px-8" >
//                     <Image width={1100} height={500} src="/pi.jpg" alt="shoes" />
//                 </div>
//             </main>


//             {/* footer */}
//             <footer>
//                 <div className="bg-green-900 py-14 text-white ">
//                     <div className="flex justify-between ">
//                         <div className="">
//                             <h2 className="text-3xl font-bold ">explore</h2>
//                             <ul className=" ">
//                                 <li><a href="#">facebook</a></li>
//                                 <li><a href="#"> </a>youtube</li>
//                                 <li><a href="#"> </a> whatsapp</li>
//                             </ul>

//                         </div>

                        
//                             <h2 className="text-3xl font-bold ml-4">more about</h2>
//                             <ul className="ml-4">
//                                 <li><a href="#">home</a></li>
//                                 <li><a href="#">about</a></li>
//                                 <li><a href="#">gallery</a></li>

//                             </ul>

                        
//                         <div className="">
//                             <h2 className="text-3xl font-bold ml-4">Abdul BAsit</h2>
//                             <p className="mr-8">copyright 2024 by aboul basit </p>
//                         </div>

//                     </div>



//                 </div>

//             </footer>



//         </div>
//     )

// }














import Link from "next/link"
import Image from "next/image"

export default function Head() {
    return (
        <div>
            {/* Header */}
            <nav className="bg-[#727217] py-2 flex justify-between text-white">
                <span className="flex py-2 mx-4 hover:bg-yellow-500 hover:text-white rounded-2xl bg-gray-400 px-2 font-bold text-xl md:text-2xl">
                    <h1 className="text-2xl md:text-3xl">ABD</h1>
                </span>

                <ul className="flex flex-col md:flex-row text-white font-bold px-6 md:px-96 py-1 space-y-2 md:space-y-0 md:space-x-2">
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/">home</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/about">about</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/gallery">gallery</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/contact-us">contact us</Link>
                    </li>
                </ul>
            </nav>

            {/* Main Page */}
            <main className="bg-slate-300 py-20 md:py-40 pl-6 md:pl-24 flex flex-col md:flex-row">
                {/* Heading and Text */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-white font-bold text-4xl md:text-7xl">This is main page</h1>
                    <p className="text-gray font-bold py-5 w-full md:w-2/3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia odit
                        <br /> laudantium accusamus eveniet fugit asperiores cumque quis minima assumenda consequuntur iste modi iusto amet adipisci, blanditiis excepturi, quas saepe?
                    </p>

                    {/* Buttons */}
                    <div className="button text-xl md:text-2xl">
                        <button className="rounded-2xl bg-gray-500 text-white hover:bg-yellow-500 hover:text-black px-3 py-2 mx-2">click this</button>
                        <button className="rounded-2xl bg-gray-500 text-white hover:bg-yellow-500 hover:text-black px-3 py-2 mx-2">for more</button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 py-6 px-8">
                    <Image width={1100} height={500} src="/pi.jpg" alt="shoes" />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-green-900 py-10 md:py-14 text-white">
                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Explore</h2>
                        <ul>
                            <li><a href="#">facebook</a></li>
                            <li><a href="#">youtube</a></li>
                            <li><a href="#">whatsapp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">More about</h2>
                        <ul className="ml-4">
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Abdul Basit</h2>
                        <p className="mr-8">Copyright 2024 by Abdul Basit</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
