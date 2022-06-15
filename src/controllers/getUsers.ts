import { Request, Response } from "express";
import { connectDB } from "../models/dbConnection";

export const getUsers = async (req: Request, res: Response) => {
    const db = await connectDB();
    try {
        const [response] = await db.query("SELECT * FROM users");
        res.send(response);
    } catch(e){
        res.send({status: 401, message: e});
    };
};