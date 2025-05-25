

export const createCourse = async (req, res) => {
  try {
    const {title,description,category,price,lessons}=req.body;
    const instructor=req.user.id;
    const course = await Course.create({ ...req.body, instructor: req.user.id });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: "Failed to create course" });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor", "name");
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch course" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.params.id, instructor: req.user.id },
      req.body,
      { new: true }
    );
    if (!course) return res.status(403).json({ error: "Unauthorized or not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Failed to update course" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ _id: req.params.id, instructor: req.user.id });
    if (!course) return res.status(403).json({ error: "Unauthorized or not found" });
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete course" });
  }
};
