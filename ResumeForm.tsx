import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PlusCircle, MinusCircle } from "lucide-react"
import { useCallback } from "react"

interface ResumeFormProps {
  data: any
  setData: (data: any) => void
}

export default function ResumeForm({ data, setData }: ResumeFormProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleArrayChange = (index: number, field: string, subfield: string, value: string) => {
    const newArray = [...data[field]]
    newArray[index][subfield] = value
    setData({ ...data, [field]: newArray })
  }

  const addArrayItem = (field: string) => {
    const newItem =
      field === "workExperience"
        ? { company: "", position: "", duration: "", responsibilities: [""] }
        : field === "education"
          ? { degree: "", institution: "", duration: "" }
          : ""
    setData({ ...data, [field]: [...data[field], newItem] })
  }

  const removeArrayItem = (field: string, index: number) => {
    const newArray = [...data[field]]
    newArray.splice(index, 1)
    setData({ ...data, [field]: newArray })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={data.name} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={data.title} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="relevantExperience">Relevant Experience</Label>
          <Input
            id="relevantExperience"
            name="relevantExperience"
            value={data.relevantExperience}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="totalExperience">Total Experience</Label>
          <Input
            id="totalExperience"
            name="totalExperience"
            value={data.totalExperience}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={data.phone} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" value={data.email} onChange={handleInputChange} />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={data.location} onChange={handleInputChange} />
        </div>
      </div>

      <div>
        <Label htmlFor="summary">Summary</Label>
        <Textarea id="summary" name="summary" value={data.summary} onChange={handleInputChange} />
      </div>

      <div>
        <Label htmlFor="careerObjective">Career Objective</Label>
        <Textarea
          id="careerObjective"
          name="careerObjective"
          value={data.careerObjective}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label>Work Experience</Label>
        {data.workExperience.map((exp: any, index: number) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <Input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleArrayChange(index, "workExperience", "company", e.target.value)}
              className="mb-2"
            />
            <Input
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleArrayChange(index, "workExperience", "position", e.target.value)}
              className="mb-2"
            />
            <Input
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => handleArrayChange(index, "workExperience", "duration", e.target.value)}
              className="mb-2"
            />
            <Textarea
              placeholder="Responsibilities (one per line)"
              value={exp.responsibilities.join("\n")}
              onChange={(e) =>
                handleArrayChange(index, "workExperience", "responsibilities", e.target.value.split("\n"))
              }
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeArrayItem("workExperience", index)}
              className="mt-2"
            >
              <MinusCircle className="mr-2 h-4 w-4" /> Remove
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("workExperience")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Work Experience
        </Button>
      </div>

      <div>
        <Label>Projects</Label>
        {data.projects.map((project: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={project}
              onChange={(e) => {
                const newProjects = [...data.projects]
                newProjects[index] = e.target.value
                setData({ ...data, projects: newProjects })
              }}
              className="mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeArrayItem("projects", index)}>
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("projects")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <div>
        <Label>Certificates and Awards</Label>
        {data.certificates.map((cert: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={cert}
              onChange={(e) => {
                const newCertificates = [...data.certificates]
                newCertificates[index] = e.target.value
                setData({ ...data, certificates: newCertificates })
              }}
              className="mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeArrayItem("certificates", index)}>
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("certificates")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Certificate/Award
        </Button>
      </div>

      <div>
        <Label>Education</Label>
        {data.education.map((edu: any, index: number) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <Input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleArrayChange(index, "education", "degree", e.target.value)}
              className="mb-2"
            />
            <Input
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => handleArrayChange(index, "education", "institution", e.target.value)}
              className="mb-2"
            />
            <Input
              placeholder="Duration"
              value={edu.duration}
              onChange={(e) => handleArrayChange(index, "education", "duration", e.target.value)}
              className="mb-2"
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeArrayItem("education", index)}
              className="mt-2"
            >
              <MinusCircle className="mr-2 h-4 w-4" /> Remove
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("education")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </div>

      <div>
        <Label>Technical Expertise</Label>
        {data.technicalExpertise.map((skill: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={skill}
              onChange={(e) => {
                const newSkills = [...data.technicalExpertise]
                newSkills[index] = e.target.value
                setData({ ...data, technicalExpertise: newSkills })
              }}
              className="mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeArrayItem("technicalExpertise", index)}>
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("technicalExpertise")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Technical Skill
        </Button>
      </div>

      <div>
        <Label>Skills / Exposure</Label>
        {data.skills.map((skill: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={skill}
              onChange={(e) => {
                const newSkills = [...data.skills]
                newSkills[index] = e.target.value
                setData({ ...data, skills: newSkills })
              }}
              className="mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeArrayItem("skills", index)}>
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("skills")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Skill
        </Button>
      </div>

      <div>
        <Label>Methodology / Approach</Label>
        {data.methodology.map((method: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={method}
              onChange={(e) => {
                const newMethods = [...data.methodology]
                newMethods[index] = e.target.value
                setData({ ...data, methodology: newMethods })
              }}
              className="mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeArrayItem("methodology", index)}>
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("methodology")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Methodology
        </Button>
      </div>

      <div>
        <Label>Tools</Label>
        {data.tools.map((tool: string, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              value={tool}
              onChange={(e) => {
                const newTools = [...data.tools]
                newTools[index] = e.target.value
                setData({ ...data, tools: newTools })
              }}
              className="mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeArrayItem("tools", index)}>
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addArrayItem("tools")} className="mt-2">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Tool
        </Button>
      </div>
    </div>
  )
}

