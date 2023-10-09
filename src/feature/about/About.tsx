import { Button } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div className="sm:px-[10%] xl:px-[20%] px-5 py-24 text-blue-950">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-2/5 min-w-max pr-5 mb-10">
            <div>- NICE TO MEET YOU!</div>
            <div className="mt-3 text-2xl font-bold">Dang Hoang Anh Quan</div>
            <div className="font-bold mt-1">Frontend Developer</div>
            <Button variant="contained" size="large" className="mt-7">
              My Projects
            </Button>
          </div>
          <div className="flex flex-col lg:w-3/5">
            <div>
              Hello there! My name is{" "}
              <span className="text-red-600">Dang Hoang Anh Quan</span>. I am a
              web designer &amp; developer, and I&apos;m very passionate and
              dedicated to my work.
            </div>
            <div className="mt-8">
              With 20 years experience as a professional a graphic designer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </div>
            <div className="flex flex-wrap mt-10 gap-4 shrink-0">
              <div className="flex flex-col">
                <div className="underline underline-offset-2">AGE</div>
                <div className="font-bold">23</div>
              </div>
              <div className="flex flex-col">
                <div className="underline underline-offset-2">ADDRESS</div>
                <div className="font-bold">Ngu Hanh Son, Danang</div>
              </div>
              <div className="flex flex-col">
                <div className="underline underline-offset-2">MAIL</div>
                <div className="font-bold">quandha1009@gmail.com</div>
              </div>
              <div className="flex flex-col">
                <div className="underline underline-offset-2">PHONE</div>
                <div className="font-bold">0877617200</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-6 w-full">
            <div className="flex flex-col items-center justify-center py-20 bg-green-200 rounded">
              <div className="text-3xl font-bold">1+</div>
              <div>YEARS OF EXPERIENCE</div>
            </div>
            <div className="flex flex-col items-center justify-center py-20 bg-blue-200 rounded">
              <div className="text-3xl font-bold">5+</div>
              <div>PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About