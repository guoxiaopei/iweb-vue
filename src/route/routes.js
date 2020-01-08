import Home from "../pages/Home";
import Teacher from "../pages/Teacher";
import Address from "../pages/Address";
import Course from "../pages/Course";
import CourseDetail from "../pages/CourseDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: Teacher
  },
  {
    path: "/address",
    name: "Address",
    component: Address
  },
  {
    path: "/course",
    name: "Course",
    component: Course
  },
  {
    path: "/course_detail",
    name: "CourseDetail",
    component: CourseDetail
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
]
