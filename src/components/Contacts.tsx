type propsDec={
    img: string
    name: string
    phone: string
    email: string
};


export default function Contacts({img, name, phone, email}: propsDec){
    
    return(
        <>
        <div className="ml-12">
            <article className="shadow-2xl basis-1/3 rounded-md p-8 h-80 w-90 pb-20 bg-white">
                <img src={img}
                  alt={`Photo of ${name}`} 
                  className="w-full h-40 align-center rounded-lg object-cover"
                  />
                  <h3 className="font-bold text-2xl">{name}</h3>
                  <div className="contacts-phone flex align-center my-4">
                    <img src="../../public/Zy0xNy5qcGc.png" alt="phone icon"
                    className="h-5 mr-3 mt-1" />
                    <p className=" text-xl text-textColorH">{phone}</p>
                  </div>

                  <div className="flex">
                    <img src="../../public/send-message-icon-svg-download-png-2637649.png"
                     alt="mail icon" 
                     className="h-7 mr-3"/>
                     <p className=" text-md text-textColorH">{email}</p>
                  </div>
            </article>
        </div>
        
        </>
    );
}