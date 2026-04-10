import jsPDF from 'jspdf'
import { Document, Packer, Paragraph, HeadingLevel, AlignmentType } from 'docx'

export const generatePDF = async (userData) => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 15
  let yPosition = margin

  // Header
  doc.setFontSize(20)
  doc.setFont(undefined, 'bold')
  doc.text(userData.name || 'Your Name', margin, yPosition)
  
  yPosition += 10
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  doc.text(`${userData.title || 'Full Stack Developer'} | ${userData.email || 'email@example.com'}`, margin, yPosition)
  
  yPosition += 15

  // Summary
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Professional Summary', margin, yPosition)
  
  yPosition += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  const summaryText = userData.summary || 'Full-Stack Web Developer passionate about building secure, scalable web applications.'
  const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 2 * margin)
  doc.text(summaryLines, margin, yPosition)
  yPosition += summaryLines.length * 5 + 5

  // Skills
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Skills', margin, yPosition)
  
  yPosition += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  const skills = userData.skills || ['React', 'Node.js', 'MongoDB', 'JavaScript']
  const skillsText = skills.join(' • ')
  const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 2 * margin)
  doc.text(skillsLines, margin, yPosition)
  yPosition += skillsLines.length * 5 + 5

  // Experience
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Experience', margin, yPosition)
  
  yPosition += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  const experience = userData.experience || [
    { title: 'Full Stack Developer', company: 'Your Company', duration: '2023 - Present' }
  ]
  
  experience.forEach(exp => {
    doc.setFont(undefined, 'bold')
    doc.text(exp.title, margin, yPosition)
    doc.setFont(undefined, 'normal')
    doc.text(`${exp.company} | ${exp.duration}`, margin, yPosition + 5)
    yPosition += 12
  })

  // Education
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Education', margin, yPosition)
  
  yPosition += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  const education = userData.education || [
    { degree: 'Bachelor of Technology', field: 'Computer Science', institution: 'Your University' }
  ]
  
  education.forEach(edu => {
    doc.setFont(undefined, 'bold')
    doc.text(edu.degree, margin, yPosition)
    doc.setFont(undefined, 'normal')
    doc.text(`${edu.field} - ${edu.institution}`, margin, yPosition + 5)
    yPosition += 12
  })

  doc.save('resume.pdf')
}

export const generateDOCX = async (userData) => {
  const sections = [
    new Paragraph({
      text: userData.name || 'Your Name',
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER
    }),
    new Paragraph({
      text: `${userData.title || 'Full Stack Developer'} | ${userData.email || 'email@example.com'}`,
      alignment: AlignmentType.CENTER
    }),
    new Paragraph({
      text: '',
    }),
    new Paragraph({
      text: 'Professional Summary',
      heading: HeadingLevel.HEADING_2
    }),
    new Paragraph({
      text: userData.summary || 'Full-Stack Web Developer passionate about building secure, scalable web applications.'
    }),
    new Paragraph({
      text: '',
    }),
    new Paragraph({
      text: 'Skills',
      heading: HeadingLevel.HEADING_2
    }),
    new Paragraph({
      text: (userData.skills || ['React', 'Node.js', 'MongoDB', 'JavaScript']).join(' • ')
    }),
    new Paragraph({
      text: '',
    }),
    new Paragraph({
      text: 'Experience',
      heading: HeadingLevel.HEADING_2
    }),
    ...(userData.experience || [{ title: 'Full Stack Developer', company: 'Your Company', duration: '2023 - Present' }]).map(exp =>
      new Paragraph({
        text: `${exp.title} at ${exp.company} (${exp.duration})`
      })
    ),
    new Paragraph({
      text: '',
    }),
    new Paragraph({
      text: 'Education',
      heading: HeadingLevel.HEADING_2
    }),
    ...(userData.education || [{ degree: 'Bachelor of Technology', field: 'Computer Science', institution: 'Your University' }]).map(edu =>
      new Paragraph({
        text: `${edu.degree} in ${edu.field} from ${edu.institution}`
      })
    ),
  ]

  const doc = new Document({
    sections: [{ children: sections }]
  })

  const blob = await Packer.toBlob(doc)
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'resume.docx'
  link.click()
  window.URL.revokeObjectURL(url)
}
