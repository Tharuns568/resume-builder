export interface ResumeData {
  name: string
  title: string
  relevantExperience: string
  totalExperience: string
  phone: string
  email: string
  location: string
  summary: string
  careerObjective: string
  workExperience: Array<{
    company: string
    position: string
    duration: string
    responsibilities: string[]
  }>
  projects: string[]
  certificates: string[]
  education: Array<{
    degree: string
    institution: string
    duration: string
  }>
  technicalExpertise: string[]
  skills: string[]
  methodology: string[]
  tools: string[]
}

