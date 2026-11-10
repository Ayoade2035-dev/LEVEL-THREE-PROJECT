import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

const MyCourses = () => {

  // Read directly from context — no local state copy needed.
  // Previously this used a local 'courses' state populated in a useEffect with [],
  // which meant it never updated when new courses were added from AddCourse.
  const { currency, allCourses } = useContext(AppContext)

  return (
    <div className='min-h-screen flex flex-col items-start md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className="w-full">
        <h2 className='pb-4 text-lg font-medium'>My Courses</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className='w-full text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <thead>
              <tr>
                <th className='px-4 py-3 font-semibold truncate'>All Courses</th>
                <th className='px-4 py-3 font-semibold truncate'>Earnings</th>
                <th className='px-4 py-3 font-semibold truncate'>Students</th>
                <th className='px-4 py-3 font-semibold truncate'>Published On</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-500'>
              {allCourses.length === 0 ? (
                <tr>
                  <td colSpan={4} className='px-4 py-6 text-center text-gray-400'>
                    No courses yet. Go to Add Course to create one.
                  </td>
                </tr>
              ) : (
                allCourses.map((course) => (
                  <tr key={course._id} className='border-b border-gray-500/20'>
                    <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                      <img
                        src={course.courseThumbnail}
                        alt="Course"
                        className='w-16'
                        onError={e => { e.target.src = 'https://placehold.co/64x40/e5e7eb/374151?text=Course' }}
                      />
                      <span className='truncate hidden md:block'>{course.courseTitle}</span>
                    </td>
                    <td className='px-4 py-3'>
                      {currency}{Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}
                    </td>
                    <td className='px-4 py-3'>{course.enrolledStudents.length}</td>
                    <td className='px-4 py-3'>
                      {course.createdAt
                        ? new Date(course.createdAt).toLocaleDateString()
                        : 'N/A'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyCourses
