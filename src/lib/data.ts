export interface Scholarship {
  id: string;
  title: string;
  amount: string;
  deadline: string;
  posted: string;
  applicants: number;
  views: number;
  aiMatches: number;
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  match: number;
  avatar: string;
}

export interface DashboardStats {
  activeScholarships: number;
  activeChange: string;
  totalApplications: number;
  pendingApplications: number;
  drafts: number;
  activeDrafts: number;
  pendingReview: number;
  pendingChange: string;
}

export const scholarships: Scholarship[] = [
  {
    id: "1",
    title: "Jay Kennedy Memorial Scholarship in Cartooning",
    amount: "$5,000",
    deadline: "Jan 13, 2025",
    posted: "Posted 4 hour ago",
    applicants: 48,
    views: 382,
    aiMatches: 6,
  },
  {
    id: "2",
    title: "Jay Kennedy Memorial Scholarship in Cartooning",
    amount: "$2000",
    deadline: "Jan 18, 2025",
    posted: "Posted 3 days ago",
    applicants: 28,
    views: 332,
    aiMatches: 4,
  },
  {
    id: "3",
    title: "Jay Kennedy Memorial Scholarship in Cartooning",
    amount: "$2500",
    deadline: "Jan 23, 2025",
    posted: "Posted 7 days ago",
    applicants: 15,
    views: 210,
    aiMatches: 3,
  },
];

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Michael Chen",
    role: "Frontend Developer",
    match: 95,
    avatar: "MC",
  },
  {
    id: "2",
    name: "Leslie Alexander",
    role: "Design Manager",
    match: 84,
    avatar: "LA",
  },
  {
    id: "3",
    name: "Kimmy McKinsey",
    role: "Product Admin",
    match: 82,
    avatar: "KM",
  },
];

export const stats: DashboardStats = {
  activeScholarships: 9,
  activeChange: "+15% to last month",
  totalApplications: 345,
  pendingApplications: 0,
  drafts: 9,
  activeDrafts: 8,
  pendingReview: 9,
  pendingChange: "+12% to last month",
};

export const user = {
  name: "Sohan Talukder",
  greeting: "Welcome back, Sohan Talukder! Here's what's happening today.",
};
