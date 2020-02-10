const axios = require('axios');
const Dev = require('../models/Dev');

const parserStringAsArray = require('../utils/parserStringAsArray');
module.exports = {
    async index(req, res){
      return res.json(await Dev.find());
    },
    async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    let dev = await Dev.findOne({github_username});

    if(!dev)
    {
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        const {name = login, bio, avatar_url} = apiResponse.data;
        const techsArray = parserStringAsArray(techs);
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };
       
        dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArray,
            location
        });
    }

    return res.json(dev);
    }
};