const fs = require('fs');

const test_in_html = fs.readFileSync('./jobs_qa_list.html',{encoding:'utf-8'})

// console.log(test_in_html);

var raw_job_links = test_in_html.match(/href="(\/hk\/en\/job\/.+?)"/g);

var job_link_and_jobid = raw_job_links.map(x => {
  var job_link =x.replace('href="','https://hk.jobsdb.com').replace('"','')
  var job_id = x.match(/jobId=(\d+)/)[1]
  var job_screencapture_filename = `jobs_sc_${job_id}.png`
  return {
    job_link,
    job_id,
    job_screencapture_filename
  }
})

for (i=0;i<job_link_and_jobid.length;i++){
  var active_job_link = job_link_and_jobid[i]

  console.log(`capture job ${active_job_link.job_link}`)
  console.log(`saving screencapture ${active_job_link.job_screencapture_filename}`)

  // console.log(job_link_and_jobid[1])
  break
}
