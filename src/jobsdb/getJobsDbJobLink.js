
function getJobsDbJobLink(jobsdb_jobid){
  return `https://hk.jobsdb.com/hk/search-jobs/${jobsdb_jobid}`;
}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  helloworld,
  getJobsDbJobLink
}