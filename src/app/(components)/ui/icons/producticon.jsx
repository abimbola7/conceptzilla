
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import "./icon.css"


const ProductIcon = (props) => {
  const timeline  = React.useRef()
  const container = React.useRef()
  
  const { context, contextSafe } = useGSAP(()=>{
    console.log("works??")
    timeline.current = gsap.timeline({
      defaults : {
      }
    }).to(".star", {
      duration : 1,
      transformOrigin : "50%  50%",
      rotate : 180,
      ease : "back.out",
      repeat : -1
    }, 0)
    .to(".star", {
      duration : 1.2,
      y : 20,
      repeat : -1,
      yoyo : true
    }, 0)
    // const reversed = timeline.current.reversed()
    // console.log(reversed)
    
  }, {
    scope : container
  })

  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={container}>
      <g clipPath="url(#clip0_55_494)">
        <path d="M0.785714 15.7144H0V88.0001H0.785714V15.7144Z" fill="#F9F6E0"/>
        <path d="M48.7144 79.3572H47.9287V88H48.7144V79.3572Z" fill="#F9F6E0"/>
        <path d="M47.9285 87.2144H0.785645V88.0001H47.9285V87.2144Z" fill="#F9F6E0"/>
        <path d="M17.2857 15.7144H0V16.5001H17.2857V15.7144Z" fill="#F9F6E0"/>
        <path d="M17.2857 20.4285H0V21.2142H17.2857V20.4285Z" fill="#F9F6E0"/>
        <path d="M18.0714 7.85718H17.2856V80.1429H18.0714V7.85718Z" fill="#F9F6E0"/>
        <path d="M65.9999 7.85718H17.2856V8.64289H65.9999V7.85718Z" fill="#F9F6E0"/>
        <path d="M65.2141 79.3572H18.0713V80.1429H65.2141V79.3572Z" fill="#F9F6E0"/>
        <path d="M66.0001 7.85718V51.3072L65.2144 51.8572V7.85718H66.0001Z" fill="#F9F6E0"/>
        <path d="M65.2144 61.4429L66.0001 61.9143V80.1429H65.2144V61.4429Z" fill="#F9F6E0"/>
        <path d="M65.2141 12.5715H18.0713V13.3572H65.2141V12.5715Z" fill="#F9F6E0"/>
        <path d="M17.2859 80.1429V24.3572H3.92871V84.0715H44.7859V80.1429H17.2859Z" fill="#F9F6E0"/>
        <path id='star'className='star' d="M50.207 0.942871L58.6927 19.4857L74.0927 29.5429L58.6927 39.6786L50.207 58.1429L41.7999 39.6786L26.3213 29.5429L41.7999 19.4857L50.207 0.942871Z" fill="#F9F6E0"/>
        <path d="M87.8428 56.3356L78.1 49.9713L72.7571 38.2642C72.6 38.0285 72.2071 38.0285 72.05 38.2642L66.7071 49.9713L66 50.3642L65.2143 50.9142L56.9643 56.3356C56.8857 56.4142 56.8071 56.4928 56.8071 56.6499C56.8071 56.807 56.8857 56.8856 56.9643 56.9642L65.2143 62.3856L66 62.9356L66.7071 63.407L72.05 75.1142C72.1286 75.2713 72.2857 75.3499 72.4428 75.3499C72.6 75.3499 72.7571 75.2713 72.7571 75.1142L78.1 63.407L87.8428 57.0428C87.9214 56.9642 88 56.8856 88 56.7285C88 56.5713 87.9214 56.3356 87.8428 56.3356ZM77.55 62.6999C77.4714 62.7785 77.4714 62.7785 77.3928 62.857L72.3643 73.857L67.3357 62.857C67.3357 62.7785 67.2571 62.6999 67.1786 62.6999L66 61.9142L65.2143 61.3642L57.9071 56.5713L65.2143 51.857L66 51.307L67.2571 50.5213C67.3357 50.4428 67.3357 50.4428 67.4143 50.3642L72.4428 39.3642L77.4714 50.3642C77.4714 50.4428 77.55 50.5213 77.6286 50.5213L86.9786 56.6499L77.55 62.6999Z" fill="#F9F6E0"/>
      </g>
    <defs>
    <clipPath id="clip0_55_494">
    <rect width="88" height="88" fill="red"/>
    </clipPath>
    </defs>
  </svg>

  // <svg width="280" height="80" version="1.1" xmlns="http://www.w3.org/2000/svg">
  //   <rect width={30} height={50} fill='none' stroke='#fff' x={0} y={20} />
  //   <circle r={20} fill='blue' stroke='#fff' cx={20} cy={20}/>
  //   {/* <ellipse cx="15" cy="15" rx={80} ry={20}/> */}
  // </svg>
  )
}

export default ProductIcon