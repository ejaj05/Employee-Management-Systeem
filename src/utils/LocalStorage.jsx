const employees =  [
    {
      "id": 1,
      "firstName": "Amit",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Homepage",
          "taskDescription": "Design an engaging homepage for the new website, ensuring it follows branding guidelines, is user-friendly, and optimized for multiple devices. The layout should prioritize user experience and load speed.",
          "taskDate": "2024-10-23",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "color": "blue"
        },
        {
          "taskTitle": "Create Wireframes",
          "taskDescription": "Create detailed wireframes for the website layout, covering content, images, and interactions. These wireframes will serve as a blueprint for both design and development teams.",
          "taskDate": "2024-10-25",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "color": "green"
        },
        {
          "taskTitle": "Client Feedback",
          "taskDescription": "Gather client feedback on the wireframes and integrate requested changes. Ensure that the updates align with project goals and meet client expectations without compromising design integrity.",
          "taskDate": "2024-10-28",
          "category": "Feedback",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "color": "yellow"
        }
      ],
      "taskNumbers": [
        {
          "type": "active",
          "count": 2,
          "color": "blue"
        },
        {
          "type": "newTask",
          "count": 1,
          "color": "yellow"
        },
        {
          "type": "completed",
          "count": 1,
          "color": "green"
        },
        {
          "type": "failed",
          "count": 0,
          "color": "red"
        }
      ],
      "taskCount": {
        "active": 2,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
    {
      "id": 2,
      "firstName": "Rahul",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Backend Development",
          "taskDescription": "Develop and optimize API endpoints for the new module, ensuring scalability and security. The API should support multiple user requests and be easily integrated with the frontend system.",
          "taskDate": "2024-10-23",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "color": "red"
        },
        {
          "taskTitle": "Unit Testing",
          "taskDescription": "Perform unit testing for the API to ensure functions work correctly. Identify bugs, address performance issues, and ensure quality before deploying the module for further testing.",
          "taskDate": "2024-10-27",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "color": "purple"
        }
      ],
      "taskNumbers": [
        {
          "type": "active",
          "count": 1,
          "color": "red"
        },
        {
          "type": "newTask",
          "count": 1,
          "color": "yellow"
        },
        {
          "type": "completed",
          "count": 1,
          "color": "green"
        },
        {
          "type": "failed",
          "count": 0,
          "color": "blue"
        }
      ],
      "taskCount": {
        "active": 1,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
    {
      "id": 3,
      "firstName": "Neha",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Database Migration",
          "taskDescription": "Migrate the existing database to a new server, ensuring no data loss and minimal downtime. Backup all data, monitor migration, and verify data integrity post-transfer.",
          "taskDate": "2024-10-23",
          "category": "Database",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "color": "orange"
        },
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize database queries and indexing to improve performance. Test the changes in a controlled environment before applying them to the live system to avoid any disruptions.",
          "taskDate": "2024-10-26",
          "category": "Optimization",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "color": "green"
        }
      ],
      "taskNumbers": [
        {
          "type": "active",
          "count": 1,
          "color": "orange"
        },
        {
          "type": "newTask",
          "count": 1,
          "color": "yellow"
        },
        {
          "type": "completed",
          "count": 1,
          "color": "green"
        },
        {
          "type": "failed",
          "count": 0,
          "color": "red"
        }
      ],
      "taskCount": {
        "active": 1,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
    {
      "id": 4,
      "firstName": "Priya",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Security Review",
          "taskDescription": "Conduct a thorough security review of the application. Identify vulnerabilities and propose solutions for enhancing authentication, encryption, and access control measures.",
          "taskDate": "2024-10-24",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "color": "blue"
        },
        {
          "taskTitle": "Security Patching",
          "taskDescription": "Apply security patches to address vulnerabilities. Test the patches thoroughly before deploying them live and monitor the system after installation.",
          "taskDate": "2024-10-29",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "color": "green"
        }
      ],
      "taskNumbers": [
        {
          "type": "active",
          "count": 1,
          "color": "blue"
        },
        {
          "type": "newTask",
          "count": 1,
          "color": "yellow"
        },
        {
          "type": "completed",
          "count": 1,
          "color": "green"
        },
        {
          "type": "failed",
          "count": 0,
          "color": "red"
        }
      ],
      "taskCount": {
        "active": 1,
        "completed": 1,
        "failed": 0,
        "newTask": 1
      }
    },
    {
      "id": 5,
      "firstName": "Sanjay",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Marketing Strategy",
          "taskDescription": "Create a marketing strategy for the product launch, targeting key audiences through various channels. Focus on alignment with overall business goals and coordination with sales and product teams.",
          "taskDate": "2024-10-23",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "color": "red"
        },
        {
          "taskTitle": "Ad Campaign",
          "taskDescription": "Launch a digital ad campaign, monitor its performance, and adjust the strategy based on metrics like click-through and conversion rates. Address any issues promptly.",
          "taskDate": "2024-10-28",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "color": "purple"
        },
        {
          "taskTitle": "Social Media Strategy",
          "taskDescription": "Develop a social media strategy for the product launch. Post engaging content, manage interactions, and analyze audience engagement to boost visibility and brand recognition.",
          "taskDate": "2024-10-30",
          "category": "Social Media",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "color": "blue"
        }
      ],
      "taskNumbers": [
        {
          "type": "active",
          "count": 2,
          "color": "blue"
        },
        {
          "type": "newTask",
          "count": 2,
          "color": "yellow"
        },
        {
          "type": "completed",
          "count": 0,
          "color": "green"
        },
        {
          "type": "failed",
          "count": 1,
          "color": "red"
        }
      ],
      "taskCount": {
        "active": 2,
        "completed": 0,
        "failed": 1,
        "newTask": 2
      }
    }
  ]

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

