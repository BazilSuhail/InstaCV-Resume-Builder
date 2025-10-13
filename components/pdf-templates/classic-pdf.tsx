// components/pdf-templates/classic-pdf.jsx
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/lib/resume";

export interface ClassicPdfTemplateProps {
  data: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Times-Roman',
    color: '#000000',
  },
  container: {
    flexDirection: 'row',
    gap: 24,
  },
  // Left Column (w-48 = 192px, pr-6 = 24px)
  leftColumn: {
    width: 192,
    borderRight: '2 solid #d1d5db',
    paddingRight: 24,
  },
  leftSection: {
    marginBottom: 32,
  },
  leftSectionTitle: {
    fontSize: 10,
    fontFamily: 'Times-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#374151',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 10,
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    fontSize: 10,
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
  },
  // Right Column
  rightColumn: {
    flex: 1,
  },
  name: {
    fontSize: 36,
    fontFamily: 'Times-Bold',
    marginBottom: 4,
  },
  summary: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.5,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Times-Bold',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  experienceItem: {
    marginBottom: 16,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontFamily: 'Times-Bold',
  },
  dates: {
    fontSize: 10,
    color: '#4b5563',
  },
  company: {
    fontSize: 10,
    fontFamily: 'Times-Bold',
    color: '#374151',
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    lineHeight: 1.5,
    marginTop: 8,
  },
  educationItem: {
    marginBottom: 12,
  },
  schoolName: {
    fontSize: 10,
    fontFamily: 'Times-Bold',
  },
  degree: {
    fontSize: 10,
  },
});

export function ClassicPdfTemplate({ data }: ClassicPdfTemplateProps) {
  const safeText = (text?: string) => text || '-';

  const experienceItems = (data.experience || []).filter(Boolean);
  const educationItems = (data.education || []).filter(Boolean);
  const skillsItems = (data.skills || []).filter(Boolean);

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <View style={styles.leftSection}>
            <Text style={styles.leftSectionTitle}>Contact Info</Text>
            <Text style={styles.contactText}>{safeText(data.personal.email)}</Text>
            <Text style={styles.contactText}>{safeText(data.personal.phone)}</Text>
            <Text style={styles.contactText}>{safeText(data.personal.location)}</Text>
          </View>

          {skillsItems.length > 0 && (
            <View style={styles.leftSection}>
              <Text style={styles.leftSectionTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {skillsItems.map((skill, i) => (
                  <Text key={i} style={styles.skillBadge}>
                    {safeText(skill)}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.name}>{safeText(data.personal.fullName)}</Text>
          {data.personal.summary && (
            <Text style={styles.summary}>{safeText(data.personal.summary)}</Text>
          )}

          {/* Experience */}
          {experienceItems.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {experienceItems.map((exp, i) => (
                <View key={i} style={styles.experienceItem}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.jobTitle}>{safeText(exp.position)}</Text>
                    <Text style={styles.dates}>
                      {safeText(exp.startDate)} – {safeText(exp.endDate)}
                    </Text>
                  </View>
                  <Text style={styles.company}>{safeText(exp.company)}</Text>
                  <Text style={styles.description}>{safeText(exp.description)}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {educationItems.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {educationItems.map((edu, i) => (
                <View key={i} style={styles.educationItem}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.schoolName}>{safeText(edu.school)}</Text>
                    <Text style={styles.dates}>{safeText(edu.graduationYear)}</Text>
                  </View>
                  <Text style={styles.degree}>
                    {safeText(edu.degree)} in {safeText(edu.field)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  );
}

// export function ClassicPdfTemplate({ data }: ClassicPdfTemplateProps) {
//   return ( 
//       <Page size="A4" style={styles.page}>
//         <View style={styles.container}>
//           {/* Left Column */}
//           <View style={styles.leftColumn}>
//             {/* Contact Info */}
//             <View style={styles.leftSection}>
//               <Text style={styles.leftSectionTitle}>Contact Info</Text>
//               <Text style={styles.contactText}>{data.personal.email}</Text>
//               <Text style={styles.contactText}>{data.personal.phone}</Text>
//               <Text style={styles.contactText}>{data.personal.location}</Text>
//             </View>

//             {/* Skills */}
//             <View>
//               <Text style={styles.leftSectionTitle}>Skills</Text>
//               <View style={styles.skillsContainer}>
//                 {data.skills?.map((skill, i) => (
//                   <Text key={i} style={styles.skillBadge}>
//                     {skill}
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           </View>

//           {/* Right Column */}
//           <View style={styles.rightColumn}>
//             {/* Header */}
//             <Text style={styles.name}>{data.personal.fullName}</Text>
//             <Text style={styles.summary}>{data.personal.summary}</Text>

//             {/* Experience Section */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Experience</Text>
//               {data.experience?.map((exp, i) => (
//                 <View key={i} style={styles.experienceItem}>
//                   <View style={styles.jobHeader}>
//                     <Text style={styles.jobTitle}>{exp.position}</Text>
//                     <Text style={styles.dates}>
//                       {exp.startDate} – {exp.endDate}
//                     </Text>
//                   </View>
//                   <Text style={styles.company}>{exp.company}</Text>
//                   <Text style={styles.description}>{exp.description}</Text>
//                 </View>
//               ))}
//             </View>

//             {/* Education Section */}
//             <View>
//               <Text style={styles.sectionTitle}>Education</Text>
//               {data.education?.map((edu, i) => (
//                 <View key={i} style={styles.educationItem}>
//                   <View style={styles.jobHeader}>
//                     <Text style={styles.schoolName}>{edu.school}</Text>
//                     <Text style={styles.dates}>{edu.graduationYear}</Text>
//                   </View>
//                   <Text style={styles.degree}>
//                     {edu.degree} in {edu.field}
//                   </Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </View>
//       </Page> 
//   );
// }