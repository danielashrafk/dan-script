import { response } from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mongoose = require("mongoose");
// const request = require('request');
const fs = require('fs');
var formidable = require('formidable');
const speech = require('@google-cloud/speech');
const ytdl = require('ytdl-core');
let MediaSplit = require('media-split');
const { getAudioDurationInSeconds } = require('get-audio-duration');
import { nanoid } from 'nanoid'
import Transcript from '../models/transcript.js';
const moveFile = require('move-file');
// var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
// var fs = require('fs');
// var speech_to_text = new SpeechToTextV1({
//     username: 'INSERT YOUR USERNAME FOR THE SERVICE HERE',
//     password: 'INSERT YOUR PASSWORD FOR THE SERVICE HERE',
//     url: 'https://stream.watsonplatform.net/speech-to-text/api'
//   });
var cloudconvert = new (require('cloudconvert'))('NArlgPvtV41BZYv0tgsECWTq8JrqMzbtpdP8vgucf8VkvQFvFstSA7DnpB92J7k9');
// var cloudconvert = new (require('cloudconvert'))('NIF35Md5jiLH4iaF1AwbbbHEFTv2UUe7AqCa46uAhyVAKNQUZrUYRnSaZDfT0l5c');
// var cloudconvert = new (require('cloudconvert'))('hS6QA2e3qocRgNEUz6d293eyU5D7NUCHfjajMAfa8aetPdq83Ul7LAhyKEkc9J1K');



