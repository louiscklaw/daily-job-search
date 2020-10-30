
function getFilenameByJobLink(job_link){
  // https://hk.jobsdb.com/hk/en/job/senior-engineer-quality-assurance-hse-over-salary-100003008009843?searchRequestToken=e0eea077-b27b-4904-8aa8-1a5e346e2974&amp;sectionRank=1&amp;jobId=100003008009843

  return job_link.match(/job\/(.*?)\?search.*/)[1]
}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  getFilenameByJobLink
}