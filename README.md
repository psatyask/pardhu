# Pardhu Alapati | AI/ML Engineer Portfolio

A modern, responsive personal portfolio showcasing my professional experience, technical expertise, and work in Artificial Intelligence, Machine Learning, Generative AI, and LLM-powered applications.

Built using **Node.js, Express.js, EJS, JavaScript, Bootstrap 5, and CSS3**, with support for light/dark themes, interactive UI elements, and a functional contact form.

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Modern UI** — Clean layouts, glassmorphism navigation, gradient accents, and subtle animations.
- **Dark/Light Mode** — Theme switching with preferences saved using localStorage.
- **Professional Experience** — Highlights AI/ML engineering experience across healthcare and financial domains.
- **Technical Skills** — Showcases expertise in machine learning, generative AI, cloud platforms, and MLOps.
- **Resume Access** — View or download my professional resume.
- **Contact Form** — Email integration using Nodemailer and Gmail SMTP.
- **Social Integration** — Direct links to GitHub and LinkedIn.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, Bootstrap 5 |
| Backend | Node.js, Express.js |
| Templating | EJS |
| Icons | Font Awesome, Bootstrap Icons |
| Email Integration | Nodemailer, Gmail SMTP |
| Deployment | Heroku |
| Version Control | Git, GitHub |

## Project Structure

```text
portfolio/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   ├── favicon.png
│   └── resume_pssk.pdf
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── experience.ejs
│   └── contact.ejs
├── app.js
├── package.json
├── .env
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/psatyask/pardhu.git
cd pardhu
```

### 2. Install Dependencies

Ensure Node.js and npm are installed.

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
EMAIL=your-email@gmail.com
PASSWORD=your-gmail-app-password
PORT=3000
```

The contact form uses Gmail SMTP through Nodemailer. Use a Gmail App Password rather than your regular account password.

**Security:** Never commit your `.env` file or credentials to GitHub. Add `.env` to `.gitignore`.

### 4. Run Locally

```bash
node app.js
```

Open:

`http://localhost:3000`

## Deployment

The application is configured for deployment on **Heroku**.

Ensure your `package.json` includes a start script:

```json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

Configure `EMAIL` and `PASSWORD` as environment variables in Heroku's application settings.

The Express server uses `process.env.PORT` to support the hosting platform's assigned port.

## Contact

**Pardhu Satya Sai Krishna Alapati**  
AI/ML Engineer | Generative AI | LLM Applications | MLOps

- **Location:** Birmingham, Alabama, USA
- **Email:** [alapatipsatyasaikrishna@gmail.com](mailto:alapatipsatyasaikrishna@gmail.com)
- **LinkedIn:** [linkedin.com/in/pssatya](https://www.linkedin.com/in/pssatya)
- **GitHub:** [github.com/psatyask](https://github.com/psatyask)

## License

© 2026 Pardhu Alapati. All rights reserved.

---

**Designed and developed by Pardhu Alapati.**  
*Built with curiosity and a little AI.*