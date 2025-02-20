import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type ProfileAvatarProps = {
    imageURL?:string;
}

export default function ProfileAvatar({
    imageURL
}:ProfileAvatarProps){
    return (
        <Avatar>
            <AvatarFallback className=""/>
            <AvatarImage src={imageURL ? imageURL : "/profile.png"} className="w-32 h-32"/>
        </Avatar>
    )
}