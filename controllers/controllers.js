import { Place } from "../models/place.js";
import { PlaceText } from "../models/placeText.js";
import { monitorScraping } from "../Scraper/monitor.js";
import fs from 'fs';

const PlacesData = fs.readFileSync('./DB/places.json', 'utf8');
const PlacesObj = JSON.parse(PlacesData);



const getPlaceInfo = async (req, res) => {
    try {
        const { name } = req.params;
        const allPlacesText = await PlaceText.find({ "placeName": { "$regex": `${name}` } });
        res.send(allPlacesText);
    } catch (e) {
        res.send({ error: e.message })
    }
}
const getAllPlaces = async (req, res) => {
    try {
        const allPlaces = await Place.find();
        res.send(allPlaces)
    } catch (e) {
        res.send({ error: e.message })
    }
}



const startScrapping = async (req, res) => {
    try {
        console.log(PlacesObj)
        monitorScraping(PlacesObj);

    } catch (e) {
        res.send({ nooooo: e.message })
    }
}

export { getAllPlaces, getPlaceInfo,startScrapping };