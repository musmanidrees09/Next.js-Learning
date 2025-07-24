export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    // for now, just respond back
    res.status(200).json({
      message: "Form received!",
      data: { name, email },
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
