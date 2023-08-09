import Distance from "../../models/distance.model.js";
import Sequelize from "sequelize";
import { calcDistance } from "../../utils/distance.js";
import { reverseGeocode } from "../../utils/location.js";

export async function goSomewhere(req, res) {
    try {
        const { currentLat, currentLong, endLat, endLong } = req.body;
        const { userId } = req.user;
        const from = await reverseGeocode(currentLat, currentLong);
        const to = await reverseGeocode(endLat, endLong);
        const distance = calcDistance(currentLat, currentLong, endLat, endLong);

        const newDistance = await Distance.create({ from, to, length: distance, userId }, { logging: false });

        res.status(201).json({ message: 'Success', newDistance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getDistance(req, res) {
    try {
        let { startDate, endDate } = req.body; // format 2023-01-01
        const { userId } = req.user;

        startDate = new Date(startDate);
        endDate = new Date(endDate);

        const distances = await Distance.findAll({ where: { userId, 
            createdAt: {
            [Sequelize.Op.between]: [startDate, endDate] 
            }}
        }, { logging: false });

        let total = 0;
        distances.forEach((a) => total += a.length);

        res.status(200).json({ message: 'Success', total: `${total} km` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}