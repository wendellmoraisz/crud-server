import { Request, Response } from "express";
import { connectDB } from "../database/schemas/user";

interface BodyRequest{
    name: string
    email: string
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email }: BodyRequest = req.body;
    const db = await connectDB();

    db.query("INSERT INTO users (name, email) VALUES(?,?)",
        [req.body.name, req.body.email]);
};