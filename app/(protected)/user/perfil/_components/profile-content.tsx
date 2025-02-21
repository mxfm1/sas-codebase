'use client'

import CustomForm from '@/components/forms/custom-form'
import React from 'react'
import { User } from 'next-auth'
import ProfileAvatar from '@/components/avatar/profile-avatar'
import CustomFormInput from '@/components/forms/custom-formfield'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileSchema } from '@/lib/schemas/profile-schemas'
import { Mail, User2, UserCheckIcon } from 'lucide-react'

type ProfileContentProps = {
    user: User
}

const ProfileContent = ({
    user
}:ProfileContentProps) => { 

    const handleProfileUpdateLogic = async(data:any) => {

    }

  return (
    <>
        <div className="absolute top-14 left-10">
            <ProfileAvatar imageURL={user.image ?? null} />
        </div>

            <h1 className='text-2xl text-center'>Editar Perfil</h1>
        <CustomForm
            className='pt-10 px-20'
            submitLogic={handleProfileUpdateLogic}
            formButtonLabel='Editar..'
            formConfig={{
                defaultValues:{
                    name:user.name,
                    email: user.email

                },
                resolver: zodResolver(ProfileSchema)
            }}
            
        >
            <div className='flex items-center space-x-2'>
                <CustomFormInput name="name" type='text' icon={User2}/>
                <CustomFormInput name="email" type='email' icon={Mail}/>
            </div>
        </CustomForm>
    </>
   
  )
}

export default ProfileContent