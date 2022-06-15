import { Request, Response } from "express";
import { connectDB } from "../database/schemas/user";

interface BodyRequest {
    name: string
    email: string
    id: number
}

export const updateUser = async (req: Request, res: Response) => {
    const { name, email, id }:BodyRequest = req.body;
    const db = await connectDB();
    try {
        await db.query("UPDATE users SET name=?, email=? WHERE id=?",
        [name, email, id]);
        res.send({status: 200, message: "user successful updated"})
    } catch(e){
        res.send({status: 401, message: e});
    }
};