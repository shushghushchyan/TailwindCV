import facebooklogo from './svgFiles/facebook.svg'
import twitterlogo from './svgFiles/twitter.svg'
import linkdinlogo from './/svgFiles/linkdin.svg'
import githublogo from './svgFiles/github.svg'

const Modal = () => {
  const socialLogos = [
    {
      name: "Twitter",
      url: "https://x.com/GhShushanna",
      svg: twitterlogo
    },
    {
      name: "Linkdin",
      url: "https://www.linkedin.com/in/shushanna-ghushchyan-a14261210/",
      svg: linkdinlogo
    },
    {
      name: "GitHub",
      url: "https://github.com/shushghushchyan",
      svg: githublogo
    },
    {
      name: "Facebook",
      svg: facebooklogo,
      url: "https://www.facebook.com/shushanna.ghushchyan"
    },
  ]

  return (
    <div>
      <div className=' flex justify-end'>  
        <div className="  flex justify-end w-10 text-4xl bg-red-300 fixed z-10"
      >
        <ul>
          {socialLogos.map((logo, index) => {
            return (
              <a key={index} href={logo.url}><img className='w-10' src={logo.svg}></img></a>
            )
          })}
        </ul>


      </div></div>

    </div>
  )
}

export default Modal
