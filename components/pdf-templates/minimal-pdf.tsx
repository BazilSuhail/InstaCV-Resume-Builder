// components/pdf-templates/minimal-pdf.jsx
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface PersonalData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary?: string;
}

interface ExperienceItem {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  graduationYear: string;
}

interface MinimalPdfTemplateProps {
  data: {
    personal: PersonalData;
    experience?: ExperienceItem[];
    education?: EducationItem[];
    skills?: string[];
  };
}

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  name: {
    fontSize: 24,
    fontWeight: 'light',
    marginBottom: 5,
    textAlign: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    fontSize: 8,
    color: '#6b7280',
    marginBottom: 25,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
    textAlign: 'center',
    color: '#374151',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 20,
    marginBottom: 12,
    color: '#1f2937',
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 3,
  },
  dates: {
    fontSize: 8,
    color: '#9ca3af',
  },
  description: {
    fontSize: 8,
    lineHeight: 1.4,
    color: '#374151',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  skill: {
    fontSize: 8,
    color: '#4b5563',
  },
  educationItem: {
    marginBottom: 10,
  },
  schoolName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  degree: {
    fontSize: 8,
    color: '#4b5563',
  },
});

export function MinimalPdfTemplate({ data }: MinimalPdfTemplateProps) {
  return ( 
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{data.personal.fullName}</Text>
        <View style={styles.contactInfo}>
          <Text>{data.personal.email}</Text>
          <Text>|</Text>
          <Text>{data.personal.phone}</Text>
          <Text>|</Text>
          <Text>{data.personal.location}</Text>
        </View>

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
                <Text key={i} style={styles.skill}>
                  {skill}
                  {i < (data.skills?.length || 0) - 1 ? ' •' : ''}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page> 
  );
}