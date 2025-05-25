

export const getMessagesByCourse = async (req, res) => {
  try {
    const messages = await ChatMessage.find({ courseId: req.params.courseId }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to load chat messages" });
  }
};
