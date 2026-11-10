// Asset imports — maps clean names to the actual files in this folder
import logo from './imgi_1_logo-eRVar-dC.svg'
import logo_dark from './imgi_20_logo_dark-DhHUCRAu.svg'
import sketch from './imgi_3_sktech-Jz2slE9Q.svg'
import microsoft_logo from './imgi_5_microsoft_logo-CJCILJpU.svg'
import walmart_logo from './imgi_6_walmart_logo-DFg_e5_v.svg'
import accenture_logo from './imgi_7_accenture_logo-C2wm6fZ5.svg'
import adobe_logo from './imgi_8_adobe_logo-C7DVnuZE.svg'
import paypal_logo from './imgi_9_paypal_logo-Y0aMXISO.svg'
import profile_img_1 from './imgi_16_profile_img_1-Dt6tBN4k.png'
import profile_img_2 from './imgi_17_profile_img_2-CfNsyPT4.png'
import profile_img_3 from './imgi_18_profile_img_3-Com7-0_V.png'

// Placeholders for assets that are missing from the project
export const star = 'https://placehold.co/20x20/f59e0b/f59e0b?text=.'
export const star_blank = 'https://placehold.co/20x20/d1d5db/d1d5db?text=.'
export const arrow_icon = 'https://placehold.co/16x16/1d4ed8/1d4ed8?text=>'
export const search_icon = 'https://placehold.co/24x24/6b7280/6b7280?text=Q'
export const user_icon = 'https://placehold.co/32x32/6b7280/ffffff?text=U'
export const file_upload_icon = 'https://placehold.co/24x24/3b82f6/ffffff?text=U'
export const dropdown_icon = 'https://placehold.co/14x14/6b7280/6b7280?text=v'
export const cross_icon = 'https://placehold.co/16x16/6b7280/6b7280?text=x'
export const appointments_icon = 'https://placehold.co/40x40/3b82f6/ffffff?text=C'
export const earning_icon = 'https://placehold.co/40x40/10b981/ffffff?text=$'
export const profile_img = 'https://placehold.co/32x32/6b7280/ffffff?text=P'
export const down_arrow_icon = 'https://placehold.co/14x14/6b7280/6b7280?text=v'
export const play_icon = 'https://placehold.co/16x16/3b82f6/ffffff?text=>'
export const time_left_clock_icon = 'https://placehold.co/16x16/ef4444/ffffff?text=T'
export const time_clock_icon = 'https://placehold.co/16x16/6b7280/ffffff?text=T'
export const lesson_icon = 'https://placehold.co/16x16/6b7280/ffffff?text=L'
export const blue_tick_icon = 'https://placehold.co/16x16/3b82f6/ffffff?text=✓'
export const home_icon = 'https://placehold.co/24x24/6b7280/ffffff?text=H'
export const add_icon = 'https://placehold.co/24x24/6b7280/ffffff?text=+'
export const my_course_icon = 'https://placehold.co/24x24/6b7280/ffffff?text=C'
export const person_tick_icon = 'https://placehold.co/24x24/6b7280/ffffff?text=S'
export const facebook_icon = 'https://placehold.co/24x24/1d4ed8/ffffff?text=f'
export const twitter_icon = 'https://placehold.co/24x24/0ea5e9/ffffff?text=t'
export const instagram_icon = 'https://placehold.co/24x24/ec4899/ffffff?text=i'

export const assets = {
  logo,
  logo_dark,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  star,
  star_blank,
  arrow_icon,
  search_icon,
  user_icon,
  file_upload_icon,
  dropdown_icon,
  cross_icon,
  appointments_icon,
  earning_icon,
  profile_img,
  down_arrow_icon,
  play_icon,
  time_left_clock_icon,
  time_clock_icon,
  lesson_icon,
  blue_tick_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
}

export default assets

// ---------------------------------------------------------------------------
// Dummy data — used as placeholder until the backend is wired up
// ---------------------------------------------------------------------------

