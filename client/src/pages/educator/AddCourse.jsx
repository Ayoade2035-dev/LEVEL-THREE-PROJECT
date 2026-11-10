import React, { useRef, useState, useEffect, useContext } from 'react'
import uniqid from 'uniqid'
import Quill from 'quill'
import assets from '../../assets/assets'
import { AppContext } from '../../context/context'

const AddCourse = () => {

  const { allCourses, setAllCourses, navigate } = useContext(AppContext)

  const quillRef = useRef(null)
  const editorRef = useRef(null)

  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [currentChapterId, setCurrentChapterId] = useState(null)

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  })

  // Bug fix 1: Quill theme was 'sno' — corrected to 'snow'
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      })
    }
  }, [])

  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:')
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        }
        setChapters([...chapters, newChapter])
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId))
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter
        )
      )
    }
  }

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId)
      setShowPopup(true)
    } else if (action === 'remove') {
      // Bug fix 2: was mutating state directly with splice — now returns a new array
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            return {
              ...chapter,
              chapterContent: chapter.chapterContent.filter((_, i) => i !== lectureIndex),
            }
          }
          return chapter
        })
      )
    }
  }

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder:
              chapter.chapterContent.length > 0
                ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
                : 1,
            lectureId: uniqid(),
          }
          // Bug fix 3: was mutating state directly with push — now spreads into a new array
          return { ...chapter, chapterContent: [...chapter.chapterContent, newLecture] }
        }
        return chapter
      })
    )
    setShowPopup(false)
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate required fields beyond the HTML required attribute
    if (!image) {
      alert('Please upload a course thumbnail.')
      return
    }
    if (chapters.length === 0) {
      alert('Please add at least one chapter.')
      return
    }

    // Read description from the Quill editor
    const courseDescription = quillRef.current
      ? quillRef.current.root.innerHTML
      : ''

    if (!courseDescription || courseDescription === '<p><br></p>') {
      alert('Please add a course description.')
      return
    }

    // Build the course data object
    const newCourse = {
      _id: uniqid(),
      courseTitle,
      courseDescription,
      coursePrice: Number(coursePrice),
      discount: Number(discount),
      courseContent: chapters,
      courseThumbnail: URL.createObjectURL(image),
      courseRatings: [],
      enrolledStudents: [],
      educator: { name: 'You' },
      createdAt: new Date().toISOString(),
      isPublished: true,
    }

    // Add the new course to the shared context so MyCourses and CoursesList update immediately
    setAllCourses([...allCourses, newCourse])

    alert(`Course "${courseTitle}" created successfully!`)

    // Reset the form
    setCourseTitle('')
    setCoursePrice(0)
    setDiscount(0)
    setImage(null)
    setChapters([])
    if (quillRef.current) quillRef.current.root.innerHTML = ''

    // Navigate to My Courses so the user can see the result
    navigate('/educator/my-courses')
  }

  return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-md w-full text-gray-500'>
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            type="text"
            onChange={e => setCourseTitle(e.target.value)}
            value={courseTitle}
            placeholder='Type here'
            className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500'
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              type="number"
              onChange={e => setCoursePrice(e.target.value)}
              value={coursePrice}
              placeholder='0'
              className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
              required
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className='flex items-center gap-3 cursor-pointer'>
              <img src={assets.file_upload_icon} alt="upload" className='p-3 bg-blue-500 rounded' />
              <input
                type="file"
                id="thumbnailImage"
                onChange={e => setImage(e.target.files[0])}
                accept='image/*'
                hidden
              />
              {image && (
                <img className='max-h-10' src={URL.createObjectURL(image)} alt="thumbnail preview" />
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p>Discount %</p>
          {/* Bug fix 4: 'md:pyu-2.5' typo corrected to 'md:py-2.5' */}
          <input
            type="number"
            onChange={e => setDiscount(e.target.value)}
            value={discount}
            placeholder='0'
            min={0}
            max={100}
            className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
            required
          />
        </div>

        {/* Chapters & Lectures */}
        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div className="bg-white border rounded-lg mb-4" key={chapter.chapterId}>
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  {/* Bug fix 5: was calling handleLecture for toggle — corrected to handleChapter */}
                  <img
                    onClick={() => handleChapter('toggle', chapter.chapterId)}
                    src={assets.dropdown_icon}
                    alt="toggle"
                    width={14}
                    className={`mr-2 cursor-pointer transition-all ${chapter.collapsed ? '-rotate-90' : ''}`}
                  />
                  <span className='font-semibold'>{chapterIndex + 1}. {chapter.chapterTitle}</span>
                </div>
                <span className='text-gray-500'>{chapter.chapterContent.length} Lectures</span>
                {/* Bug fix 6: was calling handleLecture('remove ', ...) with a trailing space — corrected to handleChapter('remove', ...) */}
                <img
                  onClick={() => handleChapter('remove', chapter.chapterId)}
                  src={assets.cross_icon}
                  alt="remove chapter"
                  className='cursor-pointer'
                />
              </div>

              {!chapter.collapsed && (
                <div className="p-4">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div key={lecture.lectureId} className="flex justify-between items-center mb-2">
                      <span>
                        {lectureIndex + 1}. {lecture.lectureTitle} - {lecture.lectureDuration} mins -{' '}
                        <a href={lecture.lectureUrl} target='_blank' rel='noreferrer' className='text-blue-500'>Link</a>{' '}
                        - {lecture.isPreviewFree ? 'Free Preview' : 'Paid'}
                      </span>
                      <img
                        src={assets.cross_icon}
                        alt="remove lecture"
                        onClick={() => handleLecture('remove', chapter.chapterId, lectureIndex)}
                        className='cursor-pointer'
                      />
                    </div>
                  ))}
                  <div
                    className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2"
                    onClick={() => handleLecture('add', chapter.chapterId)}
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          <div
            className="flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer"
            onClick={() => handleChapter('add')}
          >
            + Add Chapter
          </div>
        </div>

        <button type="submit" className='bg-black text-white w-max py-2.5 px-8 rounded my-4'>
          ADD
        </button>
      </form>

      {/* Add Lecture Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-80">
            <h2 className='text-lg font-semibold mb-4'>Add Lecture</h2>

            <div className="mb-2">
              <p>Lecture Title</p>
              <input
                type="text"
                className='mt-1 block w-full border rounded py-1 px-2'
                value={lectureDetails.lectureTitle}
                onChange={e => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })}
              />
            </div>

            <div className="mb-2">
              <p>Duration (minutes)</p>
              <input
                type="number"
                className='mt-1 block w-full border rounded py-1 px-2'
                value={lectureDetails.lectureDuration}
                onChange={e => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })}
              />
            </div>

            {/* Bug fix 7: lectureUrl input was completely missing from the popup */}
            <div className="mb-2">
              <p>Lecture URL</p>
              <input
                type="url"
                className='mt-1 block w-full border rounded py-1 px-2'
                value={lectureDetails.lectureUrl}
                onChange={e => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })}
                placeholder='https://...'
              />
            </div>

            <div className="flex items-center gap-2 my-4">
              <input
                type="checkbox"
                className="scale-125"
                checked={lectureDetails.isPreviewFree}
                onChange={e => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })}
              />
              <p>Free Preview</p>
            </div>

            <button
              type='button'
              className='w-full bg-blue-400 text-white px-4 py-2 rounded'
              onClick={addLecture}
            >
              Add
            </button>

            <img
              onClick={() => setShowPopup(false)}
              src={assets.cross_icon}
              className='absolute top-4 right-4 w-4 cursor-pointer'
              alt="close"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCourse
