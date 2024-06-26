'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { arsenal } from './font'
import DownloadButton from './downloadButton'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function DatePicker() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedDay, setSelectedDay] = useState(new Date().getDate())

  const daysInMonth = (month: any, year: any) => new Date(year, month + 1, 0).getDate()

  const pathname = usePathname()

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11)
      setSelectedYear(selectedYear - 1)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0)
      setSelectedYear(selectedYear + 1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
  }

  const handleMonthChange = (e: any) => {
    setSelectedMonth(parseInt(e.target.value))
  }

  const handleYearChange = (e: any) => {
    setSelectedYear(parseInt(e.target.value))
  }

  const handleDayClick = (day: any) => {
    setSelectedDay(day)
  }

  return (
    <>
      <div className="space-y-0.5 flex flex-col justify-center items-center text-center w-fit m-0-auto bg-whiteSecondary rounded-lg py-8 ">
        <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
          <div className="col-span-1">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="size-8 flex justify-center items-center text-gray-800 hover:bg-greenPrimary hover:text-white rounded-full disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
          </div>

          <div className="col-span-3 flex justify-center items-center gap-x-1">
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={handleMonthChange}
                className="rounded-md bg-none p-2 bg-greenPrimary text-white relative flex text-nowrap w-full cursor-pointer text-start font-medium focus:outline-none"
              >
                {months.map((month, index) => (
                  <option key={index} value={index} className="p-2">
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-gray-800">/</span>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="rounded-md bg-none p-2 bg-greenPrimary text-white relative flex text-nowrap w-full cursor-pointer text-start font-medium focus:outline-none"
              >
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={selectedYear - 5 + index} className="p-2">
                    {selectedYear - 5 + index}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-1 flex justify-end">
            <button
              type="button"
              onClick={handleNextMonth}
              className="size-8 flex justify-center items-center text-gray-800 hover:bg-greenPrimary hover:text-white rounded-full disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="flex-shrink-0 size-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex pb-1.5">
          <span className="m-px w-10 block text-center text-sm text-gray-500">Mo</span>
          <span className="m-px w-10 block text-center text-sm text-gray-500">Tu</span>
          <span className="m-px w-10 block text-center text-sm text-gray-500">We</span>
          <span className="m-px w-10 block text-center text-sm text-gray-500">Th</span>
          <span className="m-px w-10 block text-center text-sm text-gray-500">Fr</span>
          <span className="m-px w-10 block text-center text-sm text-gray-500">Sa</span>
          <span className="m-px w-10 block text-center text-sm text-gray-500">Su</span>
        </div>

        {Array.from({ length: Math.ceil(daysInMonth(selectedMonth, selectedYear) / 7) }, (_, weekIndex) => (
          <div key={weekIndex} className="flex">
            {Array.from({ length: 7 }, (_, dayIndex) => {
              const day = weekIndex * 7 + dayIndex + 1
              return (
                <div key={dayIndex}>
                  <button
                    type="button"
                    className={`m-px size-10 flex justify-center items-center border border-transparent text-sm rounded-full ${
                      day <= daysInMonth(selectedMonth, selectedYear)
                        ? `hover:border-greenPrimary ${day === selectedDay ? 'bg-greenPrimary text-white' : ''}`
                        : 'text-black pointer-events-none'
                    }`}
                    onClick={() => handleDayClick(day)}
                    disabled={day > daysInMonth(selectedMonth, selectedYear)}
                  >
                    {day <= daysInMonth(selectedMonth, selectedYear) ? day : ''}
                  </button>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {pathname === '/unduhan/tataIbadah' && (
        <div className={arsenal.className}>
          <div className="flex flex-col sm:w-3/4 w-full sm:px-0 px-4 m-0-auto gap-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-center">
                <thead className="uppercase">
                  <tr className="grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                    <th scope="col" className="sm:px-6 px-0 py-2 border">
                      No
                    </th>
                    <th scope="col" className="sm:px-6 px-0 py-2 border ">
                      Tata Ibadah
                    </th>
                    <th scope="col" className="sm:px-6 px-0 py-2 border">
                      unduhan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" odd:bg-whiteSecondary grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                    <th scope="row" className="border sm:px-6 px-0 py-4 font-medium text-gray-900 ">
                      1
                    </th>
                    <td className="sm:px-6 px-0 py-4 border">
                      Tata Ibadah {selectedDay} {months[selectedMonth]} {selectedYear}
                    </td>
                    <td className="sm:px-6 px-0 py-2 border">
                      <DownloadButton />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {pathname === '/unduhan/wartaJemaat' && (
        <div className={arsenal.className}>
          <div className="flex flex-col  sm:w-3/4 w-full sm:px-0 px-4 m-0-auto gap-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-center">
                <thead className="uppercase">
                  <tr className="grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                    <th scope="col" className="sm:px-6 px-0 py-2 border">
                      No
                    </th>
                    <th scope="col" className="sm:px-6 px-0 py-2 border ">
                      Warta Jemaat
                    </th>
                    <th scope="col" className="sm:px-6 px-0 py-2 border">
                      unduhan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" odd:bg-whiteSecondary grid" style={{ gridTemplateColumns: '1fr 4fr 2fr' }}>
                    <th scope="row" className="border sm:px-6 px-0 py-4 font-medium text-gray-900 ">
                      1
                    </th>
                    <td className="sm:px-6 px-0 py-4 border">
                      Warta Jemaat {selectedDay} {months[selectedMonth]} {selectedYear}
                    </td>
                    <td className="sm:px-6 px-0 py-2 border">
                      <DownloadButton />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
