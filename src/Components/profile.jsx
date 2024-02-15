import React from 'react';
import ship from '../assets/ship.jpg';
import chart from '../assets/chart.png';

const profile = () => {
  return (
    <div className="relative z-30 mt-10 w-full ">
      <div className="mx-36 mb-32 mt-10 grid grid-cols-3 items-center justify-center gap-4 rounded-xl p-3 shadow-lg shadow-black outline">
        <div
          name="card 1"
          className="h-full w-full rounded-md bg-second p-5 shadow-md shadow-white outline outline-1 duration-150 ease-in-out hover:scale-[102%]"
        >
          <div className="col-span-2 flex justify-center py-2 text-xl font-bold text-white">
            <a>Position:</a>
          </div>
          <div name="card header" className=" grid h-12 grid-cols-2">
            <div>
              <a>Title:</a>
              <a className="text-white"> Surveyor</a>
            </div>
            <div>
              <a>Company:</a>
              <a className="text-white"> Freelance</a>
            </div>
            <div>
              <a>Location:</a>
              <a className="text-white"> Europe</a>
            </div>
            <div className="">
              <a>Period:</a>
              <a className="text-white"> August 2022-Current</a>
            </div>
            <hr className="col-span-2 p-2"></hr>
          </div>
          <div className="">
            <div className="flex h-full w-full justify-center p-2 font-bold text-white">
              <a>Overview</a>
            </div>
            <br></br>
            <div className="text-white">
              <p className="px-2text-white">
                As an offshore surveyor, my role is a dynamic mix of challenges and rewards. Operating cutting-edge
                surveying equipment, including multibeam echosounders and ROVs, demands constant adaptation to evolving
                technology.
              </p>
              <br></br>
              <p className="px-2">
                Effective communication is paramount, collaborating closely with a multidisciplinary team of
                geophysicists, geologists, and engineers. Fieldwork, often in adverse conditions, requires resilience,
                but the satisfaction of overcoming challenges to complete a survey is unparalleled.{' '}
              </p>
              <br></br>
              <p className="px-2">
                Data analysis is a core responsibility, transforming raw data into meaningful insights. Navigating
                complex regulatory frameworks ensures compliance with international standards, emphasizing safety and
                environmental sustainability.
              </p>
              <br></br>
              <p className="px-2">
                Despite the challenges, the profession is gratifying. Contributing to infrastructure projects and
                offshore energy exploration provides a sense of accomplishment. The ever-evolving nature of technology
                and diverse projects keeps each day both challenging and rewarding, making offshore surveying a dynamic
                and fulfilling career choice.
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div
          name="card 2"
          className="h-full w-full rounded-md bg-second p-5 shadow-md shadow-white outline outline-1 duration-150 ease-in-out hover:scale-[102%]"
        >
          <div name="card header" className="grid grid-cols-2 outline-purple-600">
            <div className="col-span-2 flex justify-center py-2 text-xl font-bold text-white">
              <a>Sample Project:</a>
            </div>
            <div>
              <a>Company:</a>
              <a className="text-white"> MRE.ltd</a>
            </div>
            <div>
              <a>Site:</a>
              <a className="text-white"> SSE Windfarm GB</a>
            </div>
            <div className="">
              <a>Period:</a>
              <a className="text-white"> March 2023</a>
            </div>
            <div className="">
              <a>Project:</a>
              <a className="text-white"> Boulder Removal</a>
            </div>
            <hr className="col-span-2"></hr>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <a>Project Outline</a>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                Removal of boulders within a designated area in close proximately to the foundations of the wind
                turbines so that the installation of the power lines allong a planed route could be fited without the
                risk of delays due to damage to cable laying machines
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <a>Processes</a>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                Removal of boulders within a designated area in close proximately to the foundations of the wind
                turbines so that the installation of the power lines allong a planed route could be fited without the
                risk of delays due to damage to cable laying machines
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <a>Software</a>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                Removal of boulders within a designated area in close proximately to the foundations of the wind
                turbines so that the installation of the power lines allong a planed route could be fited without the
                risk of delays due to damage to cable laying machines
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <a>Outcome</a>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                Removal of boulders within a designated area in close proximately to the foundations of the wind
                turbines so that the installation of the power lines allong a planed route could be fited without the
                risk of delays due to damage to cable laying machines
              </p>
            </div>
          </div>
        </div>
        <div
          name="card 3"
          className="h-full w-full rounded-md bg-second p-5 shadow-md shadow-white outline outline-1 duration-150 ease-in-out hover:scale-[102%]"
        >
          <div className="text-font-bold col-span-2 flex justify-center py-2 text-lg font-bold">
            <a>Vessel:</a>
            <a className="text-white"> Aurara Rose</a>
          </div>
          <div>
            <img className="scale-80 rounded-md outline" src={ship}></img>
          </div>
          <div className="text-font-bold col-span-2 flex justify-center py-2 text-lg font-bold">
            <a>Site Location:</a>
            <a className=" text-white"> SSE Windfarm, Scotland, Great Britian</a>
          </div>
          <div>
            <img className="scale-80 rounded-md shadow-md shadow-black outline outline-third" src={chart}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
