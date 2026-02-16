
export default function Contacts(){
    return(
        <>
        <div className="ml-12 flex basis-1/3">
            <article className="shadow-2xl rounded-md p-8 h-80 w-90 pb-20 bg-white">
                <img src="../../public/cats/Cat Wallpaper.jpg"
                  alt="Photo of Mr. Whiskerson" 
                  className="w-full h-40 align-center rounded-lg object-cover"
                  />
                  <h3 className="font-bold text-2xl">Mr. Whiskerson</h3>
                  <div className="contacts-phone flex align-center my-4">
                    <img src="../../public/Zy0xNy5qcGc.png" alt="phone icon"
                    className="h-5 mr-3 mt-1" />
                    <p className=" text-xl text-textColorH">(212) 555-1234</p>
                  </div>

                  <div className="flex">
                    <img src="../../public/send-message-icon-svg-download-png-2637649.png"
                     alt="mail icon" 
                     className="h-7 mr-3"/>
                     <p className=" text-md text-textColorH">mr.whiskaz@catnap.meow</p>
                  </div>
            </article>
        </div>
        
        </>
    );
}