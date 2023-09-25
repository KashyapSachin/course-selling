//import images
import LogoImg from "../src/assets/img/header/logo.png";
import HeroImg from "../src/assets/img/hero/image.png";
// import OverviewProductImg from "../src/assets/img/overview/product.svg";
import Counter1Img from "../src/assets/img/counter/Counter1.svg";
import Counter2Img from "../src/assets/img/counter/Counter2.svg";
import Counter3Img from "../src/assets/img/counter/Counter3.svg";

import About1Img from "../src/assets/img/about/about1-img.svg";
import About2Img from "../src/assets/img/about/about2-img.svg";
import About3Img from "../src/assets/img/about/about3-img.svg";
import About4Img from "../src/assets/img/about/about4-img.svg";
import About5Img from "../src/assets/img/about/about5-img.svg";
import About6Img from "../src/assets/img/about/about6-img.svg";
import About7Img from "../src/assets/img/about/about7-img.svg";
import ArrowRightImg from "../src/assets/img/about/arrow-right.svg";
import CardIconImg1 from "../src/assets/img/features/cards/icon1.svg";
import CardIconImg2 from "../src/assets/img/features/cards/icon2.svg";
import CardIconImg3 from "../src/assets/img/features/cards/icon3.svg";
import CoursesImg1 from "../src/assets/img/courses/Tallyess.png";
import CoursesImg2 from "../src/assets/img/courses/ADIT.png";
import CoursesImg3 from "../src/assets/img/courses/dca.jpg";
import CoursesImg4 from "../src/assets/img/courses/ccc.png";
import CoursesImg5 from "../src/assets/img/courses/CEHT.png";
import CoursesImg6 from "../src/assets/img/courses/CEHT.png";
import CoursesImg7 from "../src/assets/img/courses/CFA.png";
import CoursesImg8 from "../src/assets/img/courses/CFA+.png";
import CoursesImg9 from "../src/assets/img/courses/cia.png";
import CoursesImg10 from "../src/assets/img/courses/DTP.jpg";
import CoursesImg11 from "../src/assets/img/courses/English Speaking.png";
import CoursesImg12 from "../src/assets/img/courses/NCFA.png";
import CoursesImg13 from "../src/assets/img/courses/TES.png";
import AvatarImg1 from "../src/assets/img/testimonial/avatar1.png";
import AvatarImg2 from "../src/assets/img/testimonial/avatar2.png";
import AvatarImg3 from "../src/assets/img/testimonial/avatar3.png";
import AvatarImg4 from "../src/assets/img/testimonial/avatar4.png";
import AvatarImg5 from "../src/assets/img/testimonial/avatar5.png";
import FacebookIcon from "../src/assets/img/copyright/facebook.svg";
import TwitterIcon from "../src/assets/img/copyright/twitter.svg";
import LinkedinIcon from "../src/assets/img/copyright/linkedin.svg";

export const header = {
  logo: LogoImg,
  btnText: "Login",
};
export const nav = {
  links: [
    { name: "Home", href: "/" },
    { name: "AboutUs", href: "/about" },
    { name: "Courses", href: "/Courses" },
    { name: "ContactUs", href: "/Contactus" },
    { name: "SignUp", href: "/Signup" },
    // { name: "Blog", href: "/" },
  ],
};

export const hero = {
  title: "Empowering Your Future in Tech", 
  subtitle:
    "Join our Leading Computer Institute for Cutting-Edge Training and Career Advancement",
  btnText: "Get Started ",
  compText: "— DCA,TALLY  and ADIT",
  image: HeroImg,
};
export const counter = {
  title: "The Product we work with.",
  subtitle:
    "Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.",
  countercards: [
    {
      icon: Counter1Img,
      title: "Courses",
      delay: 200,
      start: 0,
      end: 15,
    },
    {
      icon: Counter2Img,
      title: "Experience",
      delay: 400,
      start: 0,
      end: 12,
    },
    {
      icon: Counter3Img,
      title: "Students",
      delay: 600,
      start: 0,
      end: 1000,
    },
  ],
};

export const About = {
  About1: {
    pretitle: "About Us",
    title: "Revolutionizing Learning with Us",
    subtitle:
      "Empowering individuals with cutting-edge technology skills for success in the digital era",
    btnLink: "About us",
    btnIcon: ArrowRightImg,
    image: About1Img,
  },
  About2: {
    pretitle: "About Onilne Exam And Result",
    title: "Online exam and result management with us",
    subtitle:
      " Experience hassle free assessments and instant results with our state-of-the-art digital platform",
    btnLink: "Read More",
    btnIcon: ArrowRightImg,
    image: About2Img,
  },
  About3: {
    pretitle: "About Technology And Education",
    title: "Innovative Technology Education",
    subtitle:
      "At Millennium Computer Education, we believe in providing innovative and comprehensive technology education to students, helping them develop a strong foundation in digital skills and stay ahead in the technology landscape.",
    btnLink: "Contact us",
    btnIcon: ArrowRightImg,
    image: About3Img,
  },
  About4: {
    pretitle: "About Instructors",
    title: "Expert Instructors",
    subtitle:
      "Our team of expert instructors are passionate about technology and dedicated to helping students achieve their full potential, providing personalized support and guidance every step of the way",
    btnLink: "Contact us",
    btnIcon: ArrowRightImg,
    image: About4Img,
  },
  About5: {
    pretitle: "About Our Curriculum",
    title: "Industry Relevant Curriculum",
    subtitle:
      " Our curriculum is designed to meet the needs of the industry and equip students with the latest technology skills and knowledge to succeed in their careers.",
    btnLink: "Contact us",
    btnIcon: ArrowRightImg,
    image: About5Img,
  },
  About6: {
    pretitle: "About Exam Platform",
    title: "Online Exam Platform",
    subtitle:
      "Our online exam platform is designed to provide a seamless and user-friendly experience for students, enabling them to take exams and track their progress easily and efficiently.",
    btnLink: "Contact us",
    btnIcon: ArrowRightImg,
    image: About6Img,
  },
  About7: {
    pretitle: "About Exam Results",
    title: "Instant Results",
    subtitle:
      "With our advanced online exam platform, students can receive instant results and feedback, helping them to identify their strengths and areas for improvement and take corrective action accordingly.",
    btnLink: "Contact us",
    btnIcon: ArrowRightImg,
    image: About7Img,
  },
};

