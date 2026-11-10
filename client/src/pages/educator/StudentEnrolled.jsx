import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

const StudentEnrolled = () => {

  // Derive enrolled students from allCourses — same source as MyCourses and Dashboard
  // Previously this used dummyStudentEnrolled from assets.js, completely disconnected from real data
  const { allCourses } = useContext(AppContext)

  const enrolledStudents = []
  allCourses.forEach((course) => {
    course.enrolledStudents.forEach((studentId) => {
      enrolledStudents.push({
        student: {
          name: typeof studentId === 'string' ? `Student (${studentId})` : String(studentId),
          imageUrl: `https://placehold.co/36x36/e5e7eb/374151?text=${String(studentId)[0]?.toUpperCase() || 'S'}`,
        },
        courseTitle: course.courseTitle,
        purchaseDate: course.createdAt || new Date().toISOString(),
      })
    })
  })

  return (
    <div className='min-h-screen flex flex-col items-start md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <h2 className='pb-4 text-lg font-medium'>Students Enrolled</h2>
      <div className="flex flex-col max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
        <table className='table-fixed md:table-auto w-full overflow-hidden pb-4'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th className='px-4 py-3 font-semibold'>Student Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {enrolledStudents.length === 0 ? (
              <tr>
                <td colSpan={4} className='px-4 py-6 text-center text-gray-400'>
                  No students enrolled yet.
                </td>
              </tr>
            ) : (
              enrolledStudents.map((item, index) => (
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
                  <td className='px-4 py-3 hidden sm:table-cell'>
                    {new Date(item.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentEnrolled
