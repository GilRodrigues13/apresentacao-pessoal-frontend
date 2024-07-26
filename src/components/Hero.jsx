import profilePic from "../assets/GilProfile.png"

const Hero = () => {
  return (

     <div >
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-40 lg:text-8xl mx-8
                    ">Gil Rodrigues</h1>
                    <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-3xl tracking-tight text-transparent mx-14 -mt-10 
                    ">Front-End Developer</span>
                    
                </div>
            </div>
                  
                    <div className="w-full lg:w-1/2 lg:p-1 ">
                        <div className="flex  justify-center ">
                            <img src={profilePic} alt="Foto Pessoal"></img>
                        </div>
                    </div>
                   
        </div>
     </div>
    

  );
  
};

export default Hero;