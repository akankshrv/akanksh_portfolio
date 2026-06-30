export const personalInfo = {
  name: "Akanksh",
  title: "Software Engineer",
  tagline:
    "Software engineer building scalable backends, distributed systems, and AI-powered applications.",
  email: "akankshvijay@gmail.com",
  github: "https://github.com/akankshrv",
  linkedin: "https://linkedin.com/in/akankshrv",
  location: "San Francisco, CA",
};

export const about = {
  summary: `MS Computer Science student at California State University, East Bay with hands-on experience
    building production backends, distributed systems, and AI-powered applications. I specialize in Next.js,
    FastAPI, Go, and cloud-native architectures — from embedded databases to multi-agent LLM pipelines.`,
  highlights: [
    "Backend engineer focused on scalable, reliable systems.",
    "Building AI-powered applications and LLM workflows.",
    "Shipping production-ready software with Docker, AWS, and CI/CD.",
  ],
};

export const experience = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Antela.ai, Inc",
    period: "Jan 2026 – May 2026",
    location: "San Ramon, CA",
    highlights: [
      "Developed a production backend using FastAPI with modular routers for listings, billing, authentication, and AI workflows, applying API design best practices and object-oriented programming principles.",
      "Designed a storage abstraction layer over AWS S3 and local storage with presigned URLs enabling secure document access across environments.",
      "Implemented CI/CD pipelines using GitHub Actions for automated testing (unit and integration) and deployment, streamlining code integration across development and production environments.",
      "Managed and debugged backend services in Linux-based environments using Docker containers and AWS ECS, including log analysis and production incident resolution.",
      "Integrated Stripe subscription lifecycle management with webhook handling and idempotent event processing.",
      "Built an async two-phase AI pipeline for parallel LLM calls using ThreadPoolExecutor and functional programming patterns, reducing latency and improving fault tolerance.",
      "Built multi-agent LLM orchestration using LangGraph and developed Next.js Marketing Center with role-based routing and server-side PDF generation.",
      "Architected Redis as a shared service for idempotency, Pub/Sub live UI events, and secure per-user async job ownership across Celery workflows.",
      "Engineered Celery pipelines with Redis as broker and result backend, leveraging efficient data structures for idempotency and driving AI draft extraction, OM generation, listing notifications, and scheduled lead outreach via Beat schedules.",
      "Participated in code reviews, technical discussions, and architecture conversations to ensure clean, well-tested, production-ready code.",
    ],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Atpar Technologies Pvt Ltd",
    period: "Feb 2024 – May 2024",
    location: "Bangalore, India",
    highlights: [
      "Developed a healthcare platform using Next.js and Spring Boot with MySQL, optimizing SQL queries and database schema design for handling 1000+ daily patient appointments.",
      "Implemented JWT authentication and role-based access control with real-time updates via WebSockets under 200ms latency.",
      "Containerized services using Docker and deployed through AWS ECR/ECS improving integration response times by 40%.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Go", "Python", "Java", "JavaScript", "TypeScript", "C/C++"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "Microservices",
      "Kafka",
      "API Design",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (RDS, S3, ECS, ECR, EC2)",
      "GCP (Cloud Run, Container Registry)",
      "Docker",
      "Azure",
    ],
  },
  {
    category: "AI / Machine Learning",
    items: [
      "PyTorch",
      "LangGraph",
      "RAG pipelines",
      "OpenAI API",
      "Embedding systems",
    ],
  },
  {
    category: "Software Engineering Concepts",
    items: [
      "Data Structures",
      "Object-oriented Programming",
      "Functional Programming",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Science, Computer Science",
    institution: "California State University, East Bay",
    period: "Aug 2024 – May 2026",
    location: "Hayward, CA",
    gpa: "3.97/4.00",
    coursework: [
      "Advanced Algorithm Design",
      "Advanced AI",
      "Machine Learning",
      "System Design",
      "Web Systems",
      "Operating Systems",
      "Cyber Security",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Engineering, Information Science",
    institution: "Dayananda Sagar College of Engineering",
    period: "Nov 2020 – May 2024",
    location: "Bangalore, India",
    gpa: "9.26/10.00",
    coursework: [
      "Data Structures",
      "Database Management Systems",
      "Cloud Computing",
      "Computer Networks",
    ],
  },
];

export type ProjectCategory =
  | "ai-full-stack"
  | "machine-learning"
  | "distributed-systems";

export type ProjectFilterId = ProjectCategory | "all";

export const projectFilters: { id: ProjectFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai-full-stack", label: "AI Full Stack" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "distributed-systems", label: "Distributed Systems" },
];

export const projects = [
  {
    id: 1,
    title: "DBgo – Embedded NoSQL Database",
    github: "https://github.com/akankshrv/DBgo",
    category: "distributed-systems" as ProjectCategory,
    highlights: [
      "Engineered a lightweight embedded NoSQL database in Go using bbolt, supporting 1,000+ concurrent clients with optimized disk-backed key–value storage and efficient memory usage.",
      "Built ACID-compliant transaction management and custom JSON encoders/decoders, writing unit and integration tests with Go's testing package to ensure production-ready code quality.",
      "Designed secondary indexing and pagination mechanisms to reduce query latency and improve retrieval efficiency for large datasets.",
      "Integrated the database into a CI pipeline and conducted peer code reviews to maintain high code standards and catch issues early.",
    ],
  },
  {
    id: 2,
    title: "CacheGo – Distributed In-Memory Cache",
    github: "https://github.com/akankshrv/CacheGo",
    category: "distributed-systems" as ProjectCategory,
    highlights: [
      "Architected a distributed in-memory cache in Go using TCP-based communication, achieving 2,000+ requests/sec throughput with low-latency key–value operations.",
      "Built a self-organizing distributed cluster using the Raft algorithm, supporting 100+ nodes with ~500ms leader election and sub-millisecond replication updates for high availability.",
      "Implemented a custom binary serialization protocol for cache commands, reducing network overhead and improving command execution latency across distributed nodes.",
      "Containerized cache nodes with Docker to create scalable test environments and streamline deployments.",
    ],
  },
  {
    id: 3,
    title: "Moodify – Emotion-Based Music Recommendation",
    github: "https://github.com/akankshrv/Moodify",
    category: "ai-full-stack" as ProjectCategory,
    highlights: [
      "Built an AI-powered music recommendation platform with Pinterest OAuth, deployed on GCP using Cloud Run and GCR for scalable containerized access.",
      "Leveraged Google Vision API to extract emotional signals from images, processed through a generative AI model to map emotions to Spotify musical attributes.",
      "Designed a multimodal pipeline combining image understanding, generative AI, and music metadata for emotion-aware personalized recommendations.",
    ],
  },
  {
    id: 4,
    title: "Vision Up – Virtual Voice Assistant",
    github: "https://github.com/akankshrv/VisionUp",
    category: "machine-learning" as ProjectCategory,
    highlights: [
      "Trained a ResNet-based facial recognition and emotion detection model using TensorFlow, enabling real-time interpretation of social interactions with high accuracy for visually impaired users.",
      "Deployed YOLOv8 for real-time multi-object identification with sub-second inference, integrated with OpenAI and Groq APIs to power voice-triggered situational awareness queries.",
      "Architected production deployment using NGINX for high-performance request routing and Flask for backend communication, supporting concurrent user sessions with low-latency real-time interaction.",
    ],
  },
  {
    id: 5,
    title: "DNSgo – High-Performance DNS Resolver",
    github: "https://github.com/akankshrv/DNSgo",
    category: "distributed-systems" as ProjectCategory,
    highlights: [
      "Developed a high-performance DNS resolver from scratch, implementing recursive query handling and efficient domain name resolution using Go's dnsmessage package, resulting in improved lookup speeds and reliability.",
      "Architected an intelligent DNS discovery system that dynamically identifies and validates authoritative nameservers, enabling more accurate and resilient domain resolution across diverse network conditions.",
      "Engineered a secure UDP-based DNS communication layer with cryptographic request ID randomization, demonstrating expertise in low-level network programming and DNS protocol implementation.",
    ],
  },
  {
    id: 6,
    title: "Translatron – Transformer-Based Translation Model",
    github: "https://github.com/akankshrv/translatron",
    category: "machine-learning" as ProjectCategory,
    highlights: [
      "Built a Transformer architecture from scratch for English-to-Italian translation, leveraging deep learning frameworks and NLP methodologies.",
      "Applied positional encoding in log space for improved numerical stability and integrated dropout for regularization, enhancing performance and scalability.",
      "Implemented multi-head attention, encoder-decoder layers, and feed-forward networks achieving 92% training accuracy on 30,000 tokens, leveraging transfer learning and contextual embeddings.",
    ],
  },
  {
    id: 7,
    title: "synthAI – Perplexity-Style Hybrid RAG Search",
    github: "https://github.com/akankshrv/synthAI",
    category: "ai-full-stack" as ProjectCategory,
    highlights: [
      "Built a hybrid RAG retrieval pipeline combining dense BGE embeddings and BM25 sparse search through RRF fusion, cross-encoder reranking, and MMR diversity, on top of a query rewrite plus decomposition flow (up to 3 sub-queries, deduplicated at a 0.92 similarity threshold).",
      "Shipped a full-stack Perplexity-style search app: FastAPI backend streaming live pipeline stage events and token output over Server-Sent Events, paired with a Next.js frontend for multi-turn threads, pipeline stage visualization, and source links.",
      "Designed a two-layer storage and cache system (Chroma vector store with content-hash dedup and a 72-hour TTL purge, Redis page cache with a 24-hour TTL) to skip redundant fetch and embed calls across sessions.",
      "Built a Ragas-based evaluation harness (faithfulness, answer relevancy, context precision) with ablation flags to isolate the impact of reranking, BM25, and MMR, backed by production observability through JSONL pipeline traces and token count tracking.",
    ],
  },
  {
    id: 8,
    title: "CT Denoising GAN – Medical Image Denoising",
    github: "https://github.com/akankshrv/ct-denoising-gan",
    category: "machine-learning" as ProjectCategory,
    highlights: [
      "Built a GAN pipeline for medical image denoising, training a residual CNN generator (RED-CNN with 8 skip-connection blocks) against a U-Net discriminator to suppress noise in CT scans while preserving diagnostically relevant structure.",
      "Designed a custom composite loss function combining pixel-level MSE, a Sobel-based gradient loss (weighted at 20x) for edge sharpness, and a least-squares adversarial term, enabling the model to balance perceptual quality with structural fidelity.",
      "Iterated from baseline to an improved architecture by integrating channel attention into the generator (REDCNN-Attn) and adding an SSIM loss term, then rigorously compared both models on a held-out validation split using PSNR, SSIM, and RMSE.",
      "Engineered a robust training data pipeline with paired noisy/clean CT scan loading, random patch extraction (64x64), horizontal/vertical augmentation, and negative-stride buffer fixes, enabling efficient batch training on GPU with PyTorch DataLoader.",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Deep Learning Certificate",
    issuer: "Certificate Program",
    date: "",
    credentialUrl:
      "https://drive.google.com/file/d/1MHkNAQg9IaYHoWlleXBzrjTAT2v85rAo/view",
  },
  {
    id: 2,
    name: "Python for Data Science and ML Certificate",
    issuer: "Udemy",
    date: "",
    credentialUrl:
      "https://drive.google.com/file/d/1MGwP9B-nksZzzIFvQT1hFPoP-uSzASwI/view",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];
