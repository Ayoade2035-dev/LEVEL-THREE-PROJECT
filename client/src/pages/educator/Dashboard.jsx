import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import assets from '../../assets/assets'

const Dashboard = () => {

  const { currency, allCourses } = useContext(AppContext)

  // Derive stats directly from the same data AddCourse and MyCourses use
  const totalCourses = allCourses.length

  const totalEarnings = allCourses.reduce((sum, course) => {
    const price = course.coursePrice - (course.discount * course.coursePrice / 100)
    return sum + Math.floor(course.enrolledStudents.length * price)
  }, 0)

  // Build the latest enrollments list from allCourses — same source as MyCourses
  const latestEnrollments = []
  allCourses.forEach((course) => {
    course.enrolledStudents.forEach((studentId) => {
      latestEnrollments.push({
        studentId,
        courseTitle: course.courseTitle,
        // Real student details would come from a users API — use placeholder for now
        student: {
          name: typeof studentId === 'string' ? `Student (${studentId})` : studentId,
          imageUrl: `https://placehold.co/36x36/e5e7eb/374151?text=${String(studentId)[0]?.toUpperCase() || 'S'}`,
        },
      })
    })
  })

  return (
    <div className='min-h-screen flex flex-col items-start gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className="space-y-5 w-full">

        {/* Stats cards — derived from allCourses, same data as MyCourses */}
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt="total courses" />
            <div>
              <p className="text-2xl font-medium text-gray-600">{totalCourses}</p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt="total earnings" />
            <div>
              <p className="text-2xl font-medium text-gray-600">{currency}{totalEarnings}</p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.person_tick_icon} alt="total students" />
            <div>
              <p className="text-2xl font-medium text-gray-600">{latestEnrollments.length}</p>
              <p className="text-base text-gray-500">Total Students</p>
            </div>
          </div>
        </div>

        {/* Latest enrollments — built from allCourses, same source as StudentEnrolled */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="flex flex-col max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className='table-fixed md:table-auto w-full overflow-hidden'>
              <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold'>Student</th>
                  <th className='px-4 py-3 font-semibold'>Course Title</th>
                </tr>
              </thead>
              <tbody className='text-sm text-gray-500'>
                {latestEnrollments.length === 0 ? (
                  <tr>
                    <td colSpan={3} className='px-4 py-6 text-center text-gray-400'>
                      No enrollments yet.
                    </td>
                  </tr>
                ) : (
                  latestEnrollments.slice(0, 10).map((item, index) => (
                    <tr key={index} className='border-b border-gray-500/20'>
                      <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                      <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                        <img
                          src={item.student.imageUrl}
                          alt={item.student.name}
                          className='w-9 h-9 rounded-full'
                          onError={e => { e.target.src = 'https://placehold.co/36x36/e5e7eb/374151?text=S' }}
                        />
                        <span className='truncate'>{item.student.name}</span>
                      </td>
                      <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
