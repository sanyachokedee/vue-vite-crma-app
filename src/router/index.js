import { createRouter, createWebHistory } from "vue-router";

// Import Frontend Layout
import FrontendLayout from "@/layout/Frontend.vue";

// Import Frontend Page

import Home from "@/views/frontend/Home.vue";
import About from "@/views/frontend/About.vue";
import Contact from "@/views/frontend/contact.vue";
import Portfolio from "@/views/frontend/Portfolio.vue";
import Service from "@/views/frontend/Service.vue";
import Login from "@/views/frontend/Login.vue";
import ForgotPassword from "@/views/frontend/ForgotPassword.vue";
import Register from "@/views/frontend/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Frotnend Route
    {
      // เรียกตัว FrontendLayout
      path: "/",
      name: "Frontend",
      component: FrontendLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
          meta: {
            title: "หน้าหลัก",
            description: "หน้าหลักระบบ",
          },
        },
        {
          path: "/about",
          name: "About",
          component: About,
          meta: {
            title: "เกี่ยวกับเรา",
            description: "เกี่ยวกับเรา",
          },
        },
        {
          path: "/portfolio",
          name: "Portfolio",
          component: Portfolio,
          meta: {
            title: "ผลงานของเรา",
            description: "ผลงานของเรา",
          },
        },
        {
          path: "/service",
          name: "Service",
          component: Service,
          meta: {
            title: "บริการของเรา",
            description: "บริการของเรา",
          },
        },
        {
          path: "/contact",
          name: "Contact",
          component: Contact,
          meta: {
            title: "ติดต่อเรา",
            description: "ติดต่อเรา 02-320-2291",
          },
        },
        {
          path: "/register",
          name: "Register",
          component: Register,
          meta: {
            title: "สมัครสมาชิก",
            description: "ท่านกรุณากรอกตามที่ระบุ",
          },
        },
        {
          path: "/login",
          name: "Login",
          component: Login,
          meta: {
            title: "เข้าสู่ระบบ",
            description: "ป้อนผู้ใช้และรหัสผ่าน",
          },
        },
        {
          path: "/forgotpassword",
          name: "ForgotPassword",
          component: ForgotPassword,
          meta: {
            title: "ลืมรหัสผ่าน",
            description: "ต้องไม่น้อยกว่า 8 อักษร",
          },
        },
      ],
    },
  ],
});

export default router;
