import { SignUp } from '@clerk/nextjs';
import React from 'react'

const page = () => {
  return <SignUp path="/sign-up" />;
}

export default page