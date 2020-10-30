const fs = require('fs');
const path = require( 'path' );
const sharp = require('sharp');

const PNGCrop = require('png-crop');
const { WebClient } = require('@slack/web-api');

const {conversationId, TODAY_HK} = require('../config')

async function sendSlackMessage(job_screen_capture_path, jobsdb_link){
  const token = process.env.SLACK_TOKEN;

  var message_template=`
  *new job found ${TODAY_HK} *

  {jobsdb_link}
  `
  // const semiTransparentRedPng = await sharp(job_screen_capture_path)
  //   .extract({left:0,width:960,top:0,height:900})
  //   .toBuffer();

  // console.log(png_head_filepath)
  const web = new WebClient(token);

  await web.files.upload({
    channels: conversationId,
    file: fs.createReadStream(job_screen_capture_path),
    initial_comment: message_template.replace('{jobsdb_link}',jobsdb_link ),
    title: `new job screen capture ${TODAY_HK}`
    // filename: 'helloworld.png'
  })

}

module.exports={
  sendSlackMessage
}