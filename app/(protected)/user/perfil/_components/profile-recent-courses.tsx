import Separator from "@/components/separator";
import ProfileCardWrapper from "./profile-card-wrapper";
import { Spotlight } from "@/components/ui/Spotlight";

export default function RecentCourses(){
    
    return (
        <ProfileCardWrapper>
            <Spotlight 
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <div>
                <h1 className="text-3xl font-medium">Seguir Viendo..</h1>
                <Separator />
                
            </div>
        </ProfileCardWrapper>
    )
}