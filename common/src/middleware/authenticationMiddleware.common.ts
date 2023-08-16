import { Request, Response, NextFunction } from "express";

type AuthenticateUserOptions = {
    req: Request;
    res: Response;
    next: NextFunction;
}

const authenticateUser  = ({ req, res, next }: AuthenticateUserOptions) => {
    const username = req.headers['username'];
    const password = req.headers['password'];

    if (username === process.env.MQ_USERNAME && password === process.env.MQ_PASSWORD) {
        next();
    } 

    return res.status(401).json({ error: 'Unauthorized' });
}

export { authenticateUser }
