// components/pdf-templates/creative-pdf.jsx
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/lib/resume";

export interface CreativePdfTemplateProps {
   data: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#374151',
  },
  header: {
    backgroundColor: '#0d9488', // emerald-600
    padding: 15,
    borderRadius: 6,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  contactContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    color: '#a7f3d0', // emerald-200
  },
  contactItem: {
    fontSize: 9,
  },
  separator: {
    fontSize: 9,
    color: '#a7f3d0',
  },
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  leftColumn: {
    width: '35%',
  },
  rightColumn: {
    width: '65%',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 1.5,
    borderBottomColor: '#0d9488', // emerald-600
    paddingBottom: 3,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitleDot: {
    width: 8,
    height: 8,
    backgroundColor: '#0d9488',
    borderRadius: 4,
    marginRight: 6,
  },
  aboutText: {
    fontSize: 9,
    lineHeight: 1.4,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillBadge: {
    fontSize: 8,
    backgroundColor: '#ccfbf1', // emerald-100
    color: '#0d9488',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontFamily: 'Helvetica-Bold',
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0d9488',
  },
  school: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  year: {
    fontSize: 8,
    color: '#6b7280',
  },
  field: {
    fontSize: 8,
    fontStyle: 'italic',
  },
  experienceItem: {
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#f0fdfa', // emerald-50
    borderLeftWidth: 3,
    borderLeftColor: '#0d9488',
    borderRadius: 3,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  position: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0d9488',
  },
  company: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  dateBadge: {
    fontSize: 8,
    backgroundColor: '#ccfbf1', // emerald-100
    color: '#0d9488',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    fontFamily: 'Helvetica-Bold',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.3,
  },
  portfolioSection: {
    marginBottom: 15,
  },
  portfolioItem: {
    marginBottom: 8,
  },
  portfolioTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 3,
  },
  portfolioDesc: {
    fontSize: 8,
    color: '#6b7280',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
    borderTopWidth: 0.5,
    borderTopColor: '#a7f3d0',
    paddingTop: 6,
    textAlign: 'center',
    fontSize: 7,
    color: '#0d9488',
  },
});

export function CreativePdfTemplate({ data }: CreativePdfTemplateProps) {
  const safeText = (text?: string) => text || '-';

  const experienceItems = (data.experience || []).filter(Boolean);
  const educationItems = (data.education || []).filter(Boolean);
  const skillsItems = (data.skills || []).filter(Boolean);

  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{safeText(data.personal.fullName)}</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactItem}>{safeText(data.personal.email)}</Text>
          <Text style={styles.separator}> | </Text>
          <Text style={styles.contactItem}>{safeText(data.personal.phone)}</Text>
          <Text style={styles.separator}> | </Text>
          <Text style={styles.contactItem}>{safeText(data.personal.location)}</Text>
        </View>
      </View>

      <View style={styles.container}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* About Section */}
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleDot} />
              <Text>About Me</Text>
            </View>
            <Text style={styles.aboutText}>{safeText(data.personal.summary)}</Text>
          </View>

          {/* Skills Section */}
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleDot} />
              <Text>Skills</Text>
            </View>
            <View style={styles.skillsContainer}>
              {skillsItems.map((skill, i) => (
                <Text key={i} style={styles.skillBadge}>{safeText(skill)}</Text>
              ))}
            </View>
          </View>

          {/* Education Section */}
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleDot} />
              <Text>Education</Text>
            </View>
            {educationItems.map((edu, i) => (
              <View key={i} style={styles.educationItem}>
                <Text style={styles.degree}>{safeText(edu.degree)}</Text>
                <Text style={styles.school}>{safeText(edu.school)}</Text>
                <Text style={styles.year}>{safeText(edu.graduationYear)}</Text>
                <Text style={styles.field}>{safeText(edu.field)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Experience Section */}
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleDot} />
              <Text>Professional Experience</Text>
            </View>
            {experienceItems.map((exp, i) => (
              <View key={i} style={styles.experienceItem}>
                <View style={styles.jobHeader}>
                  <View>
                    <Text style={styles.position}>{safeText(exp.position)}</Text>
                    <Text style={styles.company}>{safeText(exp.company)}</Text>
                  </View>
                  <Text style={styles.dateBadge}>
                    {safeText(exp.startDate)} – {safeText(exp.endDate)}
                  </Text>
                </View>
                <Text style={styles.description}>{safeText(exp.description)}</Text>
              </View>
            ))}
          </View>

          {/* Portfolio Section */}
          <View style={styles.portfolioSection}>
            <View style={styles.sectionTitle}>
              <View style={styles.sectionTitleDot} />
              <Text>Featured Projects</Text>
            </View>
            <View style={styles.portfolioItem}>
              <Text style={styles.portfolioTitle}>Project Title 1</Text>
              <Text style={styles.portfolioDesc}>Brief description of the project</Text>
            </View>
            <View style={styles.portfolioItem}>
              <Text style={styles.portfolioTitle}>Project Title 2</Text>
              <Text style={styles.portfolioDesc}>Brief description of the project</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Designed with creativity • Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </Text>
    </Page>
  );
}