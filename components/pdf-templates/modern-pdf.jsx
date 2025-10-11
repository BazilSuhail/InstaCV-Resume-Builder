// components/pdf-templates/modern-pdf.jsx
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2 solid #2563eb',
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: 'row',
    gap: 15,
    fontSize: 9,
    color: '#4b5563',
    marginTop: 8,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginTop: 15,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 5,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  company: {
    fontSize: 10,
    color: '#4b5563',
    fontWeight: 'semibold',
    marginBottom: 3,
  },
  dates: {
    fontSize: 9,
    color: '#6b7280',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#374151',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillBadge: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '4 8',
    borderRadius: 3,
    fontSize: 9,
  },
  educationItem: {
    marginBottom: 10,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  degree: {
    fontSize: 9,
    color: '#4b5563',
  },
});

export function ModernPdfTemplate({ data }) {
  return ( 
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.fullName}</Text>
          <View style={styles.contactInfo}>
            <Text>{data.personal.email}</Text>
            <Text>•</Text>
            <Text>{data.personal.phone}</Text>
            <Text>•</Text>
            <Text>{data.personal.location}</Text>
          </View>
        </View>

        {/* Summary */}
        {data.personal.summary && (
          <Text style={styles.summary}>{data.personal.summary}</Text>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.experienceItem}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitle}>{exp.position}</Text>
                  <Text style={styles.dates}>
                    {exp.startDate} – {exp.endDate}
                  </Text>
                </View>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.description}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.educationItem}>
                <View style={styles.jobHeader}>
                  <Text style={styles.schoolName}>{edu.school}</Text>
                  <Text style={styles.dates}>{edu.graduationYear}</Text>
                </View>
                <Text style={styles.degree}>
                  {edu.degree} in {edu.field}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {data.skills.map((skill, i) => (
                <Text key={i} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page> 
  );
}