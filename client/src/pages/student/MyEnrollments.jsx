import React, { useContext } from 'react'
// Bug fix 7: useContext, useState, AppContext were used but never imported
import { AppContext } from '../../context/context'
// Bug fix 8: Line is a named export from rc-progress, not a default export
import { Line } from 'rc-progress'
import Footer from '../../components/student/Footer'

const MyEnrollments = () => {

  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext)

  const progressArray = [
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 3, totalLectures: 9 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 4, totalLectures: 6 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 3 },
    { lectureCompleted: 2, totalLectures: 14 },
    { lectureCompleted: 2, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 8 },
    { lectureCompleted: 4, totalLectures: 5 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 2, totalLectures: 9 },
    { lectureCompleted: 5, totalLectures: 5 },
  ]

  return (
    <>
      <div className='md:px-36 px-8 pt-10'>
        <h1 className='text-2xl font-semibold'>My Enrollments Page</h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
          <thead className='text-gray-900 border-b bg-gray-500/20 text-sm text-left max-sm:hidden'>
            <tr>
              <th className='px-4 font-semibold truncate'>Course</th>
              <th className='px-4 font-semibold truncate'>Duration</th>
              <th className='px-4 font-semibold truncate'>Completed</th>
              <th className='px-4 font-semibold truncate'>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {enrolledCourses.map((course, index) => (
              <tr key={index} className='border-b bg-gray-500/20'>
                <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className='w-14 sm:w-24 md:w-28'
                    onError={e => { e.target.src = 'https://placehold.co/112x70/e5e7eb/374151?text=Course' }}
                  />
                  <div className="flex-1">
                    <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                    <Line
                      strokeWidth={2}
                      percent={
                        progressArray[index]
                          ? (progressArray[index].lectureCompleted / progressArray[index].totalLectures) * 100
                          : 0
                      }
                      className='bg-gray-300 rounded-full'
                    />
                  </div>
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {calculateCourseDuration(course)}
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {/* Bug fix 9: missing space before "Lectures" — added a space */}
                  {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures} `}
                  <span>Lectures</span>
                </td>
                <td className='px-4 py-3 max-sm:text-right'>
                  <button
                    className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-sm text-white'
                    onClick={() => navigate('/player/' + course._id)}
                  >
                    {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1
                      ? 'Completed'
                      : 'On Going'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default MyEnrollments
