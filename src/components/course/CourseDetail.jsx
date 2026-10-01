"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";

const tabs = ["About", "Lessons", "Reviews"];

const includedFeatures = [
  ["/icons/learning_resources.png", "Learning Resources"],
  ["/icons/video.png", "Quality Lesson Videos"],
  ["/icons/certification.png", "Certificate of Completion"],
  ["/icons/privateConsultation.png", "Private Consultation"],
];

function SiteHeader() {
  return (
    <header className="mx-auto flex h-[88px] w-full max-w-[1190px] items-center justify-between px-5 text-white xl:h-[120px] xl:px-0">
      <Link href="/" className="flex shrink-0 items-center gap-1.5">
        <Image src="/logo.png" alt="" width={29} height={32} className="h-7 w-auto" />
        <span className="font-display text-[20px] font-bold leading-none xl:text-[24px]">
          ByteSpace
        </span>
      </Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[12px] md:flex">
        <Link href="/">Home</Link>
        <Link href="/search">Courses</Link>
        <Link href="#creator">Creators</Link>
      </nav>
      <div className="flex items-center gap-3 text-[11px] sm:gap-5 xl:gap-6 xl:text-[12px]">
        <Link href="#sign-in">Sign In</Link>
        <Link href="#join-us">Join Us</Link>
        <Image src="/cart_logo.png" alt="Cart" width={24} height={24} className="h-5 w-5 object-contain xl:h-6 xl:w-6" />
      </div>
    </header>
  );
}

