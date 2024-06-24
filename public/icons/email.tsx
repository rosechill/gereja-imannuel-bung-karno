import React from 'react'
export default function Email({ color = '#000000', ...props }) {
  return (
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.2503 6.06463L13.99 0.94157C12.7963 0.281195 11.3447 0.281195 10.151 0.94157L0.890746 6.06463C0.685306 6.1784 0.514183 6.34466 0.395039 6.54608C0.275895 6.74774 0.213135 6.97747 0.213135 7.21158V18.2472C0.213135 19.2911 0.629412 20.2924 1.37075 21.0304C2.11189 21.7686 3.11725 22.1832 4.16553 22.1832H19.9749C21.0232 22.1832 22.0286 21.7687 22.7697 21.0304C23.511 20.2923 23.9273 19.2911 23.9273 18.2472V7.21158C23.9273 6.97745 23.8645 6.74771 23.7454 6.54608C23.6262 6.34466 23.4551 6.1784 23.2497 6.06463H23.2503ZM20.417 11.2558L12.5123 15.1919C12.2345 15.3303 11.9075 15.3303 11.6297 15.1919L3.72507 11.2558C3.4907 11.1394 3.31223 10.9348 3.22912 10.6872C3.14626 10.4397 3.16538 10.1696 3.28232 9.93596C3.3995 9.70256 3.6047 9.52508 3.85329 9.44231C4.10188 9.35979 4.37328 9.37884 4.60767 9.49529L12.0711 13.2116L19.5346 9.49529C19.769 9.37884 20.0404 9.35979 20.289 9.44231C20.5376 9.52508 20.743 9.70257 20.86 9.93596C20.9769 10.1696 20.996 10.4396 20.9132 10.6872C20.8301 10.9348 20.6518 11.1394 20.4172 11.2558H20.417Z"
        fill={color}
      />
    </svg>
  )
}
