'use client'
import React from 'react';
import { Brands } from '@/components/Brands';
import { ProblemSolved } from '@/components/ProblemsSolved';
import { ProfileView } from '@/components/ProfileView';

export default function Home() {

  return (
    <>
      <div className='container'>
        <ProfileView />
      </div>
      <Brands />
      <div className='container'>
        <ProblemSolved />
      </div>
    </>
  );
}
