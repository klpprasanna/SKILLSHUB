import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport';



const authRoutes = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;


// Signup Route
authRoutes.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).send("Server error during signup.");
  }
});

// Login Route
authRoutes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).send("Server error during login.");
  }
});

// Google OAuth route
authRoutes.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth callback
authRoutes.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.redirect(`${process.env.CLIENT_URL}/?token=${token}`);
  }
);

export default authRoutes;
