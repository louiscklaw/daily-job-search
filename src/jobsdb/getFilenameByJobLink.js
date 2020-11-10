const { consoleLogError } = require( "../config" )

function getFilenameByJobLink(job_link){
  // https://hk.jobsdb.com/hk/en/job/senior-engineer-quality-assurance-hse-over-salary-100003008009843?searchRequestToken=e0eea077-b27b-4904-8aa8-1a5e346e2974&amp;sectionRank=1&amp;jobId=100003008009843

  try {
    return job_link.match(/job\/(.*?)\?.*/)[1]
  } catch (error) {
    consoleLogError(`job_link: ${job_link}`)
    throw error
  }

}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  getFilenameByJobLink
}
