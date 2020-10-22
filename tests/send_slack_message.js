const { WebClient } = require('@slack/web-api');
const fs = require('fs');


// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = '_debug';

async function sendNewJobMessage(job_screen_capture_path){

  const upload_img_result = await web.files.upload({
    channels: conversationId,
    file: fs.createReadStream(job_screen_capture_path),
    initial_comment:"*new job found*",
    title: "new job screen capture"
    // filename: 'helloworld.png'
  })

  // console.log(upload_img_result.ok)
  const upload_img_url = upload_img_result.file.permalink;


  // `res` contains information about the posted message

}

sendNewJobMessage('./tests/helloworld.png')