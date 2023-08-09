import { sequelize } from "../database/index.js";
const port = process.env.PORT;

export async function bootstrap(app) {
    try {
        await sequelize.authenticate({ logging: false });
        await sequelize.sync({ alter: true, logging: false });
        
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`);
        })

    } catch (error) {
        console.log(error);
    }
};

