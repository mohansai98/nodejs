const verifyRoles = (...allowedRoles)=>{
    return (req, res, next)=>{
        if(!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const result = req.roles.map(r=> rolesArray.includes(r)).find(val => val === true);
        if(!result) return res.sendStatus(401);
        next();
     }
}

module.exports = verifyRoles