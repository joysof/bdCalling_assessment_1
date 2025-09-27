import jwt from 'jsonwebtoken'


const userAuth =async (req ,res , next) => {
    const token = req.header("authorization")?.replace("Bearer " ,"")
    if (!token) {
    return res.status(401).json({message : "no authorize login agin"})        
    }
    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message : "token is not valid"})
    }
}


export default userAuth