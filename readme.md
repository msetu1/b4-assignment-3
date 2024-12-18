# Hello !!

## This is setu Akther

Please take a look at my README file, and if there are any mistakes or shortcomings, kindly point them out with forgiveness and understanding.

# Blog Project

## Overview

The goal of this assignment is to develop a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: Admin and User. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

---

## Features

1. **User Roles**:

i. **Admin**:

- Will be created manually in the database with predefined credentials.
- Can delete any blog.
- Can block any user by updating a property isBlocked.
- Cannot update any blog.

2. **User**:

- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.
- Cannot perform admin actions.

3. **Authentication & Authorization**:

- Authentication:
  Users must log in to perform write, update, and delete operations.

- Authorization:
  Admin and User roles must be differentiated and secured.

4. **Blog API**:

---

## Technologies

- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose

## Project Setup

1. Setup

   ```
   npm init -y
   ```

   ```
   npm i express cors dotenv
   ```

   ```
   npm install typescript --save-dev
   ```

   ```
   npm install mongoose --save
   ```

   ```
   npm i ts-node-dev --save-dev
   ```

   ```
   tsc -init
   ```

2. Typescript related setup----

   ```
   npm i --save-dev @types/node
   ```

   ```
   npm i --save-dev @types/express
   ```

   ```
   npm i --save-dev @types/cors
   ```

3. eslint and prettier setup----

   ```
   npm i -D eslint@9.14.0 @eslint/js @types/eslint__js typescript typescript-eslint
   ```

   ```
   npm i -D eslint@9.14.0
   ```

   ```
   npm i -D --exact prettier
   ```

4. Validation ---

   ```
   npm i zod
   ```

5. bcrypt install:

   ```
   npm i bcrypt
   ```

   ```
   npm i --save-dev @types/bcrypt
   ```

6. jwt install:

   ```
   npm i jsonwebtoken
   ```

   ```
   npm i --save-dev @types/jsonwebtoken
   ```
