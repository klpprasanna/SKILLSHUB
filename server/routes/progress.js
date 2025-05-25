import express from 'express'

const progressRoutes = express.Router();

progressRoutes.post('/update', async (req, res) => {
  const { userId, courseId, lessonId } = req.body;
  let progress = await Progress.findOne({ userId, courseId });

  if (!progress) {
    progress = await Progress.create({ userId, courseId, completedLessons: [lessonId], percentage: 0 });
  } else if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }

  const totalLessons = req.body.totalLessons;
  progress.percentage = (progress.completedLessons.length / totalLessons) * 100;
  await progress.save();
  res.json(progress);
});


export default progressRoutes;
