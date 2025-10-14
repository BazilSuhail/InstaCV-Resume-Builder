// components/pdf-templates/modern-minimal-pdf.jsx
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { ResumeData } from "@/lib/resume";

export interface ModernMinimalPdfProps {
  data: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: "#000000"
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 6
  },
  contact: {
    marginBottom: 24
  },
  contactLine: {
    fontSize: 10,
    marginBottom: 3
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 28
  },
  section: {
    marginBottom: 28
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bold: {
    fontWeight: "bold"
  },
  expItem: {
    marginBottom: 16
  },
  company: {
    fontSize: 10,
    marginTop: 2
  },
  description: {
    fontSize: 10,
    marginTop: 4,
    lineHeight: 1.4
  },
  skillBadge: {
    fontSize: 9,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 6,
    marginBottom: 6
  }
});

export function ModernPdfTemplate({ data }: ModernMinimalPdfProps) {
  const safe = (v?: string) => v || "-";

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.name}>{safe(data.personal.fullName)}</Text>

      <View style={styles.contact}>
        <Text style={styles.contactLine}>{safe(data.personal.email)}</Text>
        <Text style={styles.contactLine}>{safe(data.personal.phone)}</Text>
        <Text style={styles.contactLine}>{safe(data.personal.location)}</Text>
      </View>

      {data.personal.summary && (
        <Text style={styles.summary}>{safe(data.personal.summary)}</Text>
      )}

      {data.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>

          {data.experience.map((e, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.row}>
                <Text style={styles.bold}>{safe(e.position)}</Text>
                <Text>{safe(e.startDate)} – {safe(e.endDate)}</Text>
              </View>

              <Text style={styles.company}>{safe(e.company)}</Text>

              <Text style={styles.description}>
                {safe(e.description)}
              </Text>
            </View>
          ))}
        </View>
      )}

      {data.skills?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {data.skills.map((s, i) => (
              <Text key={i} style={styles.skillBadge}>
                {safe(s)}
              </Text>
            ))}
          </View>
        </View>
      )}

      {data.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          {data.education.map((edu, i) => (
            <View key={i} style={{ marginBottom: 14 }}>
              <View style={styles.row}>
                <Text style={styles.bold}>{safe(edu.school)}</Text>
                <Text>{safe(edu.graduationYear)}</Text>
              </View>

              <Text>
                {safe(edu.degree)} in {safe(edu.field)}
              </Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  );
}
