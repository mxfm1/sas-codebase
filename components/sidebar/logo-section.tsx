import Image from "next/image";
import Link from "next/link";

type LogoSectionProps = {
    logoURL: string;
    brandName?:string;
    width?:number;
    height?:number
}

export default function LogoSection({
    logoURL,
    brandName,
    width=50,
    height=50
}:LogoSectionProps){
    return (
        <Link
            href="/"
        >
            <section className="flex items-center justify-center p-4 space-x-3">
            <Image 
                src={logoURL}
                alt="logo-image"
                width={width}
                height={height}
            />
            {brandName && (
                <h2 className="text-lg font-semibold text-slate-600 hidden md:block">{brandName}</h2>
            )}
        </section>  
        </Link>
    )
}