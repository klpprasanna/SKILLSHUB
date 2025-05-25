import PDFDocument from 'pdfkit'


export const generateCertificate = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const course = await Course.findById(req.params.courseId);

    if (!user || !course) return res.status(404).json({ error: "User or course not found" });

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${course.title}-certificate.pdf`);
    doc.pipe(res);

    doc.fontSize(24).text("Certificate of Completion", { align: "center" });
    doc.moveDown();
    doc.fontSize(18).text(`This is to certify that`, { align: "center" });
    doc.moveDown();
    doc.fontSize(22).fillColor("blue").text(user.name, { align: "center" });
    doc.moveDown();
    doc.fontSize(18).fillColor("black").text(`has successfully completed the course`, { align: "center" });
    doc.moveDown();
    doc.fontSize(20).text(course.title, { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Date: ${new Date().toLocaleDateString()}`, { align: "center" });

    doc.end();
  } catch (err) {
    res.status(500).json({ error: "Failed to generate certificate" });
  }
};