function CourseStat({ icon, children }) {
  return (
    <span className="inline-flex h-[34px] items-center gap-2 rounded-full bg-white px-4 font-sans text-[13px] text-neutral-800">
      <Image src={icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
      {children}
    </span>
  );
}

function EnrollmentPanel({ course, detail }) {
  return (
    <aside aria-label="Course enrollment" className="relative z-20 mx-auto mt-6 w-[calc(100%-40px)] max-w-[412px] rounded-[24px] border border-neutral-200 bg-white px-6 py-7 shadow-[0_8px_32px_rgba(12,26,61,0.08)] xl:absolute xl:left-[calc(50%+188px)] xl:top-[416px] xl:mt-0 xl:w-[412px] xl:max-w-none xl:px-10 xl:py-9">
      <h2 className="font-display text-[20px] font-semibold leading-7 text-neutral-950">
        {detail.totalLessons} Lessons ({detail.duration})
      </h2>

      <ol className="mt-5 space-y-3">
        {detail.previewLessons.map((lesson, index) => (
          <li key={lesson.title} className="grid grid-cols-[24px_1fr_auto] gap-2 font-sans text-[13px] leading-[18px] text-neutral-800">
            <span className="text-neutral-600">{String(index + 1).padStart(2, "0")}</span>
            <span>{lesson.title}</span>
            <span className="whitespace-nowrap text-brand-blue">{lesson.duration}</span>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-[13px] text-neutral-600">{detail.remainingVideos} more videos</p>
      <p className="mt-5 text-[13px] leading-5 text-neutral-600">
        Ready to dive in? Enroll now and start building your digital future!
      </p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-[30px] font-semibold leading-none text-[#0057FF]">${course.price}</span>
        <span className="text-[12px] text-neutral-500">/{course.priceType}</span>
      </div>

      <button type="button" className="mt-5 h-[46px] w-full rounded-full bg-brand-lime font-sans text-[14px] font-medium text-neutral-950 hover:brightness-95">
        Enroll Now
      </button>

      <h3 className="mt-6 font-display text-[16px] font-semibold text-neutral-950">
        This course include
      </h3>
      <ul className="mt-4 space-y-3">
        {includedFeatures.map(([icon, label]) => (
          <li key={label} className="flex items-center gap-3 text-[13px] text-neutral-600">
            <Image src={icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 font-display text-[13px] font-semibold text-neutral-700">
          PP
        </div>
        <div>
          <p className="text-[14px] font-medium text-neutral-950">{course.instructor}</p>
          <p className="text-[12px] text-neutral-500">Professional Creator</p>
        </div>
      </div>
      <p className="mt-4 text-[13px] leading-5 text-neutral-600">
        Ready to dive in? Enroll now and start building your digital future!
      </p>
      <button type="button" className="mt-4 rounded-full border border-neutral-300 px-4 py-2 text-[12px] text-neutral-700 hover:bg-neutral-50">
        See Full Profile
      </button>
    </aside>
  );
}

function AboutContent({ detail }) {
  return (
    <div className="space-y-7">
      <section>
        <h2 className="font-display text-[18px] font-semibold text-neutral-950">Description</h2>
        <div className="mt-4 space-y-4 text-[14px] leading-[1.65] text-neutral-600">
          {detail.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section>
        <h2 className="font-display text-[18px] font-semibold text-neutral-950">Sneak Peek</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {detail.sneakPeek.map((src) => (
            <Image key={src} src={src} alt="Course preview" width={220} height={132} className="aspect-[5/3] w-full rounded-[12px] object-cover" />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-[18px] font-semibold text-neutral-950">Key Points</h2>
        <ul className="mt-4 space-y-3">
          {detail.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[14px] leading-5 text-neutral-600">
              <span aria-hidden="true" className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[11px] leading-none text-white">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function LessonsContent({ detail }) {
  return (
    <div>
      <h2 className="font-display text-[18px] font-semibold text-neutral-950">Explore the Modules</h2>
      <p className="mt-3 text-[14px] leading-6 text-neutral-600">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on expertise.
      </p>

      <h3 className="mt-7 font-display text-[16px] font-semibold text-neutral-950">Lesson List</h3>
      <ol className="mt-4 space-y-3">
        {detail.modules.map((module) => (
          <li key={module.title} className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-brand-lime">
              <Image src="/icons/video.png" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
            </span>
            <div className="pt-0.5">
              <h4 className="text-[14px] font-medium leading-5 text-neutral-950">{module.title}</h4>
              <p className="mt-1 text-[13px] leading-5 text-neutral-600">{module.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-8">
        <h3 className="font-display text-[16px] font-semibold text-neutral-950">Lesson Content</h3>
        <p className="mt-3 text-[14px] leading-6 text-neutral-600">
          Engage with each lesson through video, detailed explanations, and interactive exercises. Download resources, complete assignments, and check your understanding as you progress.
        </p>
      </section>

      <section className="mt-8">
        <h3 className="font-display text-[16px] font-semibold text-neutral-950">Lesson Progress Tracking</h3>
        <p className="mt-3 text-[14px] leading-6 text-neutral-600">
          Follow your progress through the course and return to lessons whenever you need a refresher.
        </p>
        <div className="mt-4 rounded-[12px] border border-neutral-200 p-4">
          <p className="text-[12px] text-neutral-700">Learning Progress</p>
          <p className="mt-1 text-[22px] font-semibold text-neutral-950">55%</p>
          <div className="mt-2 h-[6px] overflow-hidden rounded-full bg-neutral-100">
            <div className="h-full w-[55%] rounded-full bg-brand-lime" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ReviewsContent({ course, detail }) {
  const maxCount = Math.max(...detail.ratingBreakdown);

  return (
    <div>
      <h2 className="font-display text-[18px] font-semibold text-neutral-950">What Learners Are Saying</h2>
      <p className="mt-3 text-[14px] leading-6 text-neutral-600">
        Discover what learners have to say about their experience with {course.title}. Read reviews and ratings from people who have taken the course.
      </p>

      <div className="mt-5 grid grid-cols-[100px_1fr] gap-5 rounded-[16px] border border-neutral-200 p-5 sm:grid-cols-[124px_1fr] sm:gap-6">
        <div className="flex flex-col items-center justify-center rounded-[12px] bg-brand-lime p-3 text-center">
          <span className="text-[11px] text-neutral-800">Ratings</span>
          <span className="mt-1 text-[30px] font-semibold leading-none text-neutral-950">{detail.rating}</span>
        </div>
        <div className="space-y-2">
          {detail.ratingBreakdown.map((count, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-3 text-[12px] text-neutral-600">{5 - index}</span>
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full rounded-full bg-brand-lime" style={{ width: `${(count / maxCount) * 100}%` }} />
              </div>
              <span className="w-8 text-right text-[11px] text-neutral-500">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-7 font-display text-[16px] font-semibold text-neutral-950">Individual Reviews</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {["All ratings", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((rating, index) => (
          <button key={rating} type="button" className={`rounded-full px-3 py-2 text-[12px] ${index === 0 ? "bg-brand-lime text-neutral-950" : "bg-neutral-50 text-neutral-700"}`}>
            {rating}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        {detail.reviews.map((review) => (
          <article key={review.name} className="rounded-[16px] border border-neutral-200 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-[12px] font-semibold text-neutral-600">{review.name.split(" ").map((part) => part[0]).join("")}</div>
                <div>
                  <h4 className="text-[14px] font-medium text-neutral-950">{review.name}</h4>
                  <p className="text-[12px] text-neutral-500">{review.role}</p>
                </div>
              </div>
              <span className="text-[12px] text-neutral-500">a year ago</span>
            </div>
            <p className="mt-4 text-[16px] tracking-[1px] text-neutral-700" aria-label={`${review.rating} out of 5 stars`}>
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </p>
            <p className="mt-3 text-[13px] leading-5 text-neutral-600">“{review.text}”</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function CourseDetail({ course, detail }) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <>
      <div className="relative">
        <GridBackground className="min-h-[700px] pb-8 xl:h-[957px] xl:min-h-[957px] xl:pb-0">
          <SiteHeader />
          <section className="mx-auto w-full max-w-[1190px] px-5 xl:px-0">
            <div className="relative pt-7">
              <h1 className="max-w-[850px] font-display text-[26px] font-semibold leading-[1.2] text-white sm:text-[32px]">
                {detail.title}
              </h1>
              <p className="mt-1 max-w-[760px] text-[14px] font-medium leading-5 text-white sm:text-[16px]">
                {detail.subtitle}
              </p>
              <p className="mt-3 text-[13px] text-white">
                by <span className="text-brand-lime">{course.instructor}</span>
              </p>

              <button type="button" className="absolute right-0 top-7 inline-flex h-[42px] items-center gap-2 rounded-full bg-brand-lime px-5 text-[13px] font-medium text-neutral-950 hover:brightness-95">
                <Image src="/icons/share.png" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                Share
              </button>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <CourseStat icon="/icons/image.png">{detail.level}</CourseStat>
                <CourseStat icon="/icons/star.png">{detail.rating} ({detail.reviewCount} reviews)</CourseStat>
                <CourseStat icon="/icons/students.png">{detail.students} Students</CourseStat>
              </div>

              <div className="mt-8 aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-[24px] sm:mt-10 xl:mt-[126px]">
                <Image
                  src="/dummyVideoImage.png"
                  alt="Course video preview"
                  width={1440}
                  height={958}
                  priority
                  className="h-full w-full object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 720px"
                />
              </div>
            </div>
          </section>
        </GridBackground>

        <EnrollmentPanel course={course} detail={detail} />

        <main className="mx-auto w-full max-w-[1190px] px-5 pb-16 pt-8 xl:px-0 xl:pt-10">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[720px_412px] xl:gap-[58px]">
            <section aria-label="Course information" className="min-w-0">
              <div role="tablist" aria-label="Course details" className="flex gap-2.5">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    id={`course-tab-${tab.toLowerCase()}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    aria-controls="course-tab-panel"
                    onClick={() => setActiveTab(tab)}
                    className={`h-[38px] rounded-full px-4 text-[13px] transition-colors ${activeTab === tab ? "bg-brand-lime text-neutral-950" : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div id="course-tab-panel" role="tabpanel" aria-labelledby={`course-tab-${activeTab.toLowerCase()}`} className="mt-7">
                {activeTab === "About" && <AboutContent detail={detail} />}
                {activeTab === "Lessons" && <LessonsContent detail={detail} />}
                {activeTab === "Reviews" && <ReviewsContent course={course} detail={detail} />}
              </div>
            </section>
            <div aria-hidden="true" className="hidden xl:block" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}