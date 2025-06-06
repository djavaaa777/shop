# 🛒 DailyGoods Shop

An online grocery shop built with **React** (frontend), **Node.js + Express** (backend), and **MySQL** (database). Users can browse products, add them to a cart, place orders, and send contact messages.

🌐 **Live Demo**: [https://shop-nu-lake.vercel.app](https://shop-nu-lake.vercel.app)

---

## 📂 Project Structure

```
/server
  ├── index.js         # Express server entry
  ├── db.js            # MySQL DB connection
  ├── .env             # Environment variables
/src
  ├── components       # React components
  ├── App.js
  ├── index.js
  └── ...
```

---

## ⚙️ Technologies Used

- **Frontend**: React, CSS, React Icons, React Router
- **Backend**: Node.js, Express
- **Database**: MySQL (FreeSQLDatabase)
- **Deployment**: 
  - Frontend: [Vercel](https://vercel.com/)
  - Backend: [Render](https://render.com/)

---

## 📦 Features

- 🛍 View products
- ➕ Add/remove items from cart
- ✅ Place orders (stored in DB)
- ✉️ Contact form (saves messages in DB)
- 🔥 "Deal of the Day" feature
- 🧾 Responsive and clean UI

---

## 🔐 Environment Variables

**Frontend (`.env`)**
```env
REACT_APP_API_URL=https://your-backend-service.onrender.com
```

**Backend (`.env`)**
```env
PORT=5000
DB_HOST=sql7.freesqldatabase.com
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

---

## 🚀 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/shop-project.git
cd shop-project
```

### 2. Setup Backend
```bash
cd server
npm install
# Add your .env file
node index.js
```

### 3. Setup Frontend
```bash
cd ..
npm install
npm start
```

---

## 🛠 Deployment Notes

- **Render (backend)**: Ensure `.env` variables are set and the build command is empty.
- **Vercel (frontend)**: Add `REACT_APP_API_URL` in project settings.

---

## 📬 Contact

For questions or feedback, feel free to reach out via the contact form on the website!

---

© 2025 Javid Mustafayev. All rights reserved.
