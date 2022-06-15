import { Request, Response } from "express";
import { connectDB } from "../models/dbConnection";

interface BodyRequest{
    id: number
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id }: BodyRequest = req.body;
    const db = await connectDB();
    try {
        await db.query("DELETE FROM users WHERE id=?;",
        [ id ]);
        res.send({status: 200, message: "user successful deleted"});
    } catch(e){
        res.send({ status: 400, message: e});
    };
};