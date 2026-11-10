import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyCourses } from '../assets/assets'
import humanizeDuration from 'humanize-duration'
import { AppContext } from './context'

export { AppContext }

const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY || '$'
  const navigate = useNavigate()

  const [allCourses, setAllCourses] = useState(dummyCourses)
  const [isEducator, setIsEducator] = useState(true)
  const [enrolledCourses, setEnrolledCourses] = useState(dummyCourses)

  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }

  // Function to calculate average rating of a course
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) return 0
    const totalRating = course.courseRatings.reduce((sum, r) => sum + r.rating, 0)
    return totalRating / course.courseRatings.length
  }

  // Function to calculate total duration of a chapter
  const calculateChapterTime = (chapter) => {
    const time = chapter.chapterContent.reduce((sum, lecture) => sum + lecture.lectureDuration, 0)
    return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
  }

  // Function to calculate total course duration
  // Bug fix: was using undeclared 'time' (missing let/var) and referenced undefined 'lecture' variable
  const calculateCourseDuration = (course) => {
    let time = 0
    course.courseContent.forEach((chapter) =>
      chapter.chapterContent.forEach((lecture) => { time += lecture.lectureDuration })
    )
    return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
  }

  // Function to calculate total number of lectures in a course
  // Bug fix: 'cousre' typo corrected to 'course'; extra space before .courseContent removed
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length
      }
    })
    return totalLectures
  }

  // Fetch user enrolled courses
  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourses(dummyCourses)
  }

  const value = {
    currency,
    allCourses,
    setAllCourses,
    fetchAllCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    enrolledCourses,
    fetchUserEnrolledCourses,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