export const convertVideo = async (req,res) => {

    const body = req?.files?.file
    var uniqueName = nanoid();
    var uniqueName2 = nanoid();
    var uniqueParts = new Array;
    var flag = false;
    try{

        
     
     if(!body) {
          
          return res.status(500).send("No file uploaded");
          
    }
     else{
          
      
     var test = await (async () => {
        await body.mv(`${uniqueName}.mp4`);
     
              //  res.json({fileName: `${uniqueName}.mp4`, filePath: `${uniqueName}.mp4`});
          console.log("FILE MOOOVED!!!!!!!!!!!");
          flag = true;
          return true;
        })();

     // (async () => {
     //      await moveFile(`${uniqueName2}.mp4`, `${uniqueName}.mp4`);
     //      console.log('The file has been moved');
     //  })();
     

// var k = 0;
// for(k = 0; k < 100000000000; k++){

// }
        
          
    // await fs.createReadStream('outputfile.mp3')
    //       .pipe(cloudconvert.convert({
    //           "inputformat": "mp3",
    //           "outputformat": "wav",
    //           "input": "upload",

    //       }))
    //       .pipe(fs.createWriteStream('outputfile.wav'))
    //       .on('finish', function(){
    //           wait = 1;  
    //       })
  
     if(flag){
          
    await fs.createReadStream(`${uniqueName}.mp4`)
    .pipe(cloudconvert.convert({
        "inputformat": "mp4",
        "outputformat": "mp3",
        "input": "upload",

    }))
    .pipe(fs.createWriteStream(`${uniqueName}.mp3`))
    .on('finish', function(){
     
         res.status(200).send("Done");  
    })
       
}
// await fs.createReadStream(`${uniqueName}.mp4`)
// .pipe(cloudconvert.convert({
//     "inputformat": "mp4",
//     "outputformat": "mp3",
//     "input": "upload",

// }))
// .pipe(fs.createWriteStream(`${uniqueName}.mp3`))
// .on('finish', function(){
 
//      res.status(200).send("Done");  
// })
   




    

    // var audioDuration;
    
    // await getAudioDurationInSeconds(`${uniqueName}.mp3`).then((duration) => {
    //   audioDuration = duration;
    //   // console.log(audioDuration)
    // });
    // // console.log(audioDuration);






    // const audioDivision = (audioDuration / 60) - ((audioDuration / 60) % 1);
    // const audioRemainder  = ((audioDuration / 60) % 1);
    // var i;
    // for(i = 0; i <= audioDivision; i++){
    //   if(i === audioDivision){
    //   uniqueParts.push(nanoid());
    //   let split = new MediaSplit({ input: `${uniqueName}.mp3`, sections: [`[0${i}:00]  ${uniqueParts[i]}`] });

    //   split.parse().then((sections) => {
    //     for (let section of sections) {
    //       console.log(section.name);      // filename
    //       console.log(section.start);     // section start
    //       console.log(section.end);       // section end
    //       console.log(section.trackName); // track name
    //       fs.createReadStream(`${section.trackName}.mp3`)
    //       .pipe(cloudconvert.convert({
    //           "inputformat": "mp3",
    //           "outputformat": "flac",
    //           "input": "upload"
    //       }))
    //       .pipe(fs.createWriteStream(`${section.trackName}.flac`));
    //     }
    //   });


    // }
    // else {
    //   uniqueParts.push(nanoid());
    //  let split = new MediaSplit({ input: 'outputfile.mp3', sections: [`[0${i}:00 - 0${i}:59] ${uniqueParts[i]}`] });

    //  split.parse().then((sections) => {
    //       for (let section of sections) {
    //         console.log(section.name);      // filename
    //         console.log(section.start);     // section start
    //         console.log(section.end);       // section end
    //         console.log(section.trackName); // track name
    //         fs.createReadStream(`${section.trackName}.mp3`)
    //         .pipe(cloudconvert.convert({
    //             "inputformat": "mp3",
    //             "outputformat": "flac",
    //             "input": "upload"
    //         }))
    //         .pipe(fs.createWriteStream(`${section.trackName}.flac`));
    //       }
    //     });


    //   }
    // }

        


    // var trans;
    // var timeStamps = new Array;
    // var words = new Array;
    //  var y;
    //  for(y = 0; y <= audioDivision; y++){
      
    //      const client = new speech.SpeechClient();
         
    //      const filename = `${uniqueParts[y]}.flac`;

    //      const file = fs.readFileSync(filename);
         
    //      const audioBytes = file.toString('base64');
    //      const audio = {
    //           content: audioBytes
    //      };
    //      const config = {
    //       //     encoding: 'LINEAR16',
    //       enableWordTimeOffsets: true,
    //           sampleRateHertz: 44100,
    //           languageCode: 'en-US',
    //           audioChannelCount: 2,
    //      };
    //      const request = {
    //           audio: audio,
    //           config: config
    //      };
    //      const [operation] = await client.longRunningRecognize(request);
    //      const [response] = await operation.promise();
    //     //  const transcription = response.results.map(result => 
    //     //        result.alternatives[0].transcript).join('\n');
    //     //       //  console.log(`Transcription: ${transcription}`);
    //     //       trans = transcription;
              
    //           response.results.map(result => {
    //             result.alternatives[0].words.forEach(wordInfo => {
    //               // NOTE: If you have a time offset exceeding 2^32 seconds, use the
    //               // wordInfo.{x}Time.seconds.high to calculate seconds.
                  
    //               const startSecs =
    //                 `${wordInfo.startTime.seconds}` +
    //                 '.' +
    //                 wordInfo.startTime.nanos / 100000000;
    //               const endSecs =
    //                 `${wordInfo.endTime.seconds}` +
    //                 '.' +
    //                 wordInfo.endTime.nanos / 100000000;
    //               // console.log(`Word: ${wordInfo.word}`);
    //               // console.log(`\t ${startSecs} secs - ${endSecs} secs`);
    //               timeStamps.push(startSecs);
    //               words.push(wordInfo.word);
    //             });


    //           });
    //      }
    //         res.status(200).json({words, timeStamps});
            // console.log(timeStamps);
            // console.log(words);
            // console.log(trans);
            // console.log("hi");


     }
   
    }
    
   catch(error){
        console.log("HI");
        console.log(error.message);
        res.status(500).send('Something went wrong.');
        
   }


};




export const uploadVideo = async (req,res) => {

    const body = req?.files?.file
    var uniqueName = nanoid();
    
    try{

       
     
     if(!body) {
          
          return res.status(500).send("No video uploaded");
          
    }
     else{
          
      
     
        body.mv(`${uniqueName}.mp4`, err => {

            if(err) {
                console.error(err);
                return res.status(500).send("Something went wrong")
            }
            res.status(200).send(uniqueName);
        });
        
     }
   
    }
    
   catch(error){
        
        console.log(error.message);
        res.status(500).send('Something went wrong.');
        
   }


};

export const videoToAudio = async (req,res) => {


    try{
        const body = req.body['uniqueName'];
        
    await fs.createReadStream(`${body}.mp4`)
    .pipe(cloudconvert.convert({
        "inputformat": "mp4",
        "outputformat": "mp3",
        "input": "upload",

    }))
    .pipe(fs.createWriteStream(`${body}.mp3`))
    .on('finish', function(){
     
         res.status(200).send("Done");  
    })

     }
   
    

    
   catch(error){
        console.log(error.message);
        res.status(500).send('Something went wrong.');
        
   }


};

