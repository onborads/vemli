"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 200px)",
          border: "none",
        }}
      >
        <iframe
          src="/time-attendance-solution/index.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Time Attendance Solution"
        />
      </div>
      <Footer />
    </>
  );
}
