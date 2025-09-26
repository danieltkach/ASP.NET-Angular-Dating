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
- User activity tracking

### Core Functionality
- **Member Profiles**: Complete user profiles with photos, location, and personal information
- **Photo Management**: Upload, set main photo, and delete photos via Cloudinary integration
- **Pagination System**: Efficient data loading with configurable page sizes and navigation
- **Advanced Filtering**: Filter members by age range, gender, and activity status
- **Like System**: Many-to-many relationship for member likes/dislikes
- **Messaging System**: Real-time messaging between members

### API Architecture
- RESTful API design with repository pattern
- Advanced Entity Framework relationships (one-to-one, one-to-many, many-to-many)
- Custom pagination with metadata (page count, total records, etc.)
- Action filters for automatic user activity logging
- Comprehensive error handling middleware
- Photo upload integration with Cloudinary

### Frontend Architecture
- **Modern Angular 20** with standalone components and signals
- **Component Communication**: Parent-child communication with events and ViewChild
- **HTTP Interceptors**: Automatic loading states and request caching
- **Custom Pipes**: Time-ago formatting and other data transformations
- **Reactive Forms**: Form validation and dynamic user inputs
- **Modal Management**: Filter modals with native HTML5 dialog elements
- **State Management**: Local state with signals and persistent localStorage

## Database Schema

### Core Entities

#### AppUser Entity
- `Id`: Unique identifier (GUID)
- `DisplayName`: User's display name
- `Email`: User's email address
- `PasswordHash`: Hashed password
- `PasswordSalt`: Password salt for security
- `ImageUrl`: Profile image URL
- One-to-one relationship with Member

#### Member Entity
- `Id`: Links to AppUser ID
- `DisplayName`: Member's display name
- `DateOfBirth`: Date of birth for age calculation
- `Gender`: Member's gender
- `City`, `Country`: Location information
- `Description`: Member bio/description
- `Created`, `LastActive`: Timestamp tracking
- `ImageUrl`: Profile photo URL
- One-to-many relationship with Photos
- Many-to-many relationships for Likes and Messages

#### Photo Entity
- `Id`: Unique identifier
- `Url`: Cloudinary image URL
- `PublicId`: Cloudinary public ID for deletion
- `MemberId`: Foreign key to Member
- Many-to-one relationship with Member

#### MemberLike Entity (Junction Table)
- `SourceMemberId`: Member who liked
- `TargetMemberId`: Member who was liked
- Composite primary key on both IDs
- Many-to-many relationship between Members

#### Message Entity
- `Id`: Unique identifier
- `SenderId`: Member who sent the message
- `RecipientId`: Member who received the message
- `Content`: Message text content
- `DateSent`: Timestamp of message
- `DateRead`: Timestamp when read (nullable)
- Foreign key relationships to Member entity

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