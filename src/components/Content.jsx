import React from 'react';
import Modal from './Modal';

function Content() {

  const skills = [
    'HTML', 'CSS', 'TailWind CSS', 'Bootstrap', 'MUI', 'Javascript', 'React Js', 'figma', 'Adobe Photoshop'
  ]

  const divs = ["A1", "A2", "B1", "B2", "C1", "C2"]



  return (
    <div className='flex  flex-col	justify-center, scroll-p-4 w-screen h-screen bg-black border border-current	'>   
<header className='flex flex-col ml-[450px]'>
  <h1 className=" text-white scroll-p-500 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl pt-1">Shushanna Ghushchyan</h1>
  <h4 className="  text-white scroll-p-500 font-mono text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl pt-1">Frontend developer</h4>
  <h4 className="  text-white scroll-p-500 font-mono text-xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-2xl pt-1">shushannaghuchchyan20@gmail.com</h4>
  <h4 className="  text-white scroll-p-500 font-mono text-xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-2xl pt-1">+37477212177</h4>


</header>

  
      <div className='flex justify-around scroll m-20'>
        <div>
          <spam className=' text-whitetext-xl, font-extrabold, italic'>Skills</spam>
          <div className=' w-2/5,flex flex-row flex-wrap gap-2 pl-10, ' >
            <ul className=''>
              {skills.map((skill) => {
                return (
                  <li className=' font-mono text-xl'>{skill}</li>
                )
              })}

            </ul>
          </div>
        </div>

        <div>
          <spam className=' text-xl, font-extrabold, italic'> Education</spam>
          <div className='text-xl'>
            <p>  WebEx Technologies, Yerevan, Armenia /05/2024</p>
            <p>Website: <a href="https://webex.am/am">webex.am/am</a> </p>
            <p>Master of Geography, Geography,  /04/2015</p>
            <p>Website: <a href="https://www.ysu.am/">www.ysu.am</a></p></div>

        </div>
        <div>
          <spam className='text-xl, font-extrabold, italic'> Certefivates</spam>
          <div>
            <p>Sololearn - Introduction to Javascript</p>
            <a href="https://www.sololearn.com/certificates/CC-WEFWBC9D"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxR4VdIor_zDP6isLdkxjej-TMW3Cn63_6NQ&s" alt="ups" className='w-2/6' /></a></div>

        </div>
      </div>

      <div className='flex flex-col'>
        <spam className='text-xl, font-extrabold, italic, flex justify-start italic  pl-20'>Languages</spam>
        <div className=' flex flex-wrap justify-evenly mt-5'>
          <div className='flex '>
            <div className='flex '>
              <spam className='italic mr-2'>English</spam>
              {divs.map((div, index) => {
                return (
                  <div key={index}
                    className={`w-20 h-5 border-2 text-center flex items-center justify-center ${index < 3 ? 'bg-pink-500' : ''}`}>{div}</div>
                )
              })}
            </div>
          </div>
          <div className='flex '>
            <div className='flex justify-around  wrap '>
              <spam className='italic mr-2'>Russian</spam>
              {divs.map((div, index) => {
                return (
                  <div key={index}
                    className={`w-20 h-5 border-2 text-center flex items-center justify-center ${index < 4 ? 'bg-pink-500' : ''}`}>{div}</div>
                )
              })}
            </div>
            <div>
           
            </div>
            
          </div>
          
        </div></div>
        <Modal />
    </div>
  );
}

export default Content;
