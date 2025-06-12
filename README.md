#Ride Share App
A simple full-stack Ride Sharing application where users can sign up as Rider or Ride Provider, add rides, search for rides, and view ride analysis.

✅ Backend → Node.js + Express + MongoDB
✅ Frontend → HTML + CSS + JavaScript
✅ Password hashing (bcrypt)
✅ Live Ride Filtering
✅ Ride Analysis with Chart.js

#Features
✅ Rider / Ride Provider Signup & Login
✅ Passwords hashed with bcrypt
✅ Session stored in localStorage
✅ Ride Provider → Add Ride
✅ Rider → View Available Rides
✅ Live Filtering by Pickup / Dropoff
✅ Ride Analysis → Bar Chart with seats
✅ Full REST API → /signup, /login, /rides
✅ Responsive frontend

#Tech Stack
Frontend: HTML, CSS, Vanilla JS, Chart.js
Backend: Node.js, Express.js, MongoDB, Mongoose
Passwords: bcryptjs
REST API
Local MongoDB (or MongoDB Atlas)


How to Run Locally
1️⃣ Clone the repo

git clone https://github.com/your-username/ride-share-app.git
cd ride-share-app

2️⃣ Backend Setup

cd backend
npm install
npm start
Backend runs at → http://localhost:5000

👉 Make sure MongoDB is running → default: mongodb://localhost:27017

3️⃣ Frontend
Open:
frontend/index.html
in browser → app works.


Usage Flow
1️⃣ Signup as Rider or Ride Provider
2️⃣ Login → redirect to dashboard
3️⃣ Ride Provider → Add Rides → stored in DB
4️⃣ Rider → View & Filter rides
5️⃣ Rider → View Ride Analysis with bar chart
6️⃣ Logout → clears session


#API Endpoints
POST /signup
json
{ "role": "rider", "email": "user@example.com", "password": "123456" }

POST /login
json
{ "role": "rider", "email": "user@example.com", "password": "123456" }

POST /rides
json
{ "provider": "provider@example.com", "pickup": "LocationA", "dropoff": "LocationB", "date": "2024-06-10", "time": "15:00", "seats": 3 }

GET /rides
Returns all rides.

Future Enhancements
✅ Auth with JWT
✅ Ride booking & seat decrement
✅ Search by date & time
✅ User profiles
✅ Deployment to cloud (Render / Vercel)