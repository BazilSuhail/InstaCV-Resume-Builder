// components/pdf-templates/creative-pdf.jsx
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/lib/resume";

export interface CreativePdfTemplateProps {
   data: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#374151',
  },
  header: {
    backgroundColor: '#0d9488', // emerald-600
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  contactContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    color: '#a7f3d0', // emerald-200
  },
  contactItem: {
    fontSize: 10,
  },
  separator: {
    fontSize: 10,
    color: '#a7f3d0',
  },
  container: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    width: '35%',
  },
  rightColumn: {
    width: '65%',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 2,
    borderBottomColor: '#0d9488', // emerald-600
    paddingBottom: 4,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitleDot: {
    width: 12,
    height: 12,
    backgroundColor: '#0d9488',
    borderRadius: 6,
    marginRight: 8,
  },
  aboutText: {
    fontSize: 10,
    lineHeight: 1.5,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  skillBullet: {
    width: 8,
    height: 8,
    backgroundColor: '#0d9488',
    borderRadius: 4,
    marginRight: 8,
  },
  skillText: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#0d9488',
  },
  school: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  year: {
    fontSize: 9,
    color: '#6b7280',
  },
  field: {
    fontSize: 9,
    fontStyle: 'italic',
  },
  experienceItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f0fdfa', // emerald-50
    borderLeftWidth: 4,
    borderLeftColor: '#0d9488',
    borderRadius: 4,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  position: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#0d9488',
  },
  company: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  dateBadge: {
    fontSize: 9,
    backgroundColor: '#ccfbf1', // emerald-100
    color: '#0d9488',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontFamily: 'Helvetica-Bold',
  },
  description: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  portfolioSection: {
    marginBottom: 20,
  },
  portfolioItem: {
    marginBottom: 10,
  },
  portfolioTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  portfolioDesc: {
    fontSize: 9,
    color: '#6b7280',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: '#a7f3d0',
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 8,
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
            {skillsItems.map((skill, i) => (
              <View key={i} style={styles.skillItem}>
                <View style={styles.skillBullet} />
                <Text style={styles.skillText}>{safeText(skill)}</Text>
              </View>
            ))}
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