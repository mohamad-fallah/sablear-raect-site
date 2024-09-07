import React from 'react'
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

import './CourseInfo.css'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

export default function CourseInfo() {
  return (
    <>
      <Topbar />
      
      <Navbar />

      <Breadcrumb
        links={[
          {id: 1, title: "خانه", to: ''},
          {id: 2, title: "آموزش برنامه نویسی فرانت‌اند", to: 'category-info/frontend'},
          {id: 3, title: "دوره متخصص جاوا اسکریپت", to: 'course-info/js-expert'},
        ]}
      />

      <Footer />
    </>
  )
}
