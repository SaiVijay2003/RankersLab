import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { signUpSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for user signup
  app.post("/api/signup", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = signUpSchema.parse(req.body);
      
      // Create a new user in the storage
      const newUser = await storage.createUser({
        username: validatedData.email, // Use email as username
        password: validatedData.password,
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        grade: validatedData.grade
      });
      
      // Return success response
      res.status(201).json({
        message: "Sign-up successful!",
        user: {
          id: newUser.id,
          fullName: newUser.fullName,
          email: newUser.email
        }
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
