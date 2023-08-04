const { ObjectId } = require("mongodb")
const mongo = require("../../config/database")
const { db } = require("../../config/database")

class UrlController {
    /**
     * @param req request body
     * @param res callback response object
     * @description Method to shorten received url
     * @date 03 august 2023
     * @updated 03 august 2023
     */
    static async shortenURL(req, res) {
        const { url } = req.body

        const newDoc = await db.collection("url_info").insertOne({ url })

        if (newDoc.acknowledged) {
            return res.status(200).json({ newURL: `localhost:3000/redirect/${newDoc.insertedId}` })
        } else return res.status(500)
    }

    /**
     * @param req request body
     * @param res callback response object
     * @description Method to redirect user to given url
     * @date 03 august 2023
     * @updated 03 august 2023
     */
    static async redirectURL(req, res) {
        const { id } = req.params
        try {
            if (id) {
                const objectId = new ObjectId(id)
                const long_link = await db.collection("url_info").findOne({ _id: objectId })

                if (long_link) {
                    return res.header("Access-Control-Allow-Origin", "*").status(200).json({ url: long_link.url })
                } else return res.status(500)
            } else return res.status(500)
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
}
module.exports = UrlController