export const dummyCourses = [
  {
    _id: 'course1',
    courseTitle: 'Complete Web Development Bootcamp',
    courseDescription: '<p>Learn HTML, CSS, JavaScript, React, Node.js and more. Build real-world projects from scratch and become a full-stack developer.</p>',
    courseThumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Web+Dev',
    coursePrice: 99,
    discount: 20,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch1',
        chapterTitle: 'Getting Started',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l1', lectureTitle: 'Introduction', lectureDuration: 5, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l2', lectureTitle: 'Setting Up Your Environment', lectureDuration: 10, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
      {
        chapterId: 'ch2',
        chapterTitle: 'HTML & CSS Fundamentals',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l3', lectureTitle: 'HTML Structure', lectureDuration: 12, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l4', lectureTitle: 'CSS Styling', lectureDuration: 15, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l5', lectureTitle: 'Flexbox & Grid', lectureDuration: 20, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u1', rating: 5 }, { userId: 'u2', rating: 4 }, { userId: 'u3', rating: 5 }],
    educator: { name: 'John Smith' },
    enrolledStudents: ['u1', 'u2', 'u3', 'u4', 'u5'],
  },
  {
    _id: 'course2',
    courseTitle: 'Python for Data Science',
    courseDescription: '<p>Master Python, Pandas, NumPy, and machine learning fundamentals. Work with real datasets and build predictive models.</p>',
    courseThumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Python',
    coursePrice: 79,
    discount: 10,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch3',
        chapterTitle: 'Python Basics',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l6', lectureTitle: 'Variables & Data Types', lectureDuration: 8, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l7', lectureTitle: 'Control Flow', lectureDuration: 10, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
      {
        chapterId: 'ch4',
        chapterTitle: 'Data Analysis with Pandas',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l8', lectureTitle: 'DataFrames', lectureDuration: 14, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l9', lectureTitle: 'Data Cleaning', lectureDuration: 18, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u3', rating: 4 }, { userId: 'u4', rating: 5 }],
    educator: { name: 'Jane Doe' },
    enrolledStudents: ['u1', 'u3'],
  },
  {
    _id: 'course3',
    courseTitle: 'UI/UX Design Masterclass',
    courseDescription: '<p>Learn the principles of user interface and user experience design. Master Figma, wireframing, prototyping, and design systems.</p>',
    courseThumbnail: 'https://placehold.co/600x400/8b5cf6/ffffff?text=UI+UX',
    coursePrice: 89,
    discount: 15,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch5',
        chapterTitle: 'Design Principles',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l10', lectureTitle: 'What is UX?', lectureDuration: 7, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l11', lectureTitle: 'Color Theory', lectureDuration: 11, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l12', lectureTitle: 'Typography', lectureDuration: 9, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
      {
        chapterId: 'ch6',
        chapterTitle: 'Figma Essentials',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l13', lectureTitle: 'Figma Interface', lectureDuration: 13, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l14', lectureTitle: 'Building a Prototype', lectureDuration: 22, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u1', rating: 5 }, { userId: 'u5', rating: 4 }, { userId: 'u6', rating: 5 }],
    educator: { name: 'Sarah Lee' },
    enrolledStudents: ['u1', 'u2', 'u5', 'u6'],
  },
  {
    _id: 'course4',
    courseTitle: 'React & Next.js: Zero to Pro',
    courseDescription: '<p>Build modern, performant web apps with React 18 and Next.js 14. Covers hooks, server components, SSR, and deployment.</p>',
    courseThumbnail: 'https://placehold.co/600x400/06b6d4/ffffff?text=React',
    coursePrice: 109,
    discount: 25,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch7',
        chapterTitle: 'React Fundamentals',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l15', lectureTitle: 'JSX & Components', lectureDuration: 10, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l16', lectureTitle: 'useState & useEffect', lectureDuration: 16, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l17', lectureTitle: 'Context API', lectureDuration: 14, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
      {
        chapterId: 'ch8',
        chapterTitle: 'Next.js Deep Dive',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l18', lectureTitle: 'App Router', lectureDuration: 18, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l19', lectureTitle: 'Server Components', lectureDuration: 20, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u2', rating: 5 }, { userId: 'u4', rating: 5 }, { userId: 'u7', rating: 4 }],
    educator: { name: 'John Smith' },
    enrolledStudents: ['u1', 'u2', 'u4', 'u7', 'u8'],
  },
  {
    _id: 'course5',
    courseTitle: 'Node.js & Express Backend Development',
    courseDescription: '<p>Build scalable REST APIs with Node.js, Express, and MongoDB. Covers authentication, middleware, and cloud deployment.</p>',
    courseThumbnail: 'https://placehold.co/600x400/16a34a/ffffff?text=Node.js',
    coursePrice: 94,
    discount: 0,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch9',
        chapterTitle: 'Node.js Core',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l20', lectureTitle: 'Node.js Architecture', lectureDuration: 9, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l21', lectureTitle: 'Modules & NPM', lectureDuration: 11, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
      {
        chapterId: 'ch10',
        chapterTitle: 'REST APIs with Express',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l22', lectureTitle: 'Routing', lectureDuration: 13, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l23', lectureTitle: 'Middleware', lectureDuration: 15, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l24', lectureTitle: 'JWT Authentication', lectureDuration: 20, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u3', rating: 5 }, { userId: 'u5', rating: 4 }, { userId: 'u8', rating: 4 }],
    educator: { name: 'Michael Brown' },
    enrolledStudents: ['u2', 'u3', 'u5'],
  },
  {
    _id: 'course6',
    courseTitle: 'Machine Learning A-Z',
    courseDescription: '<p>From linear regression to neural networks, this course covers all major ML algorithms with hands-on Python projects.</p>',
    courseThumbnail: 'https://placehold.co/600x400/f59e0b/ffffff?text=ML',
    coursePrice: 119,
    discount: 30,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch11',
        chapterTitle: 'Supervised Learning',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l25', lectureTitle: 'Linear Regression', lectureDuration: 17, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l26', lectureTitle: 'Logistic Regression', lectureDuration: 16, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l27', lectureTitle: 'Decision Trees', lectureDuration: 19, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
      {
        chapterId: 'ch12',
        chapterTitle: 'Neural Networks',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l28', lectureTitle: 'Intro to Deep Learning', lectureDuration: 22, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l29', lectureTitle: 'Building a Neural Net', lectureDuration: 25, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u1', rating: 5 }, { userId: 'u6', rating: 5 }, { userId: 'u9', rating: 4 }],
    educator: { name: 'Jane Doe' },
    enrolledStudents: ['u1', 'u4', 'u6', 'u9'],
  },
  {
    _id: 'course7',
    courseTitle: 'iOS App Development with Swift',
    courseDescription: '<p>Learn to build native iOS apps using Swift and SwiftUI. Deploy your app to the App Store from scratch.</p>',
    courseThumbnail: 'https://placehold.co/600x400/ef4444/ffffff?text=Swift',
    coursePrice: 104,
    discount: 10,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch13',
        chapterTitle: 'Swift Basics',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l30', lectureTitle: 'Swift Syntax', lectureDuration: 10, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l31', lectureTitle: 'Optionals & Closures', lectureDuration: 13, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
      {
        chapterId: 'ch14',
        chapterTitle: 'SwiftUI',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l32', lectureTitle: 'Views & Modifiers', lectureDuration: 15, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l33', lectureTitle: 'State & Binding', lectureDuration: 18, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l34', lectureTitle: 'Navigation & Lists', lectureDuration: 14, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u2', rating: 4 }, { userId: 'u7', rating: 5 }],
    educator: { name: 'Emily Chen' },
    enrolledStudents: ['u2', 'u7'],
  },
  {
    _id: 'course8',
    courseTitle: 'DevOps & CI/CD with Docker & Kubernetes',
    courseDescription: '<p>Master containerization, orchestration, and automated pipelines. Deploy production-grade apps using Docker, Kubernetes, and GitHub Actions.</p>',
    courseThumbnail: 'https://placehold.co/600x400/0ea5e9/ffffff?text=DevOps',
    coursePrice: 129,
    discount: 20,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch15',
        chapterTitle: 'Docker Fundamentals',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l35', lectureTitle: 'Containers vs VMs', lectureDuration: 8, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l36', lectureTitle: 'Dockerfile', lectureDuration: 12, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l37', lectureTitle: 'Docker Compose', lectureDuration: 16, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
      {
        chapterId: 'ch16',
        chapterTitle: 'Kubernetes',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l38', lectureTitle: 'Pods & Deployments', lectureDuration: 20, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l39', lectureTitle: 'Services & Ingress', lectureDuration: 18, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u5', rating: 5 }, { userId: 'u8', rating: 4 }, { userId: 'u9', rating: 5 }],
    educator: { name: 'Michael Brown' },
    enrolledStudents: ['u3', 'u5', 'u8', 'u9'],
  },
  {
    _id: 'course9',
    courseTitle: 'Graphic Design for Beginners',
    courseDescription: '<p>Learn Adobe Photoshop and Illustrator from the ground up. Create logos, social media graphics, and print designs professionally.</p>',
    courseThumbnail: 'https://placehold.co/600x400/ec4899/ffffff?text=Design',
    coursePrice: 69,
    discount: 5,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch17',
        chapterTitle: 'Photoshop Basics',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l40', lectureTitle: 'Interface Overview', lectureDuration: 8, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l41', lectureTitle: 'Layers & Masks', lectureDuration: 14, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
      {
        chapterId: 'ch18',
        chapterTitle: 'Illustrator Essentials',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l42', lectureTitle: 'Vector Graphics', lectureDuration: 12, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l43', lectureTitle: 'Logo Design', lectureDuration: 20, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u6', rating: 4 }, { userId: 'u10', rating: 5 }],
    educator: { name: 'Sarah Lee' },
    enrolledStudents: ['u6', 'u10'],
  },
  {
    _id: 'course10',
    courseTitle: 'SQL & Database Design',
    courseDescription: '<p>Master relational databases, SQL queries, joins, indexing, and database design patterns with PostgreSQL and MySQL.</p>',
    courseThumbnail: 'https://placehold.co/600x400/64748b/ffffff?text=SQL',
    coursePrice: 74,
    discount: 0,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch19',
        chapterTitle: 'SQL Fundamentals',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l44', lectureTitle: 'SELECT Queries', lectureDuration: 10, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l45', lectureTitle: 'Filtering & Sorting', lectureDuration: 9, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l46', lectureTitle: 'Joins', lectureDuration: 17, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
      {
        chapterId: 'ch20',
        chapterTitle: 'Database Design',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l47', lectureTitle: 'Normalization', lectureDuration: 14, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l48', lectureTitle: 'Indexing & Performance', lectureDuration: 16, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u1', rating: 4 }, { userId: 'u3', rating: 4 }, { userId: 'u7', rating: 5 }],
    educator: { name: 'Michael Brown' },
    enrolledStudents: ['u1', 'u3', 'u7'],
  },
  {
    _id: 'course11',
    courseTitle: 'Cybersecurity Fundamentals',
    courseDescription: '<p>Understand network security, ethical hacking basics, cryptography, and how to protect web applications from common vulnerabilities.</p>',
    courseThumbnail: 'https://placehold.co/600x400/1e293b/ffffff?text=Security',
    coursePrice: 114,
    discount: 15,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch21',
        chapterTitle: 'Network Security',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l49', lectureTitle: 'TCP/IP Basics', lectureDuration: 11, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l50', lectureTitle: 'Firewalls & VPNs', lectureDuration: 15, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
      {
        chapterId: 'ch22',
        chapterTitle: 'Web Application Security',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l51', lectureTitle: 'OWASP Top 10', lectureDuration: 19, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l52', lectureTitle: 'SQL Injection & XSS', lectureDuration: 22, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u4', rating: 5 }, { userId: 'u9', rating: 4 }, { userId: 'u10', rating: 5 }],
    educator: { name: 'Emily Chen' },
    enrolledStudents: ['u4', 'u8', 'u9', 'u10'],
  },
  {
    _id: 'course12',
    courseTitle: 'Digital Marketing & SEO',
    courseDescription: '<p>Grow any business online with proven digital marketing strategies. Covers SEO, Google Ads, social media marketing, and email campaigns.</p>',
    courseThumbnail: 'https://placehold.co/600x400/d97706/ffffff?text=Marketing',
    coursePrice: 59,
    discount: 0,
    isPublished: true,
    courseContent: [
      {
        chapterId: 'ch23',
        chapterTitle: 'SEO Basics',
        chapterOrder: 1,
        chapterContent: [
          { lectureId: 'l53', lectureTitle: 'How Search Engines Work', lectureDuration: 8, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'l54', lectureTitle: 'Keyword Research', lectureDuration: 12, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
          { lectureId: 'l55', lectureTitle: 'On-Page Optimization', lectureDuration: 14, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 3 },
        ],
      },
      {
        chapterId: 'ch24',
        chapterTitle: 'Paid Advertising',
        chapterOrder: 2,
        chapterContent: [
          { lectureId: 'l56', lectureTitle: 'Google Ads Setup', lectureDuration: 16, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 1 },
          { lectureId: 'l57', lectureTitle: 'Campaign Optimization', lectureDuration: 18, lectureUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', isPreviewFree: false, lectureOrder: 2 },
        ],
      },
    ],
    courseRatings: [{ userId: 'u2', rating: 4 }, { userId: 'u5', rating: 3 }, { userId: 'u10', rating: 4 }],
    educator: { name: 'Sarah Lee' },
    enrolledStudents: ['u2', 'u5', 'u10'],
  },
]

export const dummyDashboardData = {
  totalCourses: 4,
  totalEarning: 876,
  enrolledStudentsData: [
    {
      student: { name: 'Alice Johnson', imageUrl: 'https://placehold.co/36x36/e5e7eb/374151?text=A' },
      totalCourseTitle: 'Complete Web Development Bootcamp',
    },
    {
      student: { name: 'Bob Williams', imageUrl: 'https://placehold.co/36x36/e5e7eb/374151?text=B' },
      totalCourseTitle: 'Python for Data Science',
    },
    {
      student: { name: 'Carol Smith', imageUrl: 'https://placehold.co/36x36/e5e7eb/374151?text=C' },
      totalCourseTitle: 'Complete Web Development Bootcamp',
    },
  ],
}

export const dummyStudentEnrolled = [
  {
    student: { name: 'Alice Johnson', imageUrl: 'https://placehold.co/36x36/e5e7eb/374151?text=A' },
    courseTitle: 'Complete Web Development Bootcamp',
    purchaseDate: '2026-08-15T10:00:00Z',
  },
  {
    student: { name: 'Bob Williams', imageUrl: 'https://placehold.co/36x36/e5e7eb/374151?text=B' },
    courseTitle: 'Python for Data Science',
    purchaseDate: '2026-09-02T14:30:00Z',
  },
  {
    student: { name: 'Carol Smith', imageUrl: 'https://placehold.co/36x36/e5e7eb/374151?text=C' },
    courseTitle: 'Complete Web Development Bootcamp',
    purchaseDate: '2026-09-20T09:15:00Z',
  },
]

export const dummyEducatorData = {
  name: 'John Smith',
  imageUrl: 'https://placehold.co/32x32/6b7280/ffffff?text=J',
}
