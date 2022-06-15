import { Request, Response } from "express";
import { connectDB } from "../database/schemas/user";

interface BodyRequest{
    id: number
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id }: BodyRequest = req.body;
    const db = await connectDB();
    try {
        await db.query("DELETE FROM users WHERE id=?;",
        [ id ]);
        res.send({status: 200, message: ":)"});
    } catch(e){
        res.send({ status: 401, message: ":("});
    };
};