export const optimiseVideo = async (req,res) => {

   
    try{
        const body = req.body['uniqueName'];
        
        var audioDuration;
        
        await getAudioDurationInSeconds(`${body}.mp3`).then((duration) => {
        audioDuration = duration;
        
        
        });
        



        var audioTime = 0;
        var completedParts = 0;
        var uniqueParts = new Array;
        const audioDivision = (audioDuration / 60) - ((audioDuration / 60) % 1);
        const audioRemainder  = ((audioDuration / 60) % 1);
        if (audioRemainder === 0) {
            audioTime = audioDivision;
        }
        else{
            audioTime = audioDivision + 1;
        }
        var i;
        for(i = 0; i <= audioDivision; i++){
        if(i === audioDivision){
        console.log(i);
        uniqueParts.push(`${body}${i}`);
        let split;
        if(i > 9) {
        split = new MediaSplit({ input: `${body}.mp3`, sections: [`[${i}:00]  ${uniqueParts[i]}`] });
        }
        else{
        split = new MediaSplit({ input: `${body}.mp3`, sections: [`[0${i}:00]  ${uniqueParts[i]}`] });
        }
        split.parse().then((sections) => {
            for (let section of sections) {
            try{
            // console.log(section.name);      // filename
            // console.log(section.start);     // section start
            // console.log(section.end);       // section end
            // console.log(section.trackName); // track name
            fs.createReadStream(`${section.trackName}.mp3`)
            .pipe(cloudconvert.convert({
                "inputformat": "mp3",
                "outputformat": "flac",
                "input": "upload"
            }))
            .pipe(fs.createWriteStream(`${section.trackName}.flac`))
            .on('finish', function(){
                completedParts++;
                if(completedParts === audioTime){
                for(let element of uniqueParts){

                    console.log(element);
                    fs.unlink(`${element}.mp3`, (err => {
                        if (err) console.log(err);
                        }));
                }
                fs.unlink(`${body}.mp3`, (err => {
                    if (err) console.log(err);
                    }));
                fs.unlink(`${body}.mp4`, (err => {
                    if (err) console.log(err);
                    }));
                res.status(200).send(uniqueParts);  
            }
           });
            }
            catch(error){
                console.log(error.message);
                res.status(500).send('Something went wrong.');
            }
            }
        });


        }
        else {
        console.log(i);
        uniqueParts.push(`${body}${i}`);
        let split;
        if(i > 9) {
            split = new MediaSplit({ input: `${body}.mp3`, sections: [`[${i}:00 - ${i}:59] ${uniqueParts[i]}`] });
        }
        else{
            split = new MediaSplit({ input: `${body}.mp3`, sections: [`[0${i}:00 - 0${i}:59] ${uniqueParts[i]}`] });
        }
        split.parse().then((sections) => {
            for (let section of sections) {
                try{

                
                // console.log(section.name);      // filename
                // console.log(section.start);     // section start
                // console.log(section.end);       // section end
                // console.log(section.trackName); // track name
                fs.createReadStream(`${section.trackName}.mp3`)
                .pipe(cloudconvert.convert({
                    "inputformat": "mp3",
                    "outputformat": "flac",
                    "input": "upload"
                }))
                .pipe(fs.createWriteStream(`${section.trackName}.flac`))
                .on('finish', function(){
                    completedParts++;
                    if(completedParts === audioTime){
                    for(let element of uniqueParts){
    
                        console.log(element);
                        fs.unlink(`${element}.mp3`, (err => {
                            if (err) console.log(err);
                            }));
                    }
                    fs.unlink(`${body}.mp3`, (err => {
                        if (err) console.log(err);
                        }));
                    fs.unlink(`${body}.mp4`, (err => {
                        if (err) console.log(err);
                        }));
                    res.status(200).send(uniqueParts);  
                }
               });
            }
            catch(error){
                console.log(error.message);
                res.status(500).send('Something went wrong.');
            }
            }
            });


        }
        }



     }
   
    

    
   catch(error){
        console.log(error.message);
        res.status(500).send('Something went wrong.');
        
   }


};

