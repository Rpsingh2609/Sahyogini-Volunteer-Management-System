import nodemailer from "nodemailer";

export default async function notifyUsers(opportunity) {
  const CLERK_API_URL = "https://api.clerk.dev/v1/users";
  const CLERK_SECRET_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  try {
    // Fetch users from Clerk
    const response = await fetch(CLERK_API_URL, {
      headers: { Authorization: `Bearer ${CLERK_SECRET_KEY}` },
    });
    const users = await response.json();

    // Extract email addresses
    const emails = users.map((user) => user.email_addresses[0]?.email_address).filter(Boolean);

    if (emails.length === 0) {
      console.error("No users found in Clerk");
      return;
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: import.meta.env.VITE_EMAIL_USER,
        pass: import.meta.env.VITE_EMAIL_PASS,
      },
    });

    // Send emails
    const emailPromises = emails.map((email) =>
      transporter.sendMail({
        from: import.meta.env.VITE_EMAIL_USER,
        to: email,
        subject: "New Volunteer Opportunity",
        html: `<p>A new opportunity <strong>${opportunity.title}</strong> has been posted!</p>`,
      })
    );

    await Promise.all(emailPromises);
    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error sending emails:", error);
  }
}
