import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Search/SearchBar";
import FilterPanel from "../../components/Search/FilterPanel";
import SortDropdown from "../../components/Search/SortDropdown";
import CourseCard from "../../components/Courses/CourseCard";

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const allCourses = [
    { id: 1, title: "React Basics", instructor: "John", price: 50, rating: 4.5, category: "Programming" },
    { id: 2, title: "Node.js API", instructor: "Jane", price: 75, rating: 4.0, category: "Programming" },
    { id: 3, title: "UX Design", instructor: "Alice", price: 60, rating: 3.8, category: "Design" },
    { id: 4, title: "Marketing 101", instructor: "Bob", price: 40, rating: 4.2, category: "Marketing" },
  ];

  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    let results = allCourses.filter(course =>
      course.title.toLowerCase().includes(keyword.toLowerCase())
    );

    if (sortBy === "price_low") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_high") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    }

    setFilteredCourses(results);
  }, [keyword, sortBy]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <SearchBar keyword={keyword} setKeyword={setKeyword} />

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <FilterPanel />

        <div className="flex-1">
          <SortDropdown setSortBy={setSortBy} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
