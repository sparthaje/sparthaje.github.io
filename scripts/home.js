// Parse markdown content
async function loadContent() {
    try {
        const text = `# Biography 
Hi, I'm Shreepa. I like to build autonomous systems that reason and adapt in the real world. Currently, I work on self-driving at NVIDIA. Previously, I worked on autonomous race-cars and quadrotors at the University of Virginia. \\\\

My research interests include: collaboration within self-driving fleets, multi-robot manipulation, and developing intuition through repeated experience. 

# Research

## BoundaryPredictor: Imitating Cost-Minimized Trajectory Sampling for Autonomous Drone Racing

- URL: pages/minsnapimitation/index.html
- Date: May, 2024
- Tags: Capstone, Motion Planning, Drones

## Research Project 1

- URL: test.html
- Date: Jan 1, 2020
- Tags: Cars

# Projects

## Autonomous Racecar Overtake @ 140+ mph

- URL: img/content/lvms2024_demo.mp4
- Tags: Perception, Behavior Prediction, State Estimation

## Binary operations for Othello Minimax Search

- URL: pages/othello/index.html
- Tags: Game AI, Minimax Search, Othello

## Ascent - Vertical Take-off and Landing Rocket

- URL: pages/ascent/index.html
- Tags: State Estimation, Controls, Simulink, CAD

## Power Amplifier Circuit Design

- URL: pages/speaker/index.html
- Tags: Analog Electronics, Audio Processing, Signal Filtering
`;
        const sections = parseMarkdown(text);

        // Populate biography
        document.getElementById('biography').innerHTML = sections.biography;

        // Populate research
        const researchList = document.getElementById('research-list');
        sections.research.forEach(item => {
            researchList.appendChild(createProjectItem(item));
        });

        // Populate projects
        const projectsList = document.getElementById('projects-list');
        sections.projects.forEach(item => {
            projectsList.appendChild(createProjectItem(item));
        });
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

function parseMarkdown(text) {
    const lines = text.split('\n').filter(line => line.trim());
    const sections = {
        biography: '',
        research: [],
        projects: []
    };

    let currentSection = null;
    let currentItem = null;

    for (let line of lines) {
        if (line.startsWith('# Biography')) {
            currentSection = 'biography';
            currentItem = null;
        } else if (line.startsWith('# Research')) {
            currentSection = 'research';
            currentItem = null;
        } else if (line.startsWith('# Projects')) {
            currentSection = 'projects';
            currentItem = null;
        } else if (line.startsWith('## ')) {
            if (currentItem) {
                if (currentSection === 'research') {
                    sections.research.push(currentItem);
                } else if (currentSection === 'projects') {
                    sections.projects.push(currentItem);
                }
            }
            currentItem = {
                title: line.substring(3).trim(),
                url: '',
                date: '',
                tags: []
            };
        } else if (line.startsWith('- URL:')) {
            if (currentItem) currentItem.url = line.substring(6).trim();
        } else if (line.startsWith('- Date:')) {
            if (currentItem) currentItem.date = line.substring(7).trim();
        } else if (line.startsWith('- Tags:')) {
            if (currentItem) {
                const tagsStr = line.substring(7).trim();
                currentItem.tags = tagsStr.split(',').map(tag => tag.trim());
            }
        } else if (currentSection === 'biography' && !line.startsWith('#')) {
            sections.biography += line.trim().replace(/\\/g, '<br/>') + ' ';
        }
    }

    // Push last item
    if (currentItem) {
        if (currentSection === 'research') {
            sections.research.push(currentItem);
        } else if (currentSection === 'projects') {
            sections.projects.push(currentItem);
        }
    }

    sections.biography = sections.biography.trim();
    return sections;
}

function createProjectItem(item) {
    const div = document.createElement('div');
    div.className = 'project-item';

    const dash = document.createElement('span');
    dash.className = 'project-dash';
    dash.textContent = '–';

    const title = document.createElement('h3');
    if (item.url) {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.title; // Remove the dash from here
        title.appendChild(link);
    } else {
        title.textContent = item.title; // Remove the dash from here
    }

    const meta = document.createElement('div');
    meta.className = 'project-meta';

    const parts = [];
    if (item.date) parts.push(item.date);
    parts.push(...item.tags);

    meta.textContent = parts.join(' • ');

    div.appendChild(dash);
    div.appendChild(title);
    div.appendChild(meta);

    return div;
}

// Load content on page load
loadContent();