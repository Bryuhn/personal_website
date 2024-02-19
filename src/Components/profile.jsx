import React from 'react';
import ship from '../assets/ship.jpg';
import chart from '../assets/chart.png';

const profile = () => {
  return (
    <div className="relative z-30 mt-10 w-full ">
      <div
        className="mx-36 mb-32 mt-10 grid grid-cols-3 items-center justify-center gap-4
      rounded-xl p-3 shadow-lg shadow-black outline"
      >
        <div
          name="card 1"
          className="h-full w-full rounded-md bg-second p-5 shadow-md shadow-white
          outline outline-1 duration-150 ease-in-out hover:scale-[102%]"
        >
          <div className="col-span-2 flex justify-center py-2 text-xl font-bold text-white">
            <p>Position:</p>
          </div>
          <div name="card header" className=" grid h-12 grid-cols-2">
            <div>
              <p>Title:</p>
              <p className="text-white"> Surveyor</p>
            </div>
            <div>
              <p>Company:</p>
              <p className="text-white"> Freelance</p>
            </div>
            <div>
              <p>Location:</p>
              <p className="text-white"> Europe</p>
            </div>
            <div className="">
              <p>Period:</p>
              <p className="text-white"> August 2022-Current</p>
            </div>
            <hr className="col-span-2 p-2"></hr>
          </div>
          <div className="">
            <div className="flex h-full w-full justify-center p-2 font-bold text-white">
              <p>Overview</p>
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
          className="h-full w-full rounded-md bg-second p-5
          shadow-md shadow-white outline outline-1 duration-150 ease-in-out hover:scale-[102%]"
        >
          <div name="card header" className="grid grid-cols-2 outline-purple-600">
            <div className="col-span-2 flex justify-center py-2 text-xl font-bold text-white">
              <p>Sample Project:</p>
            </div>
            <div>
              <p>Company:</p>
              <p className="text-white"> MRE.ltd</p>
            </div>
            <div>
              <p>Site:</p>
              <p className="text-white"> SSE Windfarm GB</p>
            </div>
            <div className="">
              <p>Period:</p>
              <p className="text-white"> March 2023</p>
            </div>
            <div className="">
              <p>Project:</p>
              <p className="text-white"> Boulder Removal</p>
            </div>
            <hr className="col-span-2"></hr>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <p>Project Outline</p>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                Removal of boulders within a designated area in close proximately to the foundations of the wind
                turbines so that the installation of the power lines allong a planed route could be fited without the
                risk of delays due to damage to cable laying follow up ships.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <p>Processes</p>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                Due to the close proximity of the wind turbines bases, it was of primery concern that vessel positing
                and movement was of the utmost importance to avoid collisons with the sturcture. Acting as the online
                surveyor, I directed the movement of both the ship and the ROV via walkie talkies. Remote mirrored qinsy
                screens where setup in the bridge and the ROV command. Heading and distance was provided to bridge,
                under way projected target postion was given to ROV pilot. Upon target locatoin verification, photo
                imargy was taken of target on approach. Once ROV was in position, rov position was logged, bucket camera
                captured overhead view. Bucket was relased and contents where verifed prior to vessel movement to drop
                off zone. Grab scar was taken from ROV cameras and logged. Traget drop off location was taken, imagry of
                drop off site was captured.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <p>Software</p>
            </div>
            <div className="text-white">
              <p className="px-2text-white">
                Qinsy was used as the primary positioning software, linked up to the Bridge, ROV command and to the
                onboard client representive quartiers. DVR linked to the ROV was used for visual target location and
                capturing of photo imagery.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-2 font-bold text-white">
              <p>Outcome</p>
            </div>
            <div className="text-white">
              <br></br>
              <p className="px-2text-white">
                A total of 1572 target boulders where located and moved outside of the the cable route and buffer zone.
                An additional 104 targets where discoved and approved for removal by the onboard client representive.
              </p>
            </div>
          </div>
        </div>
        <div
          name="card 3"
          className="h-full w-full rounded-md bg-second p-5 shadow-md shadow-white outline
           outline-1 duration-150 ease-in-out hover:scale-[102%]"
        >
          <div className="text-font-bold col-span-2 flex justify-center py-2 text-lg font-bold">
            <p>Vessel:</p>
            <p className="text-white"> Aurara Rose</p>
          </div>
          <div>
            <img className="scale-80 rounded-md outline" alt="ship" src={ship}></img>
          </div>
          <div className="text-font-bold col-span-2 flex justify-center py-2 text-lg font-bold">
            <p>Site Location:</p>
            <p className=" text-white"> SSE Windfarm, Scotland, Great Britian</p>
          </div>
          <div>
            <img
              className="scale-80 rounded-md shadow-md shadow-black outline outline-third"
              alt="chart"
              src={chart}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
