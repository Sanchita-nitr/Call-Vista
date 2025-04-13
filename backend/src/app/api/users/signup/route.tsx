import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextResponse, NextRequest } from 'next/server'
import bcryptjs from 'bcryptjs'


connect()

export async function  POST(requet: NextRequest) {
    try{
        const reqBody = await requet.json()
        const {firstName, lastName, email, password, confirmPassword} = reqBody

        console.log(reqBody)
        // if(!firstName || !lastName || !email || !password || !confirmPassword){
        //     return NextResponse.json({message: "Please fill all the fields"}, {status: 400})
        // }
        // if(password !== confirmPassword){
        //     return NextResponse.json({message: "Passwords do not match"}, {status: 400})
        // }

      const user =  await User.findOne({email})

      if(user){
        return NextResponse.json({message: "User already exists"}, {status: 400})
      }

      const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

       const newUser = await new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
            
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    }
    catch(error: any){
        return NextResponse.json({message: error.message}, {status: 500})
    }
}