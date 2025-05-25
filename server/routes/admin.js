import express from "express";
const adminRoutes = express.Router()

adminRoutes.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

adminRoutes.put('/block/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { blocked: true });
  res.sendStatus(200);
});


export default adminRoutes;