export const transcribeVideo = async (req,res) => {


    try{

    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    
    var isYoutube = false;
    const body = req.body['optimiseVideoData'];
  
    const language = req.body['language'];

    const channel = req.body['channel'];
    const url = req.body['youtubeURL'];
    if(url) isYoutube = true;
    console.log(body);
    console.log(language);
    console.log(channel);
    var timeStamps = new Array;
    var words = new Array;
    var realTime = new Array;
     var y;
    var counter=-1;
     for(y = 0; y < body.length; y++){
         counter++;
         const client = new speech.SpeechClient();
         
         const filename = `${body[y]}.flac`;
         console.log(filename);
         const file = fs.readFileSync(filename);
         const audioBytes = file.toString('base64');
         const audio = {
              content: audioBytes
         };
         
         const config = {
              encoding: 'FLAC',
          enableWordTimeOffsets: true,
              sampleRateHertz: 44100,
              languageCode: language,
              audioChannelCount: channel,
         };
        
         const request = {
              audio: audio,
              config: config
         };
         
        //  const [operation] = await client.longRunningRecognize(request);
         
         const [response] = await client.recognize(request);
            
              response.results.map(result => {
                
                result.alternatives[0].words.forEach(wordInfo => {
                  // NOTE: If you have a time offset exceeding 2^32 seconds, use the
                  // wordInfo.{x}Time.seconds.high to calculate seconds.
                  
                //   const startSecs = 
                //     `${wordInfo.startTime.seconds}` +
                //     '.' +
                //     wordInfo.startTime.nanos / 100000000;
                var startSecs = `${wordInfo.startTime.seconds}`;
                if(startSecs<10) startSecs=`0${startSecs}`;
                var temp;
                var hours;
                var minutes;
                if(counter > 59){
                    hours = counter / 60;
                    minutes = counter % 60;
                    if(hours < 10) hours = `0${hours}`;
                    if(minutes < 10) minutes = `0${minutes}`;
                    temp = `${hours}:${minutes}:${startSecs}`;
                }
               else{
                if(counter<10) temp = `00:0${counter}:${startSecs}`;
                else temp = `00:${counter}:${startSecs}`;
               }
                var temp2 = 0;
                temp2 = temp2 + parseInt(wordInfo.startTime.seconds) + (counter*60);
                  timeStamps.push(temp2);
                  words.push(wordInfo.word);
                  realTime.push(temp);
                });

                
              });
         }



         for(let element of body){
    
            fs.unlink(`${element}.flac`, (err => {
                if (err) console.log(err);
            }));
    }   
        if(isYoutube){
            const newTranscript = new Transcript({video: url, transcription: words, timing: timeStamps, timing2: realTime});
            await newTranscript.save();
           
        }
         res.status(200).json([words, timeStamps, realTime]);

        

     
   
    }
    
   catch(error){

        console.log(error.message);
        const body = req.body['optimiseVideoData'];
        const channel = `${req.body['channel']}`;
        const one = `1`;
        const two = `2`;
        const three = `3`;
        const four = `4`;
        var m1 = error.message.replaceAt(41, channel);
        m1= m1.replaceAt(131, one);
        var m2 = error.message.replaceAt(41, channel);
        m2= m2.replaceAt(131, two);
        var m3 = error.message.replaceAt(41, channel);
        m3= m3.replaceAt(131, three);
        var m4 = error.message.replaceAt(41, channel);
        m4= m4.replaceAt(131, four);
        if(error.message === m1 || error.message === m2 || error.message === m3 || error.message === m4){
            
            res.status(500).send("Invalid number of channels.");
        }

        else{
            res.status(500).send('Something went wrong.');
        }

        for(let element of body){
    
            fs.unlink(`${element}.flac`, (err => {
                if (err) console.log(err);
            }));
    }
   }

   


};  


export const uploadYoutubeVideo = async (req,res) => {

    var body = req.body['youtubeURL'];
    var videoID;
    var uniqueName = nanoid();
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = body.match(regExp);
    if (match && match[2].length == 11) {
    videoID = match[2];
    } else {
        return res.status(500).send('Invalid YouTube URL');
    }
    console.log(body);
    try{

       
     
     if(Object.keys(body).length === 0) {
          
          return res.status(500).send("Please enter a YouTube URL");
          
    }
     else{
          
        
     
        const {
            player_response: {
              videoDetails: { title, author },
            },
          } = await ytdl.getBasicInfo(body);

          return res.status(200).send({title, author});
   
    }
}
    
   catch(error){
        
        console.log(error.message);
        if(error.message === "Video unavailable" || error.message === `Video id (${videoID}) does not match expected format (/^[a-zA-Z0-9-_]{11}$/)`){
            res.status(500).send('Invalid YouTube URL');
        }
        else{
            res.status(500).send('Something went wrong.');
        }
        
   }


};

export const youtubeToAudio = async (req,res) => {

    var uniqueName = nanoid();
    var body = req.body['youtubeURL'];

    console.log(body);
    try{
        
        ytdl(body, {quality: 18})
        .pipe(fs.createWriteStream(`${uniqueName}.mp3`))            
        .on('finish', function(){
     
            res.status(200).send(uniqueName);
       })
         
}
    
   catch(error){
        
        console.log(error.message);
        
      
        res.status(500).send('Something went wrong.');
        
        
   }


};

export const optimiseYoutube = async (req,res) => {

   
    try{
        const body = req.body['youtubeToAudioData'];
        
        var audioDuration;
        
        await getAudioDurationInSeconds(`${body}.mp3`).then((duration) => {
        audioDuration = duration;
        
        
        });
        



        var audioTime = 0;
        var completedParts = 0;
        var uniqueParts = new Array;
        const audioDivision = (audioDuration / 60) - ((audioDuration / 60) % 1);
        const audioRemainder  = ((audioDuration / 60) % 1);
        if (audioRemainder === 0) {
            audioTime = audioDivision;
        }
        else{
            audioTime = audioDivision + 1;
        }
        var i;
        for(i = 0; i <= audioDivision; i++){
        if(i === audioDivision){
        console.log(i);
        uniqueParts.push(`${body}${i}`);
        let split;
        if(i > 9) {
        split = new MediaSplit({ input: `${body}.mp3`, sections: [`[${i}:00]  ${uniqueParts[i]}`] });
        }
        else{
        split = new MediaSplit({ input: `${body}.mp3`, sections: [`[0${i}:00]  ${uniqueParts[i]}`] });
        }
        split.parse().then((sections) => {
            for (let section of sections) {
            try{
            // console.log(section.name);      // filename
            // console.log(section.start);     // section start
            // console.log(section.end);       // section end
            // console.log(section.trackName); // track name
            fs.createReadStream(`${section.trackName}.mp3`)
            .pipe(cloudconvert.convert({
                "inputformat": "mp3",
                "outputformat": "flac",
                "input": "upload"
            }))
            .pipe(fs.createWriteStream(`${section.trackName}.flac`))
            .on('finish', function(){
                completedParts++;
                if(completedParts === audioTime){
                for(let element of uniqueParts){

                    console.log(element);
                    fs.unlink(`${element}.mp3`, (err => {
                        if (err) console.log(err);
                        }));
                }
                fs.unlink(`${body}.mp3`, (err => {
                    if (err) console.log(err);
                    }));

                res.status(200).send(uniqueParts);  
            }
           });
            }
            catch(error){
                console.log(error.message);
                res.status(500).send('Something went wrong.');
            }
            }
        });


        }
        else {
        console.log(i);
        uniqueParts.push(`${body}${i}`);
        let split;
        if(i > 9) {
            split = new MediaSplit({ input: `${body}.mp3`, sections: [`[${i}:00 - ${i}:59] ${uniqueParts[i]}`] });
        }
        else{
            split = new MediaSplit({ input: `${body}.mp3`, sections: [`[0${i}:00 - 0${i}:59] ${uniqueParts[i]}`] });
        }
        split.parse().then((sections) => {
            for (let section of sections) {
                try{

                
                // console.log(section.name);      // filename
                // console.log(section.start);     // section start
                // console.log(section.end);       // section end
                // console.log(section.trackName); // track name
                fs.createReadStream(`${section.trackName}.mp3`)
                .pipe(cloudconvert.convert({
                    "inputformat": "mp3",
                    "outputformat": "flac",
                    "input": "upload"
                }))
                .pipe(fs.createWriteStream(`${section.trackName}.flac`))
                .on('finish', function(){
                    completedParts++;
                    if(completedParts === audioTime){
                    for(let element of uniqueParts){
    
                        console.log(element);
                        fs.unlink(`${element}.mp3`, (err => {
                            if (err) console.log(err);
                            }));
                    }
                    fs.unlink(`${body}.mp3`, (err => {
                        if (err) console.log(err);
                        }));


                    res.status(200).send(uniqueParts);  
                }
               });
            }
            catch(error){
                console.log(error.message);
                res.status(500).send('Something went wrong.');
            }
            }
            });


        }
        }



     }
   
    

    
   catch(error){
        console.log(error.message);
        res.status(500).send('Something went wrong.');
        
   }


};

export const checkVideo = async (req,res) => {

    const body = req?.files?.file
    
    
    try{

       
     
     
    
          
      
        var video =await Transcript.findOne({video:req.body['youtubeURL']});
        if(!video) return res.status(200).send('Could not find video');
        else return res.status(200).send(video);
        
            
        
        
     
   
    }
    
   catch(error){
        
        console.log(error.message);
        res.status(500).send('Something went wrong.');
        
   }


};