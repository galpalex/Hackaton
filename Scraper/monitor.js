import { scrapeWeb } from './scraper.js';
import { ToadScheduler , SimpleIntervalJob , AsyncTask } from 'toad-scheduler'
import { Place } from '../models/place.js';
import { PlaceText } from '../models/placeText.js';

// in this function we iterate over all places and start the scraper for each place urls

// const scheduleScrape = async () => {    
//     const scheduler = new ToadScheduler();
//     const task = new AsyncTask('scrape websites', await postScraping(await taskTogetAllPlaces()));
//     const job = new SimpleIntervalJob({ days : 7 }, task)
//     scheduler.addSimpleIntervalJob(job)
//     scheduler.stop();
// }

// const taskTogetAllPlaces= async()=>{
//    const data=await Place.find();
//    return data

// }

// const postScraping=async(data)=>{
//     let res=await PlaceText.deleteMany({});
//     const result=await monitorScraping(data);
//     return result;
// }



//  console.log(scheduleScrape());

const monitorScraping = async (placesArray) => {
    try {
            placesArray.map( async (place) => {
                for (let i = 0 ; i< place.urls.length ; i++ ) {
                    const scrapedWebText = await scrapeWeb(place.name + i , place.urls[i].link)
                    console.log(scrapedWebText)
                }
            })
    } catch (e) {
        throw new Error(e)
    }

}


export { monitorScraping };

