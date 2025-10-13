// components/pdf-templates/one-col-pdf.jsx
import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { ResumeData } from "@/lib/resume";

export interface OneColPdfProps {
  data: ResumeData;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Times-Roman",
    color: "#000000"
  },
  name: {
    fontSize: 32,
    fontFamily: "Times-Bold",
    marginBottom: 6
  },
  contact: {
    marginBottom: 16
  },
  contactLine: {
    fontSize: 10,
    marginBottom: 4
  },
  summary: {
    fontSize: 10,
    marginBottom: 20,
    lineHeight: 1.4
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Times-Bold",
    marginBottom: 10,
    textTransform: "uppercase"
  },
  skillBadge: {
    fontSize: 10,
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
    marginRight: 6,
    marginBottom: 6
  },
  expItem: {
    marginBottom: 14
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2
  },
  bold: {
    fontFamily: "Times-Bold"
  },
  description: {
    fontSize: 10,
    lineHeight: 1.4
  }
});

export function MinimalPdfTemplate({ data }: OneColPdfProps) {
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

      {data.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.experience.map((e, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.row}>
                <Text style={styles.bold}>{safe(e.position)}</Text>
                <Text>{safe(e.startDate)} – {safe(e.endDate)}</Text>
              </View>
              <Text style={styles.bold}>{safe(e.company)}</Text>
              <Text style={styles.description}>{safe(e.description)}</Text>
            </View>
          ))}
        </View>
      )}

      {data.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={{ marginBottom: 10 }}>
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