export const features = {
  title: "Transforming Digital Learning",
  subtitle:
    "Our comprehensive services enable learners to build their digital competencies and succeed in the digital world.",
  cards: [
    {
      icon: CardIconImg1,
      title: "Update syllabus",
      subtitle:
        "We teach student updated courses which help students to work in industries nowadays",
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: "Onilne Exam",
      subtitle:
        " Test your digital knowledge and skills with our advanced online exam platform, and get instant results to track your progress",
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: "Online Result",
      subtitle: "Elit esse cillum dolore eu fugiat nulla pariatur",
      delay: 600,
    },
  ],
};

export const courses = {
  title: "Choose your Course",
  cards: [
    {
      icon: CoursesImg1,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg2,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 600,
    },
    {
      icon: CoursesImg3,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 900,
    },
  ],
};

export const coursedata = {
  title: "Choose your Course",
  cards: [
    {
      icon: CoursesImg1,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg2,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg3,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg4,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg5,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg6,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg7,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg8,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg9,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg10,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg11,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg12,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
    {
      icon: CoursesImg13,
      services: [
        { name: "Comprehensive and Up-to-Date" },
        { name: "Building a Future-Ready Skillset" },
        { name: "Learning Made Easy" },
      ],
      btnText: "Contact us",
      delay: 300,
    },
  ],
};

export const testimonials = {
  title: "STUDENT APPRAISAL'S",
  clients: [
    {
      message: `One of the best computer coaching centre, I have gained training from faculty are
        very cooperative, you can ask your doubts freely which would certainly be clarified. The teaching
        pattern is really good,the syllabus is well designed.`,
      image: AvatarImg1,
      name: "Amandeep Singh",
      Course: "Tally ACE &amp; DCA",
      borderColor: "#FF7235",
    },
    {
      message: `Amazing class and learn more about computer education and the opportunity to learn more about
        accounting skills. Very helpful classes. Thanks you...`,
      image: AvatarImg2,
      name: "Akriti",
      Course: "Tally ACE &amp; DCA",
      borderColor: "#FFBE21",
    },
    {
      message: `This class is very useful for me To taught computer knowledge I learn very easily with instructor
        All instructor are very helpful and great`,
      image: AvatarImg3,
      name: "Shadab",
      Course: "DCA &amp; Hindi Typing",
      borderColor: "#4756DF",
    },
    {
      message: ` I am pursuing DCA course from Millennium Computer Education. Loving every minute studying and gained
        great knowledge. Every topic is being explained with patience. Each and every menu is explained in
        detail. The teachers are quite helpful and friendly.`,
      image: AvatarImg4,
      name: "Munni",
      Course: "DCA",
      borderColor: "#3EC1F3",
    },
    {
      message: `The learning experience in Millennium Computer Education with a nice infrastructure well euuipped
        lab and co-operative and helpful teachers is all together a memorable experience.
        The friendly teacher student relationship is a cherry on the top.`,
      image: AvatarImg5,
      name: "Sumaiya ",
      Course: "Tally Pro (Diploma)",
      borderColor: "#BB7259",
    },
    {
      message: `I learned Tally earlier also. But the Advance Tally course
      offered by Excess covers in-depth insights; strongly recommend this course.`,
      image: AvatarImg5,
      name: "Suraj",
      Course: "Tally Essensial Comprehensive (Diploma)",
      borderColor: "#BB7259",
    },
  ],
};

export const cta = {
  title: "12+ Years Of Training Experience",
  subtitle: " Our Classes Have been working since 2007",
  btnText: "Join us",
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: "Home", href: "/" },
    { name: "about", href: "/about" },
    { name: "Courses", href: "/Courses" },
    { name: "Contactus", href: "/Contactus" },
    { name: "SignUp", href: "/signup" },
    { name: "Blog", href: "/" },
  ],
  legal: [
    { name: "Terms of use", href: "/" },
    { name: "Terms of conditions", href: "/" },
    { name: "Privacy policy", href: "/" },
    { name: "Cookie policy", href: "/" },
  ],
  newsletter: {
    title: "Join us",
    subtitle: "10K students's join our course",
  },
  form: {
    placeholder: "Enter your email",
    btnText: "Subscribe",
    smallText: "We don’t sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: "Privacy & Terms",
    href: "/",
  },
  copyText: "Copyright @ 2023 sachinkashyap",
  social: [
    { icon: FacebookIcon, href: "/" },
    { icon: TwitterIcon, href: "/" },
    { icon: LinkedinIcon, href: "/" },
  ],
};
