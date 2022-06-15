import { Request, Response } from "express";
import { connectDB } from "../models/dbConnection";

interface BodyRequest{
    name: string
    email: string
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email }:BodyRequest = req.body;
    const db = await connectDB();
    try {
        await db.query("INSERT INTO users (name, email) VALUES(?,?)",
            [name, email]);
        res.send({status: 200, message: "usuário registrado com sucesso!"});
    } catch(e) {
        res.send({status: 400, message: e});
    };
};