# ASP.NET Core and Angular Practice Project

A full-stack web application built as part of learning ASP.NET Core and Angular development, featuring user authentication and member management functionality.

## Project Structure

```
practice/
├── API/                    # ASP.NET Core Web API
├── client/                 # Angular Frontend Application
├── practice.sln           # Visual Studio Solution File
└── README.md              # This file
```

## Technologies Used

### Backend (API)

- **Framework**: ASP.NET Core 9.0
- **Database**: SQLite with Entity Framework Core 9.0.8
- **Authentication**: JWT Bearer Authentication
- **Security**:
  - Microsoft.AspNetCore.Authentication.JwtBearer 9.0.9
  - Microsoft.IdentityModel.Tokens 8.14.0
  - System.IdentityModel.Tokens.Jwt 8.14.0
- **ORM**: Entity Framework Core with SQLite provider
- **Development Features**:
  - CORS enabled for Angular frontend
  - Hot reload and development tools

### Frontend (Client)

- **Framework**: Angular 20.3.0 (Latest)
- **Language**: TypeScript 5.9.2
- **Styling**:
  - Tailwind CSS 4.1.13
  - DaisyUI 5.1.12 (Component library)
- **Development Tools**:
  - Angular CLI 20.3.1
  - Prettier for code formatting
  - SSL enabled for development (HTTPS)
- **Testing**:
  - Jasmine 5.9.0
  - Karma 6.4.0
- **Architecture**:
  - Reactive Forms
  - RxJS 7.8.0 for reactive programming
  - Standalone components (modern Angular approach)

## Key Features

### Authentication System
- User registration and login
- JWT token-based authentication
- Password hashing and salting
- Secure token validation

### API Endpoints
- Account management (registration/login)
- Members management
- Weather forecast (sample endpoint)
- RESTful API design with base controller

### Frontend Features
- Modern Angular 20 with standalone components
- Responsive design with Tailwind CSS and DaisyUI
- SSL-enabled development server
- TypeScript strict mode enabled
- Optimized build configuration

## Database Schema

### AppUser Entity
- `Id`: Unique identifier (GUID)
- `DisplayName`: User's display name
- `Email`: User's email address
- `PasswordHash`: Hashed password
- `PasswordSalt`: Password salt for security

## Development Setup

### Prerequisites
- .NET 9.0 SDK
- Node.js (for Angular)
- SQLite

### API Setup
```bash
cd API
dotnet restore
dotnet run
```

### Client Setup
```bash
cd client
npm install
npm start
```

The application will run with:
- API: `https://localhost:5001` (or configured port)
- Client: `https://localhost:4200`

## Security Features

- JWT token authentication
- Password hashing with salt
- CORS configuration for secure cross-origin requests
- HTTPS enabled for development
- Token validation with symmetric security key

## Development Tools

- **Code Formatting**: Prettier with Angular-specific configuration
- **SSL Certificates**: Local development certificates for HTTPS
- **Hot Reload**: Both API and client support hot reload during development
- **Testing**: Comprehensive testing setup with Jasmine and Karma

This project demonstrates modern full-stack development practices with ASP.NET Core and Angular, implementing secure authentication and following current best practices for both backend and frontend development.