document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId !== null) {
        try {
            const projects = JSON.parse(localStorage.getItem('blog'));
            const project = projects ? projects[projectId] : null;
        
        if (project) {
            document.getElementById("project-name").textContent = project.project;
            document.getElementById("project-description").textContent = project.description;
            document.getElementById("project-image").src = project.image;
            
            //Date
            document.getElementById("project-start").textContent = project.startDate;
            document.getElementById("project-end").textContent = project.endDate;
            document.getElementById("project-duration").textContent = project.duration;

            //Checked
            document.getElementById("swift").style.display = project.swift ? "block" : "none";
            document.getElementById("ruby").style.display = project.ruby ? "block" : "none";
            document.getElementById("phyton").style.display = project.phyton ? "block" : "none";
            document.getElementById("javascript").style.display = project.javascript ? "block" : "none";
            
            document.getElementById("swift-label").style.display = project.swift ? "block" : "none";
            document.getElementById("ruby-label").style.display = project.ruby ? "block" : "none";
            document.getElementById("phyton-label").style.display = project.phyton ? "block" : "none";
            document.getElementById("javascript-label").style.display = project.javascript ? "block" : "none";
        }
        } catch (error) {
            console.error("Error parsing or retrieving project data:", error);
        }
    }
});

