export const navbar = {
	logo_text: 'LordJatonyas'
};

// if you dont want it, just set it to an empty string
export const socials = {
	text_on_right: 'LordJatonyas',
	linkedin: `https://www.linkedin.com/in/lee-chih-jung/`,
	github: `https://github.com/lordjatonyas`,
	x: `https://x.com/LCJJohn`
};

export const hi = {
	section_id: `Hi`,
	greeting: `Hi, my name is`,
	name: `John Lee`,
	what_is_this: `Welcome to my webpage.`,
	who_am_i: `I'm an Engineering Science student at Oxford with a passion for wearable technology.`,
	button: {
		text: `Talk on X!`,
		href: socials.x
	}
};

export const about = {
	section_title: 'About Me',
	section_id: 'About',
	paragraphs: [
		`Hello! My name is John.`,
		`I'm a final year engineering student at Oxford, with keen ambitions in wearable technology.
		I am currently building a stealth startup (AIMO Labs) in this space, with plans to launch 
		late 2025 - early 2026, so stay tuned!`,
		`As an engineer, these are some technical skills I'm most proficient with:`
	],
	skills: [
		'Python',
		'Reinforcement Learning',
		'Signal Analysis',
		'Biometrics',
		'Git',
		'Linux',
        ''
	]
};

export const experiences = {
	section_title: 'Where I’ve Worked',
	section_id: 'Experiences',
	list: [
		{
			company: 'AIMO Labs',
			title: 'Co-founder & Lead Engineer',
			when: 'Feb 2025 - present',
			points: [
				'Prize winner at OX1 Demo Day 2025.',
				'Currently in stealth mode!'
			]
		},
		{
			company: 'OxNeurotech',
			title: 'Project Lead, President',
			when: 'May 2023 - Jan 2024, Jan 2024 - Mar 2025',
			href: 'https://www.oxfordsu.org/get-involved/clubs-and-societies/join/oxneurotech/',
			points: [
				"Oxford's neurotechnology student society.",
				'Initiated project workshops that encourage weekly building among society members.',
				'Independently taught 3 technical workshops to introduce members to increasingly advanced analysis techniques.',
				"Provided technical support to users of the society's equipment."
			]
		},
		{
			company: 'UCL',
			title: 'Research Intern',
			when: 'Jun 2024 - Sep 2024',
			href: 'http://www.dendrites.org',
			points: [
				'Neural Computation Lab (Hausser Lab)',
				'Investigated data analysis techniques on electrophysiological neural recordings in CA1 and CA3 of mice hippocampus.',
				'Obtained Personal License (PIL A & B) for mice handling.',
				'Refactored and optimized the preprocessing algorithms for neuronal spike sorting.'
			]
		},
		{
			company: 'ORIon',
			title: 'Technical Team Member, Technical Team Lead',
			when: 'Jan 2022 - Sep 2022, Oct 2022 - Jul 2023',
			href: 'https://ori.ox.ac.uk/student-teams/team-orion/',
			points: [
				"Oxford Robotics Institute's student robotics team.",
				'Established a pipeline for testing speech recognition models and noise reduction performance.',
				'Assimilated 3 new members into the team, assisting with software setup and understanding of tasks.',
				"Debugged and demoed our robot during the Engineering Department's 16 Sep Open Day.",
				'Implemented programs for hotword detection and speech-to-text transcription for the robot.'
			]
		},
		{
			company: 'SAF',
			title: 'Intelligence Research Trainee, Intelligence Research Assistant',
			when: 'Jan 2019 - Apr 2019, Apr 2019 - Jan 2021',
			points: [
				"Mandatory military service in the Singapore Armed Forces.",
				'Conducted real-time investigations to support threat assessments during maritime crises.',
				'Trained to support Humanitarian Assistance and Disaster Relief (HADR) missions and Peace Support Operations (PSO).'
			]
		}
	]
};

export const projects = {
	section_title: 'What I’ve Built',
	section_id: 'Projects',
	list: [
		{
			title: 'Oxford BuildX 2025: Paperpal',
			points: [
				'Finalist and connected to VC.',
				'A resesarch tool to chat about research papers.'
			],
			tools: ['Lovable', 'Supabase', 'Typescript'],
		},
		{
			title: 'London Neurohack 2025: TrueCadence',
			points: ['Adaptive video playback based on real-time user EEG signals.'],
			tools: ['Python', 'EEG', 'OpenBCI'],
			href: 'https://github.com/OxNeurotech/True-Cadence'
		},
		{
			title: 'AutoPhysio',
			points: [
				"3rd year design project at Oxford.",
				'EMG-empowered knee brace for ACL rehab.'
			],
			tools: ['Python', 'typst', 'Swift'],
		},
		{
			title: 'X-Y Plotter',
			points: [
				"2nd year 3D printing module at Oxford.",
				'Pen plotter that turns digital images to drawings on paper.'
			],
			tools: ['Python', 'GCode', 'Solidworks'],
			href: 'https://github.com/LordJatonyas/XY-Plotter',
		},
		{
			title: 'Oxford Hack 2022: FoodSave',
			points: [
				"Winner of the 'Hack to reduce inequality' track.",
				'Food delivery for rough sleepers in Oxford.'
			],
			tools: ['Python', 'Django', 'SQLite3'],
			href: 'https://devpost.com/software/homeless-tracking-and-food-delivery-app'
		}
	]
};

export const contact = {
	section_title: 'Get in Touch',
	section_id: 'Contact',
	paragraphs: [
		`The best way to get hold of me is to DM me on X, but also happy to talk through email!`
	],
	button: {
		text: `Email me!`,
		href: "mailto: john.1201@icloud.com"
	}
};
