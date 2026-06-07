This is a project made for messaging with people securely

# Project F Chatting

### Folder Structure 
```
Project_F_Chatting/
│
├── Project_F_Chatting/                    # React Frontend
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── fonts/
│   │   │
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   │
│   │   ├── layouts/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── AuthLayout.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Dashboard/
│   │   │   └── NotFound/
│   │   │
│   │   ├── routes/
│   │   │   ├── router.tsx
│   │   │   ├── PrivateRoute.tsx
│   │   │   └── AdminRoute.tsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   └── useAxiosSecure.ts
│   │   │
│   │   ├── context/
│   │   │   └── AuthProvider.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── authService.ts
│   │   │   └── api.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── formatDate.ts
│   │   │   └── validators.ts
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   └── package.json
│
├── Project_F_Chatting_Server/                    # Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   └── userController.ts
│   │   │
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   └── Product.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   └── userRoutes.ts
│   │   │
│   │   ├── middlewares/
│   │   │   ├── verifyJWT.ts
│   │   │   └── errorHandler.ts
│   │   │
│   │   ├── services/
│   │   │   └── authService.ts
│   │   │
│   │   ├── utils/
│   │   │   └── generateToken.ts
│   │   │
│   │   └── app.ts
│   │
│   ├── server.ts
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```