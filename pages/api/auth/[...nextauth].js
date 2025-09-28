import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import clientPromise from "./lib/mongodb";
import db from "../../../utils/db";

// Kết nối database an toàn
db.connectDb().catch((error) => console.error("MongoDB connection error:", error));

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Email and password are required.");
          }
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("This email does not exist.");
          }
          if (!user.password) {
            throw new Error("Please enter your password");
          }
          const isMatch = await bcrypt.compare(credentials.password, user.password);
          if (!isMatch) {
            throw new Error("Email hoặc mật khẩu không đúng");
          }
          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error(error.message || "Internal server error.");
        }
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      try {
        const user = await User.findById(token.sub);
        if (!user) throw new Error("User not found.");
        session.user.id = token.sub || user._id.toString();
        session.user.name = user.name; // <-- Thêm dòng này để cập nhật tên
        session.user.role = user.role || "user";
        session.user.emailVerified = user.emailVerified || false;
        session.user.image = user.image;
        // Lấy các trường cá nhân trực tiếp từ userSchema
        session.user.gender = user.gender;
        session.user.dateOfBirth = user.dateOfBirth;
        session.user.phone = user.phone;
        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
  },
  pages: {
    signIn: "/dang-nhap",
    error: "/loi-dang-nhap",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET,
});

const signInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("Vui lòng nhập mật khẩu");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Email hoặc mật khẩu không đúng");
  }
  return user;
};
