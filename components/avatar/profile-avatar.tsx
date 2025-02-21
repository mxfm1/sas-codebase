import Image from "next/image";

type ProfileAvatarProps = {
    imageURL:string | null;
    width?:number;
    height?:number;
}

export default function ProfileAvatar({
    imageURL,
    width=80,
    height=80
}:ProfileAvatarProps){

    const getProfileImage = (imageURL:string | null) => {
        return imageURL ? imageURL : "/new-profile.png"
    }

    return (
        <Image 
            src={getProfileImage(imageURL)}
            alt="profile-image"
            width={width}
            height={height}
            className=" object-cover rounded-full"
        />
    )
}