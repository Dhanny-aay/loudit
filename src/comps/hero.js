const Hero = () => {
    return ( 
        <>
        <div className=" md:px-7 w-full absolute top-0 -z-10 md:static">
            <div className=" w-full h-[100vh] md:h-[80vh] relative">
                <div className=" w-full h-full md:rounded-3xl bg-cover herobg relative">
                    <div className=" absolute left-4 md:left-10 lg:left-16 z-10 bottom-[15%] md:bottom-12 text-white">
                        <p className=" font-Lora text-base md:text-2xl font-semibold">Latest Post</p>
                        <p className=" font-Lora text-2xl leading-[35px] md:text-[40px] md:leading-[50px] font-semibold">Breaking Into Product Design:<br></br>Advice from Veek deisgn </p>
                        <p className=" font-Lora font-normal text-sm md:text-xl">Lets get one thing out of the way: you dont need  fancy bachelor’s degree to get into<br></br> product design. we sat down with victor to talk about gatekeeping product design and<br></br> how anyone can get into this growing industry.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;