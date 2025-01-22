import { type NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"
import type { ResumeData } from "@/types/resume"

export async function POST(req: NextRequest) {
  try {
    const data: ResumeData = await req.json()

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Set the content of the page
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            h1 {
              color: #4a148c;
            }
            h2 {
              color: #6a1b9a;
            }
            h3 {
              color: #7b1fa2;
            }
          </style>
        </head>
        <body>
          <h1>${data.name}</h1>
          <h2>${data.title}</h2>
          <p>Relevant experience: ${data.relevantExperience}</p>
          <p>Total experience: ${data.totalExperience}</p>
          <p>Contact: ${data.phone} | ${data.email} | ${data.location}</p>
          
          <h3>Summary</h3>
          <p>${data.summary}</p>
          
          <h3>Career Objective</h3>
          <p>${data.careerObjective}</p>
          
          <h3>Work Experience</h3>
          ${data.workExperience
            .map(
              (exp) => `
            <h4>${exp.company}</h4>
            <p>${exp.position} | ${exp.duration}</p>
            <ul>
              ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
            </ul>
          `,
            )
            .join("")}
          
          <h3>Key Projects / Involvements</h3>
          <ul>
            ${data.projects.map((project) => `<li>${project}</li>`).join("")}
          </ul>
          
          <h3>Certificates and Awards</h3>
          <ul>
            ${data.certificates.map((cert) => `<li>${cert}</li>`).join("")}
          </ul>
          
          <h3>Education</h3>
          ${data.education
            .map(
              (edu) => `
            <p><strong>${edu.degree}</strong></p>
            <p>${edu.institution} | ${edu.duration}</p>
          `,
            )
            .join("")}
          
          <h3>Technical Expertise</h3>
          <ul>
            ${data.technicalExpertise.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
          
          <h3>Skills / Exposure</h3>
          <ul>
            ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
          
          <h3>Methodology/Approach</h3>
          <ul>
            ${data.methodology.map((method) => `<li>${method}</li>`).join("")}
          </ul>
          
          <h3>Tools</h3>
          <ul>
            ${data.tools.map((tool) => `<li>${tool}</li>`).join("")}
          </ul>
        </body>
      </html>
    `)

    // Generate PDF
    const pdf = await page.pdf({ format: "A4" })

    await browser.close()

    // Return the PDF as a response
    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF", details: error.message }, { status: 500 })
  }
}

