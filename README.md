# Portfolio Next.js

A modern, high-performance, fully responsive personal portfolio website built with **Next.js 14** and **React**.
Designed for developers, designers, and professionals to showcase their projects, skills, and experience with blazing-fast speed and SEO optimization.

---

## 🚀 Features

* **Next.js 14**: App directory, file-based routing, SSR/SSG/ISR hybrid support
* **React 18**: Modern React features, hooks, and components
* **Tailwind CSS**: Rapid styling and utility-first design
* **SEO Optimized**: Meta tags, Open Graph, and sitemap support
* **i18n/Localization Ready**: Easily add multiple languages with `/locales` directory
* **Image Optimization**: Next.js `<Image />` for fast, responsive images
* **Lightweight & Modular**: Easy to add/edit sections and pages
* **Dark Mode Support** (if implemented)
* **Easy Deployment**: Ready for Vercel, Netlify, or static export

---

## 📁 Project Structure

```
portfolio-next.js/
├── public/               # Static assets (images, icons, etc.)
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page routes (if using pages directory)
│   ├── app/              # App directory (for Next.js 13+)
│   ├── styles/           # Global and component CSS
│   ├── data/             # Portfolio data, project lists, etc.
│   └── locales/          # Localization (en, tr, etc.)
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

---

## 🛠️ Getting Started

### Prerequisites

* Node.js 18+ recommended
* npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/emirbaycan/portfolio-next.js.git
   cd portfolio-next.js
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## ⚙️ Configuration

* **Edit `/src/data/` or config files** to add your own projects, skills, and personal information.
* **Localization:** Add or update JSON files in `/public/locales/` for multiple languages.
* **Images:** Place your images (avatars, project screenshots) in `/public/images/`.
* **Tailwind CSS:** Customize the theme in `tailwind.config.js`.

---

## 🌐 Deployment

You can easily deploy your portfolio to **Vercel**, **Netlify**, or any static hosting:

### Deploy to Vercel (Recommended)

1. [Sign up at Vercel](https://vercel.com/)
2. Link your GitHub repo and import the project
3. Set environment variables if needed (see `.env.local`)
4. Deploy with one click!

### Static Export

```bash
npm run build
npm run export
```

* The static site will be in the `out/` directory.

---

## 🤝 Contributing

Contributions are welcome!
Fork the repo, create a branch, and submit a pull request for improvements or bugfixes.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

For questions, suggestions, or collaboration, contact [emirbaycan](https://github.com/emirbaycan).

---

*Showcase your skills and projects with speed and style—powered by Next.js!*
