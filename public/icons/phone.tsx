import React from 'react'
export default function Phone({ color = '#000000', ...props }) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_68_2248"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <path d="M0 0H24.2127V24.1117H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_68_2248)">
        <path
          d="M23.344 17.2238C20.8331 17.2238 18.4417 16.6797 16.2369 15.6069C16.0294 15.5036 15.7907 15.4916 15.5746 15.5674C15.3567 15.6433 15.1787 15.8016 15.0785 16.0066L13.7193 18.8083C10.2022 16.8538 7.29038 13.9556 5.32935 10.4531L8.14096 9.09621C8.34839 8.99623 8.50585 8.81893 8.582 8.60209C8.65622 8.38676 8.64249 8.149 8.54038 7.94245C7.46311 5.74686 6.91675 3.36538 6.91675 0.864797C6.91675 0.389699 6.52934 0.00390625 6.05206 0.00390625H0.864478C0.387401 0.00390625 0 0.38971 0 0.864797C0 13.6835 10.4718 24.1119 23.344 24.1119C23.8213 24.1119 24.2085 23.7261 24.2085 23.251V18.085C24.2085 17.6097 23.8213 17.2238 23.344 17.2238Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
