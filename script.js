// Sample candidates data (Replace with your actual data)
const candidates = [
    {
      id: 1,
      name: "John Doe",
      location: "New York",
      jobRole: "Software Engineer"
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "San Francisco",
      jobRole: "Data Scientist"
    },
    {
      id: 3,
      name: "Michael Johnson",
      location: "Chicago",
      jobRole: "Product Manager"
    }
  ];
  
  // Search button click event
  document.getElementById('searchButton').addEventListener('click', function (e) {
    e.preventDefault();
    const location = document.getElementById('location').value.toLowerCase();
    const jobRole = document.getElementById('jobRole').value.toLowerCase();
  
    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(candidate => {
      return (
        candidate.location.toLowerCase().includes(location) &&
        candidate.jobRole.toLowerCase().includes(jobRole)
      );
    });
  
    displayCandidates(filteredCandidates);
  });
  
  // Function to display the filtered candidates
  function displayCandidates(candidates) {
    const candidateList = document.getElementById('candidateList');
    candidateList.innerHTML = '';
  
    if (candidates.length === 0) {
      candidateList.innerHTML = '<p>No candidates found.</p>';
    } else {
      candidates.forEach(candidate => {
        const candidateItem = document.createElement('div');
        candidateItem.classList.add('candidate-item');
        candidateItem.innerHTML = `
          <h3>${candidate.name}</h3>
          <p><strong>Location:</strong> ${candidate.location}</p>
          <p><strong>Job Role:</strong> ${candidate.jobRole}</p>
        `;
        candidateList.appendChild(candidateItem);
      });
    }
  }
  