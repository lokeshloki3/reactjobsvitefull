import defaultjobs from '../jobs.json'

// Can also use localStorage instead of sessionStorage

export function getJobs() {
    let localJobs = JSON.parse(sessionStorage.getItem('jobs'));

    if (!localJobs || localJobs.length === 0) {
        localJobs = defaultjobs;

        sessionStorage.setItem('jobs', JSON.stringify(defaultjobs));

        // Reset the ID counter based on the max ID in default jobs
        // Ensure IDs are parsed as integers
        const maxDefaultId = Math.max(...defaultjobs.map(job => parseInt(job.id, 10)));
        // Store ID as string
        sessionStorage.setItem('id', maxDefaultId.toString());
    }

    return localJobs;
}


export function addJob(job) {
    const localJobs = JSON.parse(sessionStorage.getItem('jobs')) || [];
    
    // Get the current ID counter or fallback to '0' if undefined
    let id = parseInt(sessionStorage.getItem('id'), 10) || 0;
    
    // Create a new job with the next ID as s string
    // Convert ID to string
    const newJob = { ...job, id: (id + 1).toString() };
    localJobs.push(newJob);
    
    // Save the updated jobs and increment the ID counter
    sessionStorage.setItem('jobs', JSON.stringify(localJobs));
    sessionStorage.setItem('id', (id + 1).toString());  
}

export function removeJob(jobId) {
    const localJobs = JSON.parse(sessionStorage.getItem('jobs'));
     
    const newJobs = localJobs.filter(job => job.id != jobId.toString());

    sessionStorage.setItem('jobs', JSON.stringify(newJobs));
}


export function editJob(updatedJob) {
    const localJobs = JSON.parse(sessionStorage.getItem('jobs')) || [];

    // Find the index of the job to be updated
    const jobIndex = localJobs.findIndex(job => job.id === updatedJob.id);

    if (jobIndex !== -1) {
        // Update the job details
        localJobs[jobIndex] = updatedJob;
        sessionStorage.setItem('jobs', JSON.stringify(localJobs));
    } else {
        console.error(`Job with ID ${updatedJob.id} not found.`);
    }
}