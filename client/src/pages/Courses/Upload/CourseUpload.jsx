
import React, { useState } from "react";

const CourseUpload = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [lessons, setLessons] = useState([
    {
      title: "",
      video: "",
      resources: [],
      quiz: { type: "mcq", question: "", options: ["", "", "", ""], answer: "" }
    },
  ]);

  const handleLessonChange = (index, field, value) => {
    const updated = [...lessons];
    updated[index][field] = value;
    setLessons(updated);
  };

  const handleQuizChange = (index, field, value) => {
    const updated = [...lessons];
    updated[index].quiz[field] = value;
    setLessons(updated);
  };

  const uploadVideo = async (index, file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    const updated = [...lessons];
    updated[index].video = data.secure_url;
    setLessons(updated);
  };

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        title: "",
        video: "",
        resources: [],
        quiz: { type: "mcq", question: "", options: ["", "", "", ""], answer: "" }
      },
    ]);
  };

  const handleCourseChange = (e) => {
    setCourseInfo({ ...courseInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course submitted:", { courseInfo, lessons });
    // Send to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4 text-indigo-700">📤 Upload New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Course Description"
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleCourseChange}
          className="w-full border p-2 rounded"
        />

        <div className="space-y-6">
          {lessons.map((lesson, idx) => (
            <div key={idx} className="border p-4 rounded bg-white shadow">
              <h2 className="text-lg font-semibold text-indigo-600">Lesson {idx + 1}</h2>
              <input
                type="text"
                placeholder="Lesson Title"
                value={lesson.title}
                onChange={(e) => handleLessonChange(idx, "title", e.target.value)}
                className="w-full mt-2 border p-2 rounded"
              />

              {/* Video Upload */}
              <input
                type="file"
                accept="video/*"
                onChange={(e) => uploadVideo(idx, e.target.files[0])}
                className="mt-2"
              />
              {lesson.video && (
                <video src={lesson.video} controls className="w-full mt-2 rounded" />
              )}

              {/* Quiz Section */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Quiz</h3>
                <input
                  type="text"
                  placeholder="Question"
                  value={lesson.quiz.question}
                  onChange={(e) => handleQuizChange(idx, "question", e.target.value)}
                  className="w-full border p-2 rounded mb-2"
                />
                {lesson.quiz.options.map((opt, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Option ${i + 1}`}
                    value={opt}
                    onChange={(e) => {
                      const opts = [...lesson.quiz.options];
                      opts[i] = e.target.value;
                      handleQuizChange(idx, "options", opts);
                    }}
                    className="w-full border p-2 rounded mb-2"
                  />
                ))}
                <input
                  type="text"
                  placeholder="Correct Answer"
                  value={lesson.quiz.answer}
                  onChange={(e) => handleQuizChange(idx, "answer", e.target.value)}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addLesson}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          ➕ Add Another Lesson
        </button>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Course
        </button>
      </form>
    </div>
  );
};

export default CourseUpload;
