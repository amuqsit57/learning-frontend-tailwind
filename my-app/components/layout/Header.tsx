import Image from "next/image";

export default function Header(){
    return(
        <>
        <header>
            <div className="bg-primary  ">
                {/* Logo */}
                <div className="div">
                    <Image 
                    src='/assets/logo.png'
                    width={20}
                    height={20}
                    alt="Logo"
                    />
                </div>
            </div>
        </header>
        </>
    )
}