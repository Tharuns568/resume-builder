import type { ResumeData } from "@/types/resume"

export default function ResumePreview({ data }: { data: ResumeData }) {
  return (
    <div className="bg-white p-8 shadow-lg mx-auto" style={{ width: "210mm", minHeight: "297mm", fontSize: "10px" }}>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-purple-800 mb-1">{data.name}</h1>
          <h2 className="text-lg text-purple-600 mb-1">{data.title}</h2>
          <p className="text-xs text-gray-600">Relevant experience: {data.relevantExperience}</p>
          <p className="text-xs text-gray-600">Total experience: {data.totalExperience}</p>
          <div className="mt-2">
            <p className="text-xs text-gray-600">
              {data.phone} | {data.email} | {data.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Summary</h3>
        <p className="text-xs text-gray-700">{data.summary}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Career Objective</h3>
        <p className="text-xs text-gray-700">{data.careerObjective}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Work Experience</h3>
        {data.workExperience.map((exp, index) => (
          <div key={index} className="mb-2">
            <h4 className="font-semibold text-purple-600 text-xs">{exp.company}</h4>
            <p className="text-xs text-gray-700 italic">
              {exp.position} | {exp.duration}
            </p>
            <ul className="list-disc list-inside text-xs text-gray-600 mt-1">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Key Projects</h3>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {data.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Certificates</h3>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {data.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Education</h3>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-1">
            <p className="font-semibold text-xs text-purple-600">{edu.degree}</p>
            <p className="text-xs text-gray-700 italic">
              {edu.institution} | {edu.duration}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">
            Technical Expertise
          </h3>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {data.technicalExpertise.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">
            Skills / Exposure
          </h3>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Methodology</h3>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {data.methodology.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-purple-700 mb-1 border-b border-purple-200 pb-1">Tools</h3>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {data.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

