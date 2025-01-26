"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function SignInButton() {
  const CreateUser = useMutation(api.users.CreateUser);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("Google Token Response:", tokenResponse);
        
        const userInfoResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${tokenResponse?.access_token}` } }
        );

        console.log("User Info:", userInfoResponse.data);
        const user = userInfoResponse.data;

        // Save to Convex DB
        const result = await CreateUser({
          name: user?.name,
          email: user?.email,
          picture: user?.picture
        });

        const userDetail={
          ...user,
          _id: result?.id?.result
        }
        if (typeof window !== undefined) {
          localStorage.setItem('userDetail', JSON.stringify(userDetail));
        }

        console.log("User successfully created in Convex DB.");
      } catch (error) {
        console.error("Error in Google Sign-In:", error);
      }
    },
    onError: (errorResponse) => console.error("Google login failed:", errorResponse),
  });

  return (
    <div>
      <Button onClick={googleLogin}>Get Started</Button>
    </div>
  );
}

export default SignInButton